import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import { handleCashOutPlaceBet } from "../../../utils/handleCashoutPlaceBet";
import MobileBetSlip from "./MobileBetSlip";
import isOddSuspended, { isGameSuspended } from "../../../utils/isOddSuspended";
import SuspendedOdd from "../../shared/SuspendedOdd/SuspendedOdd";
import SpeedCashOut from "../../modals/SpeedCashOut/SpeedCashOut";

const Bookmaker = ({ data }) => {
  const [speedCashOut, setSpeedCashOut] = useState(null);
  const { eventId } = useParams();
  const [teamProfit, setTeamProfit] = useState([]);
  const dispatch = useDispatch();
  const { runnerId, stake, predictOdd } = useSelector((state) => state.event);
  const { token } = useSelector((state) => state.auth);
  const { data: exposure } = useExposure(eventId);

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
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
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
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId,
  ) => {
    let runner,
      largerExposure,
      layValue,
      oppositeLayValue,
      lowerExposure,
      speedCashOut;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = 1 + Number(runner2?.lay?.[0]?.price) / 100;
      oppositeLayValue = 1 + Number(runner1?.lay?.[0]?.price) / 100;
      lowerExposure = exposureA;
    }

    if (exposureA > 0 && exposureB > 0) {
      const difference = Math.abs(exposureA - exposureB);
      if (difference <= 10) {
        speedCashOut = true;
      }
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
      exposureA,
      exposureB,
      runner1,
      runner2,
      speedCashOut,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposure?.pnlBySelection &&
      Object.keys(exposure?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id,
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id,
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id,
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, data]);

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <>
      {speedCashOut && (
        <SpeedCashOut
          speedCashOut={speedCashOut}
          setSpeedCashOut={setSpeedCashOut}
        />
      )}
      {data?.length > 0 &&
        data?.map((game) => {
          const teamProfitForGame = teamProfit?.find(
            (profit) =>
              profit?.gameId === game?.id && profit?.isOnePositiveExposure,
          );
          const speedCashOut = teamProfit?.find(
            (profit) => profit?.gameId === game?.id && profit?.speedCashOut,
          );

          return (
            <div key={game?.id} className=" py-1.5">
              <div className=" grid grid-flow-col grid-cols-12 text-text_color_primary1 text-xs font-[500] mb-1.5">
                <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-5 ">
                  <span className=" capitalize  font-bold text-xs sm:text-sm md:text-[15px]">
                    {game?.name?.toUpperCase()}
                  </span>
                  {Settings.cashout &&
                    game?.runners?.length !== 3 &&
                    game?.status === "OPEN" &&
                    game?.name !== "toss" &&
                    !speedCashOut && (
                      <button
                        style={{
                          cursor: `${
                            !teamProfitForGame ? "not-allowed" : "pointer"
                          }`,
                          opacity: `${!teamProfitForGame ? "0.6" : "1"}`,
                        }}
                        onClick={() =>
                          handleCashOutPlaceBet(
                            game,
                            "lay",
                            dispatch,
                            pnlBySelection,
                            token,
                            teamProfitForGame,
                          )
                        }
                        type="button"
                        className={`inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  rounded-md px-2.5 py-1.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-max  max-w-[74%] mr-1 
    cursor-pointer ${
      teamProfitForGame?.profit > 0
        ? "bg-bg_cashOutBtnGrd"
        : "bg-bg_color_clearBtn"
    }`}
                      >
                        <div className="text-[10px] md:text-sm text-text_color_primary2 whitespace-nowrap  font-semibold">
                          Cashout{" "}
                          {teamProfitForGame?.profit &&
                            `(${teamProfitForGame.profit.toFixed(2)})`}
                        </div>
                      </button>
                    )}

                  {Settings.cashout &&
                    game?.runners?.length !== 3 &&
                    game?.status === "OPEN" &&
                    game?.name !== "toss" &&
                    speedCashOut && (
                      <button
                        onClick={() =>
                          setSpeedCashOut({
                            ...speedCashOut,
                            market_name: game?.name,
                            event_name: game?.eventName,
                          })
                        }
                        disabled={isGameSuspended(game)}
                        type="button"
                        className={`inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  rounded-md px-2.5 py-1.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-max  max-w-[74%] mr-1 
                        cursor-pointer bg-[#82371b]`}
                      >
                        <div className="text-[10px] md:text-sm text-text_color_primary2 whitespace-nowrap  font-semibold">
                          Speed Cashout
                        </div>
                      </button>
                    )}
                  <span className="text-xs font-light">
                    Max: {game?.maxLiabilityPerBet}
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
                  const pnl = pnlBySelection?.find(
                    (pnl) => pnl?.RunnerId === runner?.id,
                  );
                  const predictOddValues = predictOdd?.find(
                    (val) => val?.id === runner?.id,
                  );
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
                            <span className=" truncate w-full capitalize text-text_color_primary1  text-[13px] md:text-sm  font-semibold">
                              {runner?.name}
                            </span>
                          </div>
                          <div className="w-full flex flex-row gap-x-1">
                            {pnl && (
                              <div
                                className={`text-[12px] font-bold  ${
                                  pnl?.pnl > 0
                                    ? "text-text_color_success"
                                    : "text-text_color_danger"
                                }`}
                              >
                                {pnl?.pnl}
                              </div>
                            )}
                            {stake && runnerId && predictOddValues && (
                              <div
                                className={`text-[12px] font-bold  ${
                                  predictOddValues?.exposure > 0
                                    ? "text-text_color_success"
                                    : "text-text_color_danger"
                                } `}
                              >
                                &gt;&gt; {predictOddValues?.exposure}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {isOddSuspended(runner) ? (
                        <SuspendedOdd colSpan={5} />
                      ) : (
                        <div className=" col-span-5  md:col-span-7  h-12 grid grid-cols-2 md:grid-cols-6 relative">
                          <div className="w-full h-full col-span-6">
                            {/* Desktop Start */}
                            <div className="w-full sm:grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px] hidden">
                              <div className="w-full col-span-2 h-full">
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "back",
                                      game,
                                      runner,
                                      runner?.back?.[2]?.price,
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
                                    runner?.back?.[1]?.price,
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
                                    runner?.back?.[0]?.price,
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
                                    runner?.lay?.[0]?.price,
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
                                    runner?.lay?.[1]?.price,
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
                                    runner?.lay?.[2]?.price,
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
                            {/* Desktop Start */}
                            {/* Mobile Start */}
                            <div
                              className="w-full overflow-x-auto flex h-full sm:px-[2px] sm:hidden"
                              id="hideScrollBar"
                            >
                              <div className="w-full h-full grid grid-cols-2 gap-x-0.5 py-[1px] pr-[2px]">
                                <div
                                  onClick={() =>
                                    handleBetSlip(
                                      "back",
                                      game,
                                      runner,
                                      runner?.back?.[0]?.price,
                                    )
                                  }
                                  className="w-full h-full"
                                >
                                  <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
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
                                      runner?.lay?.[0]?.price,
                                    )
                                  }
                                  className="w-full h-full"
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
                              </div>
                            </div>
                            {/* Mobile End */}
                          </div>
                        </div>
                      )}
                      {runner?.id === runnerId && (
                        <MobileBetSlip currentPlaceBetEvent={game} />
                      )}
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

export default Bookmaker;
