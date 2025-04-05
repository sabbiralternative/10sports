import { useEffect, useState } from "react";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import { Cricket, InPlayIcon, Tennis } from "../../../assets/Icon/Index";
import { useSelector } from "react-redux";
import ScoreHome from "./ScoreHome";

const InPlay = () => {
  const { group } = useSelector((state) => state.global);
  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    }
  );

  const [categories, setCategories] = useState([]);
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football" };
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId)
        )
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);
  return (
    <div title="In Play" className="px-[6px] w-full">
      <div className="w-full font-helvetica-neue">
        <div className="w-full flex items-center justify-between border-b border-border_color_primary rounded-t-[10px] py-1.5 px-[7px] bg-bg_inPlayBlockBg">
          <div className="flex items-center text-text_color_primary2 font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
            <InPlayIcon />
            <span>In Play</span>
          </div>
        </div>
        <div className="bg-bg_color_primary border border-border_color_primary border-b-0 shadow-lg border-t-0 rounded-b">
          {categories?.map((category) => {
            const filteredData = Object.entries(data)
              .filter(
                ([, value]) =>
                  value.eventTypeId === category && value.visible === true
              )
              .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
              }, {});
            return (
              <div key={category} className="eventHeadName grid grid-cols-12">
                <div className="text-text_color_primary1 px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                  {eventName[category] === "Cricket" && <Cricket />}
                  {eventName[category] === "Tennis" && <Tennis />}
                  {eventName[category] === "Football" && <Tennis />}
                  <div className="text-text_color_primary1 mt-0.5 md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                    {eventName[category]}
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
                  Object.values(data).length > 0 &&
                  Object.keys(filteredData)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((keys, index) => {
                      if (!data?.[keys]?.visible) {
                        return null;
                      }

                      const lastElement =
                        Object.keys(filteredData)?.length - 1 === index;

                      return (
                        <>
                          <div
                            onClick={() => navigateGameList(keys)}
                            className={`col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1 ${
                              lastElement ? "border-b" : ""
                            }`}
                          >
                            {/* <span
                              id="inPlayTime"
                              className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
                            >
                              <span className="text-text_color_InPlayEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                                {data[keys]?.date}
                              </span>
                            </span> */}
                            <ScoreHome data={data} keys={keys} />
                            <div
                              id="inPlayTeamName"
                              className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
                            >
                              <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                                <div className="text-selection-none w-full flex items-center justify-start">
                                  <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                                  <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                                    {data[keys]?.player1}
                                  </span>
                                </div>
                                <div className="text-selection-none w-full flex items-center justify-start">
                                  <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                                  <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                                    {data[keys]?.player2}
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                          <span
                            onClick={() => navigateGameList(keys)}
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
                                      {data?.[keys]?.[0]?.ex?.availableToBack[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToBack?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToLay?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToLay?.[0]?.size || "-"}
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
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToBack?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToBack?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToLay?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToLay?.[0]?.size || "-"}
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
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToBack?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToBack?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToLay?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToLay?.[0]?.size || "-"}
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
                                      {data?.[keys]?.[0]?.ex?.availableToBack[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {" "}
                                      {data?.[keys]?.[0]?.ex?.availableToBack[0]
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
                                      {data?.[keys]?.[2]?.ex?.availableToBack[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {" "}
                                      {data?.[keys]?.[2]?.ex?.availableToBack[0]
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
                                      {data?.[keys]?.[1]?.ex?.availableToBack[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[1]?.ex?.availableToBack[0]
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
                                      {data?.[keys]?.[0]?.ex?.availableToLay[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[0]?.ex?.availableToLay[0]
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
                                      {data?.[keys]?.[2]?.ex?.availableToLay[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[2]?.ex?.availableToLay[0]
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
                                      {data?.[keys]?.[1]?.ex?.availableToLay[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className=" relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px]  leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[1]?.ex?.availableToLay[0]
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InPlay;
