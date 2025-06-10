import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import MobileBetSlip from "./MobileBetSlip";
import Ladder from "../../modals/Ladder/Ladder";
import isOddSuspended from "../../../utils/isOddSuspended";

const Fancy = ({ data }) => {
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price, bottomValue) => {
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
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
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
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
        bottomValue,
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

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };

  return (
    <>
      {ladderData?.length > 0 && (
        <Ladder
          setLadderData={setLadderData}
          ladderData={ladderData}
          marketName={marketName}
        />
      )}
      {fancyData?.length > 0 && (
        <div>
          <div className="text-base font-medium text-center py-1.5">
            {/* <ul className="flex flex-wrap items-center justify-start gap-x-3">
              <li
                className="px-[15px] py-2 rounded-[100px] flex items-center justify-center  cursor-pointer active:scale-95 transition-all ease-in-out duration-100 
               bg-bg_text_brand_primary text-text_color_primary2  border-border_color_brand_primary
              "
              >
                <span className="inline-block font-bold  text-xs sm:text-sm md:text-base leading-4 ">
                  Fancy Market
                </span>
              </li>
              <li
                className="px-[15px] py-2 border rounded-[100px] flex items-center justify-center cursor-pointer active:scale-95 transition-all ease-in-out duration-100 
               bg-bg_color_primary text-text_color_tertiary2  border-border_color_primary
              "
              >
                <span className="inline-block font-bold text-xs sm:text-sm md:text-base leading-4 ">
                  Premium Market
                </span>
              </li>
            </ul> */}
            <div className=" grid grid-flow-col grid-cols-12 text-text_color_primary1 text-xs font-[500] mb-1.5">
              <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-5 ">
                <span className=" capitalize  font-bold text-xs sm:text-sm md:text-[15px]">
                  Fancy
                </span>
              </div>
              <div className=" col-span-5 md:col-span-7 grid grid-cols-2 md:grid-cols-6 pb-[2px]">
                <span className=" hidden md:flex col-span-1 text-center  font-semibold h-full  items-end justify-center" />
                {/* <span className=" col-span-1 text-center  font-semibold h-full  hidden md:flex  items-end justify-center" /> */}
                <span className=" col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3  font-bold h-full flex items-end justify-center">
                  No
                </span>
                <span className=" col-span-1 md:col-span-3 text-center text-[10px] sm:text-xs md:text-sm  leading-3 font-bold h-full flex items-end justify-center">
                  Yes
                </span>
                <span className=" col-span-1 text-center font-semibold  h-full  hidden md:flex  items-end justify-center" />
                <span className=" col-span-1 text-center font-semibold  h-full  hidden md:flex  items-end justify-center" />
              </div>
            </div>
          </div>
          {fancyData?.map((game) => {
            const pnl =
              pnlBySelection?.find((pnl) => pnl?.MarketId === game?.id) || {};

            return (
              <div key={game?.id} className=" py-1.5">
                <div className=" bg-bg_color_primary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
                  <div title={1} id={1} className="grid grid-cols-12 ">
                    <div className="w-full  md:col-span-6 col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                      <div className=" col-span-8 md:col-span-10 flex items-start justify-center h-full flex-col">
                        <div className=" w-full flex flex-nowrap gap-x-2">
                          <span className=" w-full truncate capitalize text-text_color_primary1  text-[13px] md:text-sm  font-semibold">
                            {game?.name}
                          </span>
                        </div>
                        {pnl && (
                          <div className="w-full flex flex-row gap-x-1">
                            <div
                              className={`text-[12px] font-bold ${
                                pnl?.pnl > 0
                                  ? "text-text_color_success"
                                  : "text-text_color_danger"
                              }`}
                            >
                              {pnl?.pnl}
                            </div>
                          </div>
                        )}
                      </div>
                      <span className=" col-span-2 md:col-span-1 flex flex-row items-center justify-center gap-x-[2px]">
                        <svg
                          version={1.0}
                          height={15}
                          width={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 840.000000 936.000000"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g
                            transform="translate(0.000000,936.000000) scale(0.100000,-0.100000)"
                            fill="var(--icon-color-brand-tertiary1)"
                            stroke="none"
                          >
                            <path d="M3472 8818 l3 -243 243 -3 242 -2 0 -244 0 -243 -122 -12 c-1359 -130 -2543 -950 -3143 -2176 -155 -318 -271 -677 -334 -1035 -75 -424 -73 -934 5 -1360 226 -1229 1014 -2267 2136 -2810 694 -335 1447 -455 2228 -354 567 74 1147 294 1640 624 792 530 1374 1353 1605 2270 133 529 156 1092 65 1627 -175 1029 -775 1959 -1645 2552 -539 367 -1135 586 -1792 657 l-163 18 0 243 0 243 243 2 242 3 3 243 2 242 -730 0 -730 0 2 -242z m1138 -1242 c478 -59 937 -216 1346 -463 765 -461 1323 -1208 1543 -2067 190 -738 131 -1502 -171 -2206 -175 -408 -460 -814 -789 -1122 -519 -487 -1138 -787 -1845 -895 -164 -25 -204 -27 -484 -27 -325 -1 -422 7 -685 60 -1170 231 -2155 1089 -2543 2214 -222 647 -250 1318 -82 1975 283 1104 1112 1999 2195 2372 215 74 531 144 735 162 63 6 133 13 155 15 85 9 506 -4 625 -18z"></path>
                            <path d="M3960 5620 c0 -654 -3 -1010 -10 -1010 -5 0 -41 -30 -80 -66 -51 -49 -80 -86 -105 -138 -133 -272 18 -605 310 -681 132 -34 277 -11 391 63 202 131 276 400 169 618 -25 52 -54 89 -105 138 -39 36 -75 66 -80 66 -7 0 -10 356 -10 1010 l0 1010 -240 0 -240 0 0 -1010z"></path>
                          </g>
                        </svg>
                        <span className=" font-[480] text-sm text-text_color_primary1 ">
                          2s
                        </span>
                      </span>
                      <span className=" col-span-2 md:col-span-1 flex flex-row items-center justify-center">
                        <div
                          onClick={() => handleGetLadder(pnl, game?.name)}
                          className={`${
                            pnl?.pnl
                              ? "opacity-100 cursor-pointer"
                              : "opacity-50 cursor-not-allowed"
                          }`}
                        >
                          <svg
                            height={18}
                            width={18}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="63d691358b4e4026f6539708_stairs 1">
                              <path
                                id="Vector"
                                d="M5.21875 3.13672V13.1367"
                                stroke="var(--icon-color-brand-tertiary1)"
                              ></path>
                              <path
                                id="Vector_2"
                                d="M5.21875 5.48047H10.5312"
                                stroke="var(--icon-color-brand-tertiary1)"
                              ></path>
                              <path
                                id="Vector_3"
                                d="M5.21875 8.13672H10.5312"
                                stroke="var(--icon-color-brand-tertiary1)"
                              ></path>
                              <path
                                id="Vector_4"
                                d="M5.21875 11.1055H10.5312"
                                stroke="var(--icon-color-brand-tertiary1)"
                              ></path>
                              <path
                                id="Vector_5"
                                d="M10.5312 3.13672V13.1367"
                                stroke="var(--icon-color-brand-tertiary1)"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </span>
                    </div>
                    <div className=" col-span-5  md:col-span-6  h-12 grid grid-cols-2 md:grid-cols-6 relative">
                      <div className="w-full h-full col-span-2 md:col-span-4">
                        <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                          {isOddSuspended(game) ? (
                            <div className="col-span-12 text-center min-h-12 py-[1px] px-[1px]">
                              <span className="text-center bg-bg_ballRunning cursor-not-allowed w-full h-full rounded-sm flex text-xs flex-col items-center justify-center">
                                Suspended
                              </span>
                            </div>
                          ) : (
                            <>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "lay",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.lay?.[0]?.line,
                                    game?.runners?.[0]?.lay?.[0]?.price
                                  )
                                }
                                className="w-full col-span-6 h-full"
                              >
                                <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                                  <span
                                    id="oddBtnPrice"
                                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                                  >
                                    {game?.runners?.[0]?.lay?.[0]?.line}
                                  </span>
                                  <span
                                    id="oddBtnSize"
                                    className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                  >
                                    {game?.runners?.[0]?.lay?.[0]?.price}
                                  </span>
                                </div>
                              </div>
                              <div
                                onClick={() =>
                                  handleBetSlip(
                                    "back",
                                    game,
                                    game?.runners?.[0],
                                    game?.runners?.[0]?.back?.[0]?.line,
                                    game?.runners?.[0]?.back?.[0]?.price
                                  )
                                }
                                className="w-full col-span-6 h-full"
                              >
                                <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                                  <span
                                    id="oddBtnPrice"
                                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                                  >
                                    {game?.runners?.[0]?.back?.[0]?.line}
                                  </span>
                                  <span
                                    id="oddBtnSize"
                                    className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                  >
                                    {game?.runners?.[0]?.back?.[0]?.price}
                                  </span>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <span className=" hidden md:block col-span-2 text-center min-h-12">
                        <div className=" flex flex-col gap-y-1 items-center h-full w-full  justify-center  px-1 text-text_color_tertiary2">
                          <div className=" flex items-center justify-center">
                            <span className=" text-[10px] text-center ">
                              Min Bet :
                            </span>
                            <span className=" text-[10px] text-center">
                              100
                            </span>
                          </div>
                          <div className=" flex items-center justify-start">
                            <span className=" text-[10px] text-center ">
                              Max Bet :
                            </span>
                            <span className=" text-[10px] text-center">
                              {game?.maxLiabilityPerBet}
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                    {runnerId === game?.id && <MobileBetSlip />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Fancy;
