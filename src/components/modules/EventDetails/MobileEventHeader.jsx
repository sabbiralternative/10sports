import { useCurrentBets } from "../../../hooks/currentBets";
import { useNavigate, useParams } from "react-router-dom";
import { Settings } from "../../../api";
import { useState } from "react";
import { useVideoMutation } from "../../../redux/features/events/events";
import EventRules from "../../modals/EventRules/EventRules";
import TennisScore from "./TennisScore";
import FootballScore from "./FootballScore";
import Tracker from "./Tracker";
import ScoreTopPart from "./ScoreTopPart";
import ScoreBottomPart from "./ScoreBottomPart";
import useSBCashOut from "../../../hooks/sb_cashout";
import toast from "react-hot-toast";

const MobileEventHeader = ({ data, score, sportsBook }) => {
  const [showRules, setShowRules] = useState(false);
  const [tab, setTab] = useState("live");
  const [sportsVideo] = useVideoMutation();
  const { eventId, eventTypeId } = useParams();
  const { mutate: cashOut } = useSBCashOut();
  const { data: currentBets, refetch } = useCurrentBets(eventId);
  const [iFrame, setIFrame] = useState("");
  const navigate = useNavigate();

  const handleGetVideo = async () => {
    const payload = {
      eventTypeId: eventTypeId,
      eventId: eventId,
      type: "video",
      casinoCurrency: Settings.casinoCurrency,
    };
    const res = await sportsVideo(payload).unwrap();
    if (res?.success) {
      setIFrame(res?.result?.url);
    }
  };
  const iscore = data?.iscore;

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
      {showRules && <EventRules setShowRules={setShowRules} />}
      <div
        id="eventDetails4-Bangladesh-vs-Zimbabwe"
        className=" w-full  top-0 flex items-center justify-start flex-col "
        style={{ zIndex: 20 }}
      >
        <div
          id="eventPageHeader"
          className=" w-full pl-[4px] pr-[4px] py-1.5 bg-bg_color_primary flex flex-col items-center lg:hidden"
        >
          <div className=" w-full flex  items-center justify-between">
            <div
              id="playIcon"
              className="flex items-start justify-center gap-x-3  w-max max-w-[92%]"
            >
              <div
                onClick={() => navigate(-1)}
                className="w-8 cursor-pointer rounded-sm h-6 flex items-center transition-all duration-300 ease-in-out justify-center bg-bg_color_quaternary active:scale-[120%] active:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--bg-active-primary)"
                  ></path>
                </svg>
              </div>
              <span className=" max-w-[10%] min-w-[6%] mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1875_77994)">
                    <path
                      d="M13.2984 9.60764L9.14541 6.58877C8.993 6.4783 8.79068 6.46166 8.62363 6.54751C8.45525 6.6327 8.3501 6.80574 8.3501 6.99275V13.0285C8.3501 13.2175 8.45525 13.3899 8.62363 13.4751C8.69485 13.511 8.77271 13.529 8.85125 13.529C8.95374 13.529 9.05756 13.4964 9.14541 13.4318L13.2984 10.4156C13.4295 10.3191 13.506 10.17 13.506 10.0116C13.5067 9.85056 13.4281 9.70215 13.2984 9.60764Z"
                      fill="var(--icon-color-secondary)"
                    ></path>
                    <path
                      d="M10.0003 0C4.47639 0 0 4.47639 0 10.0003C0 15.5223 4.47639 19.9973 10.0003 19.9973C15.5229 19.9973 20 15.5216 20 10.0003C20.0007 4.47639 15.5229 0 10.0003 0ZM10.0003 18.3288C5.40015 18.3288 1.67049 14.6012 1.67049 10.0003C1.67049 5.40148 5.40015 1.66916 10.0003 1.66916C14.5998 1.66916 18.3288 5.40082 18.3288 10.0003C18.3295 14.6012 14.5998 18.3288 10.0003 18.3288Z"
                      fill="var(--icon-color-secondary)"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1875_77994">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className=" flex flex-col items-start justify-start w-[95%] break-words gap-y-0">
                <span className=" w-full  text-start font-lato text-base font-bold text-text_color_primary2">
                  {/* <span className=" capitalize break-words">Bangladesh</span>
                  <span className="mx-1">vs</span>
                  <span className=" capitalize break-words">Zimbabwe</span> */}
                  {data?.result?.[0]?.eventName}
                </span>
                <span className=" w-auto max-w-[90%]"></span>
              </div>
            </div>
            <div
              onClick={() => setShowRules(true)}
              className=" flex items-start justify-start w-max h-full"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1717_31141)">
                  <path
                    d="M8.5 0.5C4.07841 0.5 0.5 4.078 0.5 8.5C0.5 12.9215 4.078 16.5 8.5 16.5C12.9216 16.5 16.5 12.922 16.5 8.5C16.5 4.07847 12.922 0.5 8.5 0.5ZM8.5 15.3837C4.70431 15.3837 1.61628 12.2957 1.61628 8.5C1.61628 4.70428 4.70431 1.61628 8.5 1.61628C12.2957 1.61628 15.3837 4.70428 15.3837 8.5C15.3837 12.2957 12.2957 15.3837 8.5 15.3837Z"
                    fill="var(--bg-active-primary)"
                  ></path>
                  <path
                    d="M8.5003 7.1687C8.02642 7.1687 7.68945 7.36883 7.68945 7.66367V11.6757C7.68945 11.9285 8.02642 12.1812 8.5003 12.1812C8.95311 12.1812 9.32164 11.9285 9.32164 11.6757V7.66361C9.32164 7.36879 8.95311 7.1687 8.5003 7.1687Z"
                    fill="var(--bg-active-primary)"
                  ></path>
                  <path
                    d="M8.50019 4.69409C8.01578 4.69409 7.63672 5.04159 7.63672 5.44175C7.63672 5.84194 8.01581 6.19997 8.50019 6.19997C8.97406 6.19997 9.35319 5.84194 9.35319 5.44175C9.35319 5.04159 8.97403 4.69409 8.50019 4.69409Z"
                    fill="var(--bg-active-primary)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1717_31141">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-full">
          {eventTypeId == 2 && data?.score && (
            <TennisScore score={data?.score} />
          )}
        </div>
        <div className="w-full mb-2">
          {" "}
          {eventTypeId == 1 && <FootballScore score={data?.score} />}
        </div>
        {/* Cricket score */}
        {eventTypeId == 4 && data && iscore ? (
          <ScoreTopPart iscore={iscore} isMobile={true} />
        ) : null}

        {/* Cricket score */}
        <div
          title="Live And Open Bets"
          className=" lg:hidden w-full bg-bg_color_primary shadow-sm"
        >
          <div
            id="step-selectMode"
            className="relative flex w-[100%]  overflow-clip  rounded-none bg-bg_color_primary w-full border-none shadow-none overflow-clip gap-x-2.5 active:scale-100 bg-bg_color_primary"
          >
            <button
              onClick={() => setTab("live")}
              className={`flex items-center justify-center w-full gap-1.5 tracking-wider font-lato py-2.5 uppercase active:opacity-90 p-3 text-sm font-semibold text-xs font-bold ${
                tab === "live"
                  ? "text-transparent bg-clip-text bg-bg_text_brand_primary text-text_brand_primary"
                  : "text-text_color_tertiary1 text-text_color_primary3 bg-none"
              }`}
              style={{ zIndex: 10 }}
            >
              <span>
                <div className="w-2 h-2 bg-bg_color_brand_primary1 rounded-full mr-1"></div>
              </span>
              LIVE
            </button>

            <button
              onClick={() => setTab("openBets")}
              className={`flex items-center justify-center w-full gap-1.5 tracking-wider font-lato py-2.5 uppercase active:opacity-90 p-3 text-sm font-semibold text-xs font-bold ${
                tab === "openBets"
                  ? "text-transparent bg-clip-text bg-bg_text_brand_primary text-text_brand_primary"
                  : "text-text_color_tertiary1 text-text_color_primary3 bg-none"
              }`}
              style={{ zIndex: 10 }}
            >
              OPEN BETS
              <span>
                <div>({currentBets?.length || 0})</div>
              </span>
            </button>

            <div
              className={`w-[48%] absolute z-10 transition-all ease-in-out bg-bg_color_brand_primary1 rounded-lg h-[2px] ${
                tab === "live" ? "left-0" : "right-0"
              }`}
              style={{ zIndex: 9, width: "50%", bottom: "0px" }}
            ></div>
          </div>
        </div>
      </div>

      <div
        title="Live Score"
        className="  grid grid-cols-1      sm:grid-cols-2 lg:grid-cols-1 sm:gap-x-1 sm:px-0.5 lg:gap-x-0 lg:px-0 w-full  flex-grow "
      >
        {tab === "live" && eventTypeId == 4 && data && iscore ? (
          <ScoreBottomPart iscore={iscore} isMobile={true} />
        ) : null}

        {tab === "openBets" && currentBets && currentBets?.length > 0 && (
          <div className="mt-1">
            {currentBets?.map((bet) => {
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
                  className=" bg-bg_color_primary rounded-md mb-1 px-4 w-full py-3 box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);"
                >
                  <div
                    id="eventHeader"
                    className=" font-lato-bold font-semibold flex items-center justify-between"
                  >
                    <div
                      className={`font-medium underline capitalize text-sm  ${
                        bet?.betType === "Back"
                          ? "text-text_color_changeAnimationBack"
                          : "text-text_color_changeAnimationLay"
                      }`}
                    >
                      {bet?.title}
                    </div>

                    {bet?.cashout && (
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
                          <span style={{ color: "black", fontSize: "10px" }}>
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
                  <div className=" font-normal text-text_color_primary1  capitalize text-xs font-lato">
                    {bet?.marketName}
                  </div>
                  <div
                    id="tiem_Date_of_order_0_1743688800000"
                    className=" text-xs font-lato font-normal text-text_color_primary1"
                  >
                    <strong>Placed : </strong>
                    <span>{bet?.placeDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {tab === "openBets" && (currentBets?.length === 0 || !currentBets) ? (
          <div className="mt-1 text-white flex items-center justify-center w-full my-2">
            No bet available
          </div>
        ) : null}
        <Tracker score={score} />
        {score && score?.hasVideo && !iFrame && (
          <div onClick={handleGetVideo} className=" col-span-1 h-full">
            <div className=" w-full px-2">
              <button
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  w-full py-2 text-sm my-2 font-semibold text-center text-primary bg-bg_brand_primary rounded-md 
cursor-pointer
"
                type="button"
              >
                Watch And Enjoy Live Action...
              </button>
              <div></div>
            </div>
          </div>
        )}

        {score && iFrame && score?.hasVideo && (
          <div className="relative mt-2">
            <iframe
              id="videoComponent"
              className="w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] bg-transparent"
              src={iFrame}
              width="100%"
              allowfullscreen=""
            ></iframe>
            <div
              onClick={() => setIFrame(null)}
              className="absolute top-1 right-1 z-10 active:scale-90 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <svg
                height="24"
                width="24"
                fill="var(--color-quaternary)"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="circle-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g className="fa-duotone-group">
                  <path
                    fill="currentColor"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                  ></path>
                  <path
                    fill="white"
                    d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileEventHeader;
