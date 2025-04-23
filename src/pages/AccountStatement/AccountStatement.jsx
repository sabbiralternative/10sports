import { useState } from "react";
import { useAccountStatement } from "../../hooks/accountStatement";
import "rsuite/DateRangePicker/styles/index.css";
import moment from "moment";
import { getFromDate } from "../../utils/fromDate";
import { DatePicker } from "rsuite";

const AccountStatement = () => {
  const [activeDayTab, setActiveDayTab] = useState(7);
  const [fromDate, setFromDate] = useState(getFromDate(activeDayTab));
  const [toDate, setToDate] = useState(new Date());

  const payload = {
    from: moment(fromDate).format("YYYY-MM-DD"),
    to: moment(toDate).format("YYYY-MM-DD"),
    type: "GR",
  };
  const { data } = useAccountStatement(payload);

  const changeDateTab = (date) => {
    setActiveDayTab(date);
    setFromDate(getFromDate(date));
  };

  const uniqueDates = [
    ...new Set(data?.result?.map((bet) => bet.settledTime.split(" ")[0])),
  ];
  console.log(fromDate);
  console.log(toDate);
  return (
    <div
      className="w-full h-full
    } lg:w-[54%] lg:pt-2"
    >
      <div className="flex flex-col w-full h-full transition-all ease-in-out duration-200">
        <div className="pt-2 lg:pt-0 border-t border-border_color_primary lg:border-none">
          <div className="relative w-full">
            <div className=" w-full flex flex-col gap-2 bg-bg_color_primary py-2">
              <div className="flex items-center gap-2 w-full px-2">
                <div className="w-full flex items-center gap-4">
                  <DatePicker
                    onChange={(date) => setFromDate(date)}
                    className="w-full"
                  />
                  <DatePicker
                    placement="auto"
                    onChange={(date) => setToDate(date)}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 w-full justify-center">
                <div
                  onClick={() => changeDateTab(7)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 border border-border_color_primary rounded-lg cursor-pointer shadow-sm transition-colors duration-200 ease-in-out text-xs sm:text-sm  ${
                    activeDayTab === 7
                      ? "bg-bg_text_brand_primary text-text_color_primary2"
                      : "bg-bg_color_primary text-text_color_primary1"
                  }`}
                >
                  Last 7 days
                </div>
                <div
                  onClick={() => changeDateTab(14)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 border border-border_color_primary rounded-lg cursor-pointer shadow-sm transition-colors duration-200 ease-in-out text-xs sm:text-sm  ${
                    activeDayTab === 14
                      ? "bg-bg_text_brand_primary text-text_color_primary2"
                      : "bg-bg_color_primary text-text_color_primary1"
                  }`}
                >
                  Last 14 days
                </div>
                <div
                  onClick={() => changeDateTab(28)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 border border-border_color_primary rounded-lg cursor-pointer shadow-sm transition-colors duration-200 ease-in-out text-xs sm:text-sm  ${
                    activeDayTab === 28
                      ? "bg-bg_text_brand_primary text-text_color_primary2"
                      : "bg-bg_color_primary text-text_color_primary1"
                  }`}
                >
                  Last 28 days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result ---> */}
        {uniqueDates?.length > 0 &&
          uniqueDates?.map((date) => {
            const filterByDate = data?.result?.filter(
              (bet) => bet.settledTime.split(" ")[0] === date
            );

            return (
              <div key={date} className="w-full p-3 flex flex-col gap-1 ">
                <div className="flex justify-center items-center mt-2  sticky top-[10px] lg:top-[100px]">
                  <div className=" text-center bg-bg_color_primary px-1.5 py-1 text-text_color_primary1  rounded text-xs  shadow-md">
                    {date}
                  </div>
                </div>
                {filterByDate?.map((bet, i) => (
                  <div
                    key={i}
                    className="bg-bg_color_primary rounded shadow-md active:scale-[97%] cursor-pointer transition-all ease-in-out duration-300"
                  >
                    <div className="border-b p-2 text-sm text-text_brand_primary font-semibold">
                      {bet?.narrations}
                    </div>
                    <div className="flex justify-between p-2 text-sm font-semibold text-text_color_primary1 ">
                      <span>{bet?.marketId}</span>
                      <div className=" flex justify-start gap-1">
                        P&amp;L
                        <span
                          className={`font-bold tracking-tighter  ${
                            bet?.bet?.memberWin > 0
                              ? "text-text_color_success"
                              : "text-text_color_danger"
                          }`}
                        >
                          {bet?.memberWin}
                        </span>
                      </div>
                    </div>
                    <div className="flex py-1 px-2 justify-between  bg-bg_color_secondary rounded-b text-[10px] text-text_color_primary1">
                      <div>{bet?.settledTime}</div>
                      <div className="text-start">Balance: ₹{bet?.balance}</div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AccountStatement;
