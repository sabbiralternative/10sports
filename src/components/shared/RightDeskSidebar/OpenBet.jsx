import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import useSBCashOut from "../../../hooks/sb_cashout";
import toast from "react-hot-toast";

const OpenBet = () => {
  const navigate = useNavigate();
  const [showBets, setShowBets] = useState(true);
  const { eventId, eventTypeId } = useParams();
  const { data, refetch } = useCurrentBets(eventId);
  const { mutate: cashOut } = useSBCashOut();
  const { data: eventData } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showLogin = () => {
    dispatch(setShowLoginModal(true));
  };
  const navigateGameList = (item) => {
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
  };
  const sportsBook = eventData?.sportsbook?.Result;

  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials"
    );

  const handleCashOut = ({ betHistory, sportsBook, price, cashout_value }) => {
    let item;
    sports?.forEach((group) => {
      group?.Items?.forEach((data) => {
        if (betHistory?.marketId == data?.Id) {
          item = data;
        }
      });
    });

    const column = item?.Items?.find(
      (col) => col?.Id === betHistory?.selectionId
    );

    const payload = {
      price,
      cashout_value,
      back: true,
      side: 0,
      selectionId: column?.Id,
      btype: "SPORTSBOOK",
      placeName: column?.Name,
      eventTypeId: sportsBook?.EventTypeId,
      betDelay: sportsBook?.betDelay,
      marketId: item?.Id,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      isBettable: sportsBook?.isBettable,
      isWeak: sportsBook?.isWeak,
      marketName: item?.Name,
      eventId: sportsBook?.eventId,
      betId: betHistory?.betId,
    };

    cashOut(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetch();
          toast.success(data?.result?.message);
        } else {
          toast.error(data?.error);
        }
      },
    });
  };

  return (
    <>
      {token ? (
        <div className=" flex flex-col w-full  gap-1 text-text_color_primary1">
          <div className="w-full origin-top scaleVerticalOpen" />
          <div
            onClick={() => setShowBets((prev) => !prev)}
            id="matched_1"
            className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_text_brand_primary rounded "
          >
            <span className="text-primary text-xs">Matched Bets</span>
            <div className=" flex items-center justify-center autoAnimate ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                transform={`${showBets ? "rotate(180)" : ""}`}
                viewBox="0 0 512 512"
                height={12}
                width={12}
                fill="var(--icon-color-secondary)"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
          </div>
          <div className="w-full origin-top scaleVerticalOpen">
            <div className="flex flex-col gap-1 w-full">
              {showBets &&
                data?.map((bet) => {
                  let column;
                  sports?.forEach((group) => {
                    group?.Items?.forEach((data) => {
                      if (bet?.marketId == data?.Id) {
                        column = data?.Items?.find(
                          (col) => col?.Id === bet?.selectionId
                        );
                      }
                    });
                  });

                  const price = (
                    0.92 *
                    bet?.amount *
                    (bet?.userRate / column?.Price)
                  )?.toFixed(2);
                  return (
                    <div
                      key={bet?.betId}
                      className=" bg-bg_color_primary rounded-md divide-y divide-divide_color_primary1 w-full shadow "
                    >
                      <div
                        id="eventHeader"
                        className="font-semibold   px-3 py-2 flex items-center justify-between"
                      >
                        <div
                          onClick={() => navigateGameList(bet)}
                          className={`font-medium underline capitalize text-sm  ${
                            bet?.betType === "Back"
                              ? "text-text_color_changeAnimationBack"
                              : "text-text_color_changeAnimationLay"
                          }`}
                        >
                          {bet?.title}
                        </div>
                        {bet?.cashout && eventId && eventTypeId && (
                          <button
                            onClick={() =>
                              handleCashOut({
                                betHistory: bet,
                                sportsBook,
                                price: column?.Price,
                                cashout_value: price,
                              })
                            }
                            type="button"
                            className="btn_box "
                            style={{
                              width: "100px",
                              backgroundColor: "#f3f3f3ff",
                              display: "flex",
                              alignItems: "center",
                              cursor: `pointer`,
                              justifyContent: "center",
                              gap: "0px 2px",
                              borderRadius: "2px",
                            }}
                          >
                            <span style={{ fontSize: "10px", color: "black" }}>
                              Cashout
                            </span>
                            {price && (
                              <span
                                style={{ color: "black", fontSize: "10px" }}
                              >
                                :
                              </span>
                            )}

                            {price && (
                              <span
                                style={{
                                  color: `${price > 0 ? "green" : "red"}`,
                                  fontSize: "10px",
                                }}
                              >
                                {price}
                              </span>
                            )}
                          </button>
                        )}
                      </div>
                      <div className="px-3 py-2 text-text_color_primary1  uppercase font-lato flex flex-col">
                        <span className=" font-semibold text-xs ">
                          {bet?.marketName}
                        </span>
                        <span className=" font-normal text-xs">
                          {bet?.nation}
                        </span>
                      </div>
                      <div
                        id="tiem_Date_of_order_0_1743688800000"
                        className=" text-xs px-3 py-2 text-center bg-bg_color_tertiary1 font-lato font-normal rounded-b-md text-text_color_primary1"
                      >
                        PLACED - {bet?.placeDate}
                      </div>
                    </div>
                  );
                })}
              {showBets && data?.length === 0 && (
                <div className="w-full origin-top scaleVerticalOpen">
                  <div className="w-full font-medium text-sm bg-bg_color_primary rounded px-4  py-3 shadow text-text_color_primary1 ">
                    You have no matched Bets.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h4 className="text-sm font-lato text-center py-4 text-text_color_primary1">
          Please login to see your open bets.{" "}
          <button
            onClick={showLogin}
            className="bg-bg_text_brand_primary bg-clip-text text-transparent cursor-pointer hover:underline"
          >
            Login
          </button>
        </h4>
      )}
    </>
  );
};

export default OpenBet;
