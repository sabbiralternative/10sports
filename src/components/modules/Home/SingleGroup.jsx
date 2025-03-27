import { useNavigate } from "react-router-dom";
import {
  Cricket,
  InPlayIcon,
  Tennis,
  Upcoming,
} from "../../../assets/Icon/Index";
import { useSelector } from "react-redux";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const SingleGroup = ({ data, filterData, title, margin }) => {
  const { valueByLanguage } = useLanguage();
  const eventName = {
    4: languageValue(valueByLanguage, LanguageKey.CRICKET),
    2: languageValue(valueByLanguage, LanguageKey.TENNIS),
    1: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
    5: languageValue(valueByLanguage, LanguageKey.KABADDI),
  };
  const { group } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  return (
    <div title="In Play" className={`px-[6px] w-full ${margin ? "mt-2" : ""}`}>
      <div className="w-full font-helvetica-neue">
        <div className="w-full flex items-center justify-between border-b border-border_color_primary rounded-t-[10px] py-1.5 px-[7px] bg-bg_inPlayBlockBg">
          <div className="flex items-center text-text_color_primary2 font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
            {title === "In Play" ? <InPlayIcon /> : <Upcoming />}

            <span>{title}</span>
          </div>
        </div>
        <div className="bg-bg_color_primary border border-border_color_primary border-b-0 shadow-lg border-t-0 rounded-b">
          <div className="eventHeadName grid grid-cols-12">
            <div className="text-text_color_primary1 px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
              {group === 4 && <Cricket />}
              {group === 2 && <Tennis />}
              {group === 1 && <Tennis />}
              <div className="text-text_color_primary1 mt-0.5 md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                {eventName[group]}
              </div>
            </div>
            <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
              <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                1
              </span>
              <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                X
              </span>
              <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                2
              </span>
            </div>
            {data &&
              filterData?.map((key) => {
                return (
                  <>
                    <div
                      onClick={() => navigateGameList(key)}
                      className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1"
                    >
                      <span
                        id="inPlayTime"
                        className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
                      >
                        <span className="text-text_color_InPlayEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                          22-03-2025 8:30 PM
                        </span>
                      </span>
                      <div
                        id="inPlayTeamName"
                        className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
                      >
                        <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                          <div className="text-selection-none w-full flex items-center justify-start">
                            <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                            <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                              {data[key]?.player1}
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <span
                      onClick={() => navigateGameList(key)}
                      className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-border_color_primary1"
                    >
                      {/* Desktop start */}
                      <div className="w-full sm:grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px] hidden">
                        <div className="col-span-4 grid grid-cols-2 h-full">
                          <div className="w-full h-full">
                            <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[0]?.ex?.availableToBack[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[0]?.ex?.availableToBack?.[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                          <div className="w-full h-full">
                            <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[0]?.ex?.availableToLay?.[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[0]?.ex?.availableToLay?.[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-4 grid grid-cols-2 h-full">
                          <div className="w-full h-full">
                            <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[2]?.ex?.availableToBack?.[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[2]?.ex?.availableToBack?.[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                          <div className="w-full h-full">
                            <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[2]?.ex?.availableToLay?.[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[2]?.ex?.availableToLay?.[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-4 grid grid-cols-2 h-full">
                          <div className="w-full h-full">
                            <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[1]?.ex?.availableToBack?.[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[1]?.ex?.availableToBack?.[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                          <div className="w-full h-full">
                            <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[1]?.ex?.availableToLay?.[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[1]?.ex?.availableToLay?.[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Desktop end */}
                      {/* Mobile */}
                      <div
                        id="hideScrollBar"
                        className="w-full overflow-x-auto flex h-full sm:px-[2px] sm:hidden"
                      >
                        <div className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%] gap-x-[1px] px-[1px] py-[1px]">
                          <div className="col-span-4 w-full h-full">
                            <div className=" overflow-hidden relative  cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[0]?.ex?.availableToBack[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {" "}
                                {data?.[key]?.[0]?.ex?.availableToBack[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-4 w-full h-full">
                            <div className=" overflow-hidden relative  cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[2]?.ex?.availableToBack[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {" "}
                                {data?.[key]?.[2]?.ex?.availableToBack[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-4 w-full h-full">
                            <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[1]?.ex?.availableToBack[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[1]?.ex?.availableToBack[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%] gap-x-[1px] px-[1px] py-[1px]">
                          <div className="col-span-4 w-full h-full">
                            <div className=" overflow-hidden relative   opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[0]?.ex?.availableToLay[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[0]?.ex?.availableToLay[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-4 w-full h-full">
                            <div className=" overflow-hidden relative   cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[2]?.ex?.availableToLay[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[2]?.ex?.availableToLay[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-4 w-full h-full">
                            <div className=" overflow-hidden relative   cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full  leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                {data?.[key]?.[1]?.ex?.availableToLay[0]
                                  ?.price || "-"}
                              </span>
                              <span
                                id="oddBtnSize"
                                className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                              >
                                {data?.[key]?.[1]?.ex?.availableToLay[0]
                                  ?.size || "-"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile end */}
                    </span>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGroup;
