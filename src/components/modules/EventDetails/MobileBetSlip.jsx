import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrentBets } from "../../../hooks/currentBets";
import useBalance from "../../../hooks/balance";
import { useExposure } from "../../../hooks/exposure";
// import { useOrderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { v4 as uuidv4 } from "uuid";
import { API, Settings } from "../../../api";
import toast from "react-hot-toast";
import { Clock, Minus, Plus } from "../../../assets/Icon/BetSlip";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import BetLoading from "./BetLoading";
import { AxiosJSEncrypt } from "../../../lib/AxiosJSEncrypt";
import useWhatsApp from "../../../hooks/whatsapp";

const MobileBetSlip = ({ currentPlaceBetEvent }) => {
  const { closePopupForForever } = useSelector((state) => state.global);
  const [isCashOut, setIsCashOut] = useState(false);
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();
  const { data: socialLink } = useWhatsApp();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchExposure } = useExposure(eventId);
  const { placeBetValues, price, stake, predictOdd } = useSelector(
    (state) => state?.event,
  );
  const { token } = useSelector((state) => state?.auth);

  // const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null,
      ),
    );
    setIsCashOut(placeBetValues?.cashout || false);
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: currentPlaceBetEvent?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: currentPlaceBetEvent?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: isCashOut,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */

  const handleOrderBets = async () => {
    setLoading(true);
    const payloadData = [
      {
        ...payload,
        site: Settings.siteUrl,
        nounce: uuidv4(),
        isbetDelay: socialLink?.bet_delay,
        apk: closePopupForForever ? true : false,
      },
    ];
    let delay = 0;
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 3 &&
      placeBetValues?.name?.length === 2
    ) {
      delay = 9000;
    }
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 7 &&
      placeBetValues?.name?.length === 3
    ) {
      delay = 9000;
    } else {
      setBetDelay(currentPlaceBetEvent?.betDelay);
      delay = socialLink?.bet_delay ? currentPlaceBetEvent?.betDelay * 1000 : 0;
    }

    // Introduce a delay before calling the API
    setTimeout(async () => {
      try {
        // const res = await createOrder(payloadData).unwrap();
        const { data } = await AxiosJSEncrypt.post(API.order, payloadData);
        if (data?.success) {
          setLoading(false);
          refetchExposure();
          refetchBalance();
          dispatch(setRunnerId(null));
          dispatch(setPlaceBetValues(null));
          refetchCurrentBets();
          setBetDelay("");
          dispatch(setStake(null));
          toast.success(data?.result?.result?.placed?.[0]?.message);
        } else {
          setLoading(false);
          toast.error(
            data?.error?.status?.[0]?.description || data?.error?.errorMessage,
          );
          setBetDelay("");
          setBetDelay(false);
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong. Please try again.");
        setBetDelay("");
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      const bookmaker = 1 + price / 100;
      const total = bookmaker * stake - stake;

      setProfit(formatNumber(total));
    } else if (price && stake && placeBetValues?.btype === "FANCY") {
      const profit =
        (parseFloat(placeBetValues?.bottomValue) * parseFloat(stake)) /
        parseFloat(stake);
      setProfit(profit);
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleCancelBet = () => {
    dispatch(setRunnerId(null));
    dispatch(setPlaceBetValues(null));
    dispatch(setStake(null));
  };
  const handleShowLoginModal = () => {
    dispatch(setShowLoginModal(true));
  };

  const handleButtonValue = (value) => {
    setIsCashOut(false);
    const buttonValue = Number(value);
    const prevStake = !stake ? null : Number(stake);

    if (prevStake === null) {
      dispatch(setStake(buttonValue));
    }
    if (prevStake >= 0) {
      dispatch(setStake(buttonValue + prevStake));
    }
  };
  const selectedEvent = predictOdd?.find(
    (odd) => odd?.id === placeBetValues?.selectionId,
  );
  return (
    <>
      {loading && (
        <BetLoading
          betDelay={betDelay}
          setBetDelay={setBetDelay}
          absolute={false}
        />
      )}
      <div className=" col-span-12 h-max w-full lg:hidden">
        <div
          title="Selected - Rajasthan Royals v Kolkata Knight Riders - Rajasthan Royals - 2954266"
          className={`w-full h-max bg-bg_color_betSlipBgColor font-lato origin-top transition-all flex flex-col ease-in-out p-2 pb-3 rounded-sm border-[2px] border-b-[5px]  transition-all duration-300 ease-in-out overflow-hidden transform-gpu ${
            placeBetValues?.back ? "border-backBtn" : "border-layBtn"
          }`}
        >
          <div className=" w-full grid grid-cols-12 gap-2">
            <div title="Odds: 2.18" className="col-span-5 flex flex-col gap-1">
              <label className="text-text_color_primary1 sm:text-xs text-[10px] font-normal">
                ODDS
              </label>
              <div className="flex items-center justify-center">
                {!placeBetValues?.isWeak && (
                  <button
                    onClick={() => {
                      handleDecreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice,
                      );
                      setIsCashOut(false);
                    }}
                    className="overflow-hidden w-full h-full flex items-center justify-center bg-bg_color_betSlipOddIncDecrBtnsGrd rounded-s-[4px] border border-border_color_primary4 border-r-0 text-xl font-normal text-center"
                  >
                    <Minus />
                  </button>
                )}
                <input
                  onChange={(e) => {
                    dispatch(setPrice(e.target.value));
                    setIsCashOut(false);
                  }}
                  placeholder="Enter Odds"
                  inputMode="numeric"
                  className="block w-full focus:outline-none  text-sm w-full h-full py-2 text-center rounded-[4px] flex items-center justify-center text-text_color_primary1 bg-bg_color_input_bg focus:border-border_color_activeInput active:border-border_color_activeInput"
                  type="number"
                  value={price}
                />
                {!placeBetValues?.isWeak && (
                  <button
                    onClick={() => {
                      handleIncreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice,
                      );
                      setIsCashOut(false);
                    }}
                    className="overflow-hidden w-full h-full flex items-center justify-center bg-bg_color_betSlipOddIncDecrBtnsGrd rounded-e-[4px] border border-border_color_primary4 border-r-0 text-xl font-normal text-center"
                  >
                    <Plus />
                  </button>
                )}
              </div>
            </div>
            <div
              title="Max Mkt: 0-Stake: 0"
              className="col-span-7 flex flex-col gap-1"
            >
              <label
                htmlFor="stakeInput"
                className="text-text_color_primary1 sm:text-xs text-[10px] font-normal flex items-center justify-between"
              >
                <span>STAKE</span>
                {/* <span>Max mkt : 0</span> */}
              </label>
              <input
                onChange={(e) => {
                  dispatch(setStake(e.target.value));
                  setIsCashOut(false);
                }}
                id="stakeInput"
                inputMode="numeric"
                className="block w-full focus:outline-none  text-md w-full h-full text-center focus:bg-bg_color_input_bg flex items-center justify-center border-[0.75px]  text-text_color_primary1 border-border_color_primary  placeholder:text-text_color_primary1 5 rounded-sm  text-text_color_primary1 bg-transparent
                    focus:border-oddInputBorderActive active:border-oddInputBorderActive
                     "
                placeholder={`Max bet: ${placeBetValues?.maxLiabilityPerBet}`}
                value={stake !== null && stake}
                type="number"
              />
            </div>
          </div>
          <div className=" w-full flex mt-[15px] items-center justify-center">
            <div
              title="Stakes"
              className=" w-full p-2.5 rounded-md border bg-bg_color_input_bg border-border_color_primary "
            >
              <div className=" grid grid-cols-12 gap-[7px]">
                {parseButtonValues?.slice(0, 6)?.map((button, i) => (
                  <button
                    key={i}
                    onClick={() => handleButtonValue(button?.value)}
                    className={`inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-4 w-full overflow-hidden text-[12px] font-semibold rounded-[4px] text-text_color_primary2 text-center py-1.5 bg-transparent border border-[var(--bg-active-primary)] 
                cursor-pointer disabled:cursor-not-allowed`}
                    type="button"
                  >
                    <span>+ {button?.value}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-full grid mt-[15px] grid-cols-12 gap-2">
            <button
              onClick={handleCancelBet}
              type="button"
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  col-span-6 py-1 w-full flex items-center justify-center  text-sm bg-transperent text-text_color_betSlipCancelBtnColor font-medium border border-[var(--bg-active-primary)] rounded-md 
        cursor-pointer
        "
            >
              <span className=" text-text_brand_primary font-bold text-sm md:text-base leading-5">
                Cancel Bet
              </span>
            </button>
            {!token ? (
              <button
                onClick={handleShowLoginModal}
                className="relative text-text_color_primary2 disabled:cursor-not-allowed px-2 py-1 rounded-md w-full col-span-6 border flex items-center justify-between  bg-bg_color_disableBackGroundColorfForPlaceBetBtn border-transparent text-primary"
              >
                <div className=" flex items-start justify-start flex-col">
                  <span className="  text-sm font-bold">Login</span>
                  <div className="  text-xs">
                    <span>Profit : </span>
                    <span>{profit}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-1">
                  <span>
                    <Clock />
                  </span>
                  <span className="font-normal ">
                    {currentPlaceBetEvent?.betDelay}s
                  </span>
                </div>
              </button>
            ) : (
              <button
                onClick={handleOrderBets}
                className="relative text-text_color_primary2 disabled:cursor-not-allowed px-2 py-1 rounded-md w-full col-span-6 border flex items-center justify-between  bg-bg_color_placeBetBtnGrd border-transparent text-primary"
              >
                <div className=" flex items-start justify-start flex-col">
                  <span className="  text-sm font-bold">Place Bet</span>
                  {placeBetValues?.back ? (
                    <div className=" text-xs">
                      <span>Profit : </span>
                      <span>{profit}</span>
                    </div>
                  ) : (
                    <div className="  text-xs">
                      <span>Liability : </span>
                      <span>
                        {placeBetValues?.btype === "FANCY"
                          ? profit
                          : selectedEvent?.exposure}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center gap-x-1">
                  <span>
                    <Clock />
                  </span>
                  <span className="font-normal ">
                    {placeBetValues?.betDelay}s
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBetSlip;
