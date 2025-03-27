import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import MobileBetSlip from "./MobileBetSlip";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const HorseGreyhoundEventDetails = ({ data }) => {
  const { eventId } = useParams();
  const { data: exposure } = useExposure(eventId);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { runnerId } = useSelector((state) => state.event);

  const [timeDiff, setTimeDiff] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    if (!data?.[0]?.openDate) return;

    const targetDateStr = data[0].openDate;
    const [date, time] = targetDateStr.split(" ");
    const [day, month, year] = date.split("/");
    const [hour, minute, second] = time.split(":");

    const targetDate = new Date(year, month - 1, day, hour, minute, second);

    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;

        if (diffInMs <= 0) {
          clearInterval(interval);
          setTimeDiff({ day: 0, hour: 0, minute: 0, second: 0 });
          return;
        }

        const day = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minute = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setTimeDiff({ day, hour, minute, second });
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((rnr) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === rnr?.id);
          if (pnl) {
            updatedPnl.push({
              exposure: pnl?.pnl,
              id: pnl?.RunnerId,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          } else {
            updatedPnl.push({
              exposure: 0,
              id: rnr?.id,
              isBettingOnThisRunner: rnr?.id === runner?.id,
            });
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.horse_name,
        name: games.runners.map((runner) => runner.horse_name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        exposure: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.id));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLoginModal(true));
    }
  };
  return (
    <>
      <div className="horse-banner">
        <img
          style={{ width: "100%" }}
          src="https://g1ver.sprintstaticdata.com/v42/static/front/img/10.png"
          className="img-fluid"
        />
        <div className="horse-banner-detail">
          <div className="text-success">OPEN</div>
          {timeDiff?.day ||
          timeDiff?.hour ||
          timeDiff?.minute ||
          timeDiff?.second ? (
            <div className="horse-timer">
              <span style={{ display: "flex", gap: "5px" }}>
                {timeDiff?.day > 0 && (
                  <span>
                    {timeDiff?.day} <small>Day</small>
                  </span>
                )}
                {timeDiff?.hour > 0 && (
                  <span>
                    {timeDiff?.hour} <small>Hour</small>
                  </span>
                )}
                {timeDiff?.minute > 0 && (
                  <span>
                    {timeDiff?.minute} <small>Minutes</small>
                  </span>
                )}
                {timeDiff?.hour === 0 && timeDiff?.minute < 60 && (
                  <span>
                    {timeDiff?.second} <small>Seconds</small>
                  </span>
                )}
              </span>
              <span>Remaining</span>
            </div>
          ) : null}

          <div className="time-detail">
            <p>{data?.[0]?.eventName}</p>
            <h5>
              <span>{data?.[0]?.openDate}</span>
              <span>| {data?.[0]?.raceType}</span>
            </h5>
          </div>
        </div>
      </div>

      {data?.result?.map((game) => {
        return (
          <div key={game?.id} className=" py-1.5">
            <div className=" grid grid-flow-col grid-cols-12 text-text_color_primary1 text-xs font-[500] mb-1.5">
              <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-5 ">
                <span className=" capitalize  font-bold text-xs sm:text-sm md:text-[15px]">
                  {game?.name?.toUpperCase()}
                </span>
              </div>
              <div className=" col-span-5 md:col-span-7 grid grid-cols-2 md:grid-cols-6 pb-[2px]">
                <span className=" hidden md:flex col-span-1 text-center  font-semibold h-full  items-end justify-center" />
                <span className=" col-span-1 text-center  font-semibold h-full  hidden md:flex  items-end justify-center" />
                <span className=" col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3  font-bold h-full flex items-end justify-center">
                  BACK
                </span>
                <span className=" col-span-1 text-center text-[10px] sm:text-xs md:text-sm  leading-3 font-bold h-full flex items-end justify-center">
                  LAY
                </span>
                <span className=" col-span-1 text-center font-semibold  h-full  hidden md:flex  items-end justify-center" />
                <span className=" col-span-1 text-center font-semibold  h-full  hidden md:flex  items-end justify-center" />
              </div>
            </div>
            <div className=" bg-bg_color_primary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
              {game?.runners?.map((runner) => {
                return (
                  <div
                    key={runner?.id}
                    title={42821394}
                    id={42821394}
                    className="grid grid-cols-12  border-b border-border_color_primary1"
                  >
                    <div className="w-full  md:col-span-5  col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                      <div className="truncate col-span-12 flex items-start justify-center h-full flex-col">
                        <div className=" w-full flex flex-nowrap gap-x-2">
                          <div>
                            <span className=" truncate w-full capitalize text-text_color_primary1  text-[13px] md:text-sm  font-semibold">
                              {runner?.horse_name}
                            </span>
                            <div
                              className="jockey-detail sm-d-none d-md-flex"
                              style={{ display: "flex" }}
                            >
                              {runner?.jocky && (
                                <span className="jockey-detail-box">
                                  <b>Jockey:</b>
                                  <span style={{ fontWeight: "normal" }}>
                                    {runner?.jocky}
                                  </span>
                                </span>
                              )}
                              {runner?.trainer && (
                                <span className="jockey-detail-box">
                                  <b>Trainer:</b>
                                  <span style={{ fontWeight: "normal" }}>
                                    {runner?.trainer}
                                  </span>
                                </span>
                              )}
                              {runner?.age && (
                                <span className="jockey-detail-box">
                                  <b>Age:</b>
                                  <span style={{ fontWeight: "normal" }}>
                                    {runner?.age}
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-span-5  md:col-span-7  h-12 grid grid-cols-2 md:grid-cols-6 relative">
                      <div className="w-full h-full col-span-6">
                        <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                          <div className="w-full col-span-2 h-full">
                            <div
                              onClick={() =>
                                handleBetSlip(
                                  "back",
                                  game,
                                  runner,
                                  runner?.back?.[2]?.price
                                )
                              }
                              className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue"
                            >
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.back?.[2]?.price}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {runner?.back?.[2]?.size}
                              </span>
                            </div>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "back",
                                game,
                                runner,
                                runner?.back?.[1]?.price
                              )
                            }
                            className="w-full col-span-2 h-full"
                          >
                            <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.back?.[1]?.price}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {runner?.back?.[1]?.size}
                              </span>
                            </div>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "back",
                                game,
                                runner,
                                runner?.back?.[0]?.price
                              )
                            }
                            className="w-full col-span-2 h-full"
                          >
                            <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg border border-backBtn text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.back?.[0]?.price}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {runner?.back?.[0]?.size}
                              </span>
                            </div>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "lay",
                                game,
                                runner,
                                runner?.lay?.[0]?.price
                              )
                            }
                            className="w-full col-span-2 h-full"
                          >
                            <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.lay?.[0]?.price}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {runner?.lay?.[0]?.size}
                              </span>
                            </div>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "lay",
                                game,
                                runner,
                                runner?.lay?.[1]?.price
                              )
                            }
                            className="w-full col-span-2 h-full"
                          >
                            <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.lay?.[1]?.price}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {runner?.lay?.[1]?.size}
                              </span>
                            </div>
                          </div>
                          <div
                            onClick={() =>
                              handleBetSlip(
                                "lay",
                                game,
                                runner,
                                runner?.lay?.[2]?.price
                              )
                            }
                            className="w-full col-span-2 h-full"
                          >
                            <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {runner?.lay?.[2]?.price}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {runner?.lay?.[2]?.size}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {runnerId === runner?.id && <MobileBetSlip />}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HorseGreyhoundEventDetails;
