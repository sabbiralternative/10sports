import { formatDate } from "../../../utils/formateDate";

const ScoreHome = ({ data, keys }) => {
  return (
    <span
      id="inPlayTime"
      className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
    >
      {data?.[keys]?.eventTypeId == 4 && (
        <>
          {data[keys]?.inPlay == 1 && data[keys]?.score2 ? (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {data?.[keys]?.score2?.line1}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] xs:text-[9px] font-medium w-full text-center">
                {" "}
                {data?.[keys]?.score2?.line2}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {data?.[keys]?.score2?.line3}
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data, keys)}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}
      {data?.[keys]?.eventTypeId == 1 && (
        <>
          {data[keys]?.inPlay == 1 && data[keys]?.score ? (
            <span
              id="inPlayTime"
              className="flex flex-col  items-center justify-center  pl-[1px] pr-[1px]"
            >
              <span
                className=" text-text_color_InPlayEventsScoreAndTime text-[8px] xs:text-xs font-medium w-full flex items-center justify-center gap-x-2"
                style={{ fontSize: "10px" }}
              >
                <span className="text-text_color_InPlayEventsScoreAndTime">
                  {data[keys]?.timeStatus}
                </span>
                <span className=" flex flex-col">
                  <span className=" text-text_color_primary1 ">
                    {" "}
                    {data[keys]?.score?.total_1}
                  </span>
                  <span className=" text-text_color_primary1 ">
                    {data[keys]?.score?.total_2}
                  </span>
                </span>
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data, keys)}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}

      {data?.[keys]?.eventTypeId == 2 && (
        <>
          {data[keys]?.inPlay == 1 && data[keys]?.score ? (
            <span
              id="inPlayTime"
              className="flex text-selection-none  items-center justify-center flex-col col-span-2  pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
            >
              <span
                id="inPlayTime"
                className="flex  items-center justify-center flex-col pl-[1px] pr-[1px]"
              >
                <span className=" text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2 ">
                  <span className="text-text_color_InPlayEventsScoreAndTime">
                    {" "}
                    {data[keys]?.score?.totalSet1}
                  </span>
                  <span className=" text-text_color_primary1 ">
                    {" "}
                    {data?.[keys]?.score?.set1
                      .map((item) => Number(item))
                      .filter((item) => !isNaN(item))
                      .pop()}
                  </span>
                </span>
                <span className=" text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium w-full flex items-center justify-center gap-x-2">
                  <span className="text-text_color_InPlayEventsScoreAndTime">
                    {" "}
                    {data[keys]?.score?.totalSet2}
                  </span>
                  <span className=" text-text_color_primary1 ">
                    {" "}
                    {data?.[keys]?.score?.set2
                      .map((item) => Number(item))
                      .filter((item) => !isNaN(item))
                      .pop()}
                  </span>
                </span>
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data, keys)}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-text_color_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}
    </span>
  );
};

export default ScoreHome;
