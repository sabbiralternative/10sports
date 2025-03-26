import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useBalance from "../../../hooks/balance";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useExposure } from "../../../hooks/exposure";
import { useEffect, useState } from "react";
import { useOrderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPredictOdd,
  setPrice,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const BetSlip = () => {
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { price, stake, placeBetValues } = useSelector((state) => state.event);
  const { eventId } = useParams();
  const { refetchBalance } = useBalance();
  const { refetchCurrentBets } = useCurrentBets(eventId);
  const { refetchExposure } = useExposure(eventId);
  const [betDelay, setBetDelay] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    if (betDelay <= 0) {
      setBetDelay(null);
    }

    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize.toFixed(2)
          : null
      )
    );
  }, [placeBetValues, betDelay, dispatch]);

  useEffect(() => {
    dispatch(setPredictOdd([]));
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
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
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
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const payloadData = [
      {
        ...payload,
        site: Settings.siteUrl,
        nounce: uuidv4(),
        isbetDelay: Settings.betDelay,
      },
    ];
    setLoading(true);
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
      setBetDelay(placeBetValues?.betDelay);
      delay = Settings.betDelay ? placeBetValues?.betDelay * 1000 : 0;
    }

    setTimeout(async () => {
      const res = await createOrder(payloadData).unwrap();

      if (res?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        refetchCurrentBets();
        dispatch(setShowLoginModal(false));
        setBetDelay("");
        toast.success(res?.result?.result?.placed?.[0]?.message);
      } else {
        setLoading(false);
        toast.error(
          res?.error?.status?.[0]?.description || res?.error?.errorMessage
        );
        setBetDelay(null);
        // refetchExposure();
        // refetchBalance();
        // refetchCurrentBets();
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
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  return (
    <div className="relative">
      {placeBetValues && (
        <div
          title="Selected - New Zealand v Pakistan - New Zealand - 448"
          className="  w-full h-max bg-bg_color_betSlipBgColor font-lato origin-top transition-all flex flex-col ease-in-out p-2 pb-3 rounded-sm border-[2px] border-b-[5px] border-backBtn transition-all duration-300 ease-in-out overflow-hidden transform-gpu"
          style={{ height: "max-content" }}
        >
          <div className=" w-full grid grid-cols-12 gap-2">
            <div title="Odds: 1.47" className="col-span-5 flex flex-col gap-1">
              <label className="text-text_color_primary1 sm:text-xs text-[10px] font-normal">
                ODDS
              </label>
              <div className="flex items-center justify-center">
                {!placeBetValues?.isWeak && (
                  <button
                    onClick={() =>
                      handleDecreasePrice(
                        price,
                        placeBetValues,
                        dispatch,
                        setPrice
                      )
                    }
                    className="overflow-hidden w-full h-full flex items-center justify-center bg-bg_color_betSlipOddIncDecrBtnsGrd rounded-s-[4px] border border-border_color_primary4 border-r-0 text-xl font-normal text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={4}
                      viewBox="0 0 18 4"
                      fill="none"
                    >
                      <path
                        d="M16.3363 3.1535H1.66367C1.02639 3.1535 0.51001 2.63713 0.51001 1.99985C0.51001 1.36257 1.02639 0.846191 1.66367 0.846191H16.3363C16.9736 0.846191 17.49 1.36257 17.49 1.99985C17.49 2.63713 16.9736 3.1535 16.3363 3.1535Z"
                        fill="var(--icon-color-secondary)"
                      />
                    </svg>
                  </button>
                )}

                <input
                  onChange={(e) => dispatch(setPrice(e.target.value))}
                  placeholder="Enter Odds"
                  inputMode="numeric"
                  className="block w-full focus:outline-none  text-sm w-full h-full py-2 text-center rounded-[4px] flex items-center justify-center text-text_color_primary1 bg-bg_color_input_bg focus:border-border_color_activeInput active:border-border_color_activeInput"
                  type="number"
                  value={price}
                />
                <button
                  onClick={() =>
                    handleIncreasePrice(
                      price,
                      placeBetValues,
                      dispatch,
                      setPrice
                    )
                  }
                  className="overflow-hidden w-full h-full flex items-center justify-center bg-bg_color_betSlipOddIncDecrBtnsGrd rounded-e-[4px] border border-border_color_primary4 border-r-0 text-xl font-normal text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.99997 17.4897C8.36269 17.4897 7.84631 16.9734 7.84631 16.3361V1.66342C7.84631 1.02614 8.36269 0.509766 8.99997 0.509766C9.63725 0.509766 10.1536 1.02614 10.1536 1.66342V16.3361C10.1536 16.9734 9.63725 17.4897 8.99997 17.4897Z"
                      fill="var(--icon-color-secondary)"
                    />
                    <path
                      d="M16.3363 10.1535H1.66367C1.02639 10.1535 0.51001 9.63713 0.51001 8.99985C0.51001 8.36257 1.02639 7.84619 1.66367 7.84619H16.3363C16.9736 7.84619 17.49 8.36257 17.49 8.99985C17.49 9.63713 16.9736 10.1535 16.3363 10.1535Z"
                      fill="var(--icon-color-secondary)"
                    />
                  </svg>
                </button>
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
                <span>Max mkt : 0</span>
              </label>
              <input
                onChange={(e) => dispatch(setStake(e.target.value))}
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
                {parseButtonValues?.map((button, i) => (
                  <button
                    key={i}
                    onClick={() => dispatch(setStake(button?.value))}
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out col-span-4 w-full overflow-hidden text-[12px] font-semibold rounded-[4px] text-text_color_primary2 text-center py-1.5 bg-transparent border border-border_color_primary4 
              cursor-pointer
              "
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
              onClick={() => {
                dispatch(setPredictOdd([]));
                dispatch(setPlaceBetValues(null));
              }}
              type="button"
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  col-span-6 py-1 w-full flex items-center justify-center  text-sm bg-transperent text-text_color_betSlipCancelBtnColor font-medium border border-border_color_brand_secondary rounded-md 
      cursor-pointer
      "
            >
              <span className=" text-text_brand_primary font-bold text-sm md:text-base leading-5">
                Cancel Bet
              </span>
            </button>
            {token ? (
              <button
                onClick={handleOrderBets}
                className="relative text-text_color_primary2 disabled:cursor-not-allowed px-2 py-1 rounded-md w-full col-span-6 border flex items-center justify-between  bg-bg_color_placeBetBtnGrd border-transparent"
              >
                <div className=" flex items-start justify-start flex-col">
                  <span className=" text-text_color_primary2 text-sm font-bold">
                    Place Bet
                  </span>
                  <div className=" text-text_color_primary2 text-xs">
                    <span>Profit : </span>
                    <span>{profit}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2144_3162)">
                        <path
                          d="M9.91095 3.68857L10.3814 3.21808C10.5643 3.03525 10.5643 2.7388 10.3814 2.55606C10.1986 2.37323 9.90225 2.37323 9.71942 2.55606L9.24893 3.02655C8.45956 2.36884 7.50037 1.9715 6.47717 1.87848V0.93631H6.92972C7.18826 0.93631 7.39783 0.726654 7.39783 0.468109C7.39783 0.209564 7.18826 0 6.92972 0H5.08832C4.82977 0 4.62021 0.209564 4.62021 0.468109C4.62021 0.726654 4.82977 0.93631 5.08832 0.93631H5.54086V1.87848C2.97958 2.11139 0.9375 4.26306 0.9375 6.92844C0.9375 9.73141 3.20572 12 6.00906 12C8.81195 12 11.0805 9.73178 11.0805 6.92844C11.0805 5.73111 10.6682 4.59723 9.91095 3.68857ZM6.00897 11.0637C3.72885 11.0637 1.87372 9.20865 1.87372 6.92844C1.87372 4.64832 3.72885 2.79327 6.00897 2.79327C8.28918 2.79327 10.1442 4.64832 10.1442 6.92844C10.1442 9.20865 8.28918 11.0637 6.00897 11.0637ZM8.1785 4.759C8.36133 4.94183 8.36133 5.23828 8.1785 5.42102L6.34003 7.25949C6.1572 7.44232 5.86075 7.44232 5.67801 7.25949C5.49518 7.07666 5.49518 6.78021 5.67801 6.59747L7.51639 4.759C7.69922 4.57617 7.99567 4.57617 8.1785 4.759Z"
                          fill="var(--icon-color-betSlipIconsColor)"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2144_3162">
                          <rect width={12} height={12} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="font-normal text-text_color_primary2">
                    {placeBetValues?.betDelay}s
                  </span>
                </div>
              </button>
            ) : (
              <button
                onClick={() => dispatch(setShowLoginModal(true))}
                className="relative text-text_color_primary2 disabled:cursor-not-allowed px-2 py-1 rounded-md w-full col-span-6 border flex items-center justify-between  bg-bg_color_disableBackGroundColorfForPlaceBetBtn border-transparent"
              >
                <div className=" flex items-start justify-start flex-col">
                  <span className=" text-text_color_primary2 text-sm font-bold">
                    Login
                  </span>
                  <div className=" text-text_color_primary2 text-xs">
                    <span>Profit : </span>
                    <span>{profit}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2144_3162)">
                        <path
                          d="M9.91095 3.68857L10.3814 3.21808C10.5643 3.03525 10.5643 2.7388 10.3814 2.55606C10.1986 2.37323 9.90225 2.37323 9.71942 2.55606L9.24893 3.02655C8.45956 2.36884 7.50037 1.9715 6.47717 1.87848V0.93631H6.92972C7.18826 0.93631 7.39783 0.726654 7.39783 0.468109C7.39783 0.209564 7.18826 0 6.92972 0H5.08832C4.82977 0 4.62021 0.209564 4.62021 0.468109C4.62021 0.726654 4.82977 0.93631 5.08832 0.93631H5.54086V1.87848C2.97958 2.11139 0.9375 4.26306 0.9375 6.92844C0.9375 9.73141 3.20572 12 6.00906 12C8.81195 12 11.0805 9.73178 11.0805 6.92844C11.0805 5.73111 10.6682 4.59723 9.91095 3.68857ZM6.00897 11.0637C3.72885 11.0637 1.87372 9.20865 1.87372 6.92844C1.87372 4.64832 3.72885 2.79327 6.00897 2.79327C8.28918 2.79327 10.1442 4.64832 10.1442 6.92844C10.1442 9.20865 8.28918 11.0637 6.00897 11.0637ZM8.1785 4.759C8.36133 4.94183 8.36133 5.23828 8.1785 5.42102L6.34003 7.25949C6.1572 7.44232 5.86075 7.44232 5.67801 7.25949C5.49518 7.07666 5.49518 6.78021 5.67801 6.59747L7.51639 4.759C7.69922 4.57617 7.99567 4.57617 8.1785 4.759Z"
                          fill="var(--icon-color-betSlipIconsColor)"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2144_3162">
                          <rect width={12} height={12} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="font-normal text-text_color_tertiary3">
                    {placeBetValues?.betDelay}s
                  </span>
                </div>
              </button>
            )}
          </div>
          <div className="w-full mt-[15px] lg:mt-1 flex flex-col gap-y-[4px]">
            <div className="w-full h-9 lg:block hidden" />
            <div className=" flex items-center justify-between w-full select-none">
              <span className=" text-[13px] text-text_color_primary1  font-medium">
                Confirm bet before placing
              </span>
              <label className="inline-flex items-center cursor-pointer relative">
                <input className="sr-only peer" type="checkbox" />
                <div className="relative bg-bg_color_primary border-[0.5px] font-lato border-border_color_primary1 rounded-full peer-checked:bg-bg_color_switchAfterCheck h-7 w-14">
                  <span className="absolute top-1/2 right-[5px] transform  -translate-y-1/2 text-[10px] font-bold text-text_color_primary1 text-[10px]">
                    OFF
                  </span>
                  <div className=" bg-bg_SwitchBtnRound h-full border-[0.5px] border-border_color_primary transition-all  ease-in-out aspect-square absolute left-0 rounded-full " />
                </div>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BetSlip;
