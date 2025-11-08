import { useNavigate } from "react-router-dom";
import { useAccountStatement } from "../../hooks/accountStatement";
import { useSelector } from "react-redux";
import moment from "moment";

const BettingProfitLoss = () => {
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const payload = {
    from: fromDate,
    to: toDate,
    type: "GR",
  };

  const { data } = useAccountStatement(payload);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth);
  const handleNavigateSinglePassbook = (item) => {
    if (item?.plDetails) {
      navigate(`/betting-profit-loss/${item?.marketId}`);
    }
  };

  const categories = Array.from(
    new Set(data?.result?.map((item) => item.settledTime?.split(" ")[0]))
  );

  return (
    <div className="w-full h-full  lg:w-[54%] lg:pt-2 font font-lato">
      <div className="flex flex-col h-full">
        <div className="pt-2 lg:pt-0 border-t border-border_color_primary lg:border-none">
          <div className="relative w-full" />
        </div>
        {token && categories?.length > 0 ? (
          categories?.map((category) => {
            const filterData = data?.result?.filter(
              (item) => item.settledTime?.split(" ")[0] === category
            );
            const totalPnl = filterData?.reduce((acc, curr) => {
              return acc + curr.memberWin;
            }, 0);
            return (
              <div
                key={category}
                title="Profit & Loss Statement"
                className="w-full px-1 my-1.5 font font-lato"
              >
                <div className="w-full text-text_color_primary2 rounded-[4px] flex items-center justify-between px-2.5 py-[9px] bg-bg_text_brand_primary">
                  <div className="text-xs text-primary  font-[600] leading-[140%]">
                    {moment(category).format("Do-MMM-YYYY")}
                  </div>
                  <div className="text-xs text-text_color_primary2  font-[600] flex items-center justify-center leading-[140%]">
                    <span className="text-primary">Total PL</span>
                    <span className="-mt-0.5 ml-1 text-primary">:</span>
                    <span
                      className={`ml-1 ${
                        totalPnl > 0
                          ? "text-text_color_success"
                          : totalPnl < 0
                          ? "text-text_color_danger"
                          : "text-white"
                      }`}
                      style={{ textShadow: "1px 1px #000000" }}
                    >
                      {totalPnl}
                    </span>
                  </div>
                </div>
                {filterData?.map((item) => (
                  <div
                    onClick={() => handleNavigateSinglePassbook(item)}
                    key={item?.eventId}
                    className="w-full flex bg-bg_color_primary active:scale-95 transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 my-1 shadow-md cursor-pointer"
                  >
                    <div className="w-full text-start  bg-bg_text_brand_primary bg-clip-text text-transparent px-2.5 py-2 text-xs font-[550] capitalize flex items-center justify-between">
                      <span>{item?.narration}</span>
                      <span className="text-gray-400">{item?.time}</span>
                    </div>
                    <div className="w-full bg-bg_color_tertiary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                      <span className="text-text_color_primary1 w-1/2 border-r border-r-border_color_primary flex items-center justify-start gap-x-1">
                        <span>PL:</span>
                        <span
                          className={`font-semibold  ${
                            item?.memberWin > 0
                              ? "text-text_color_success"
                              : item?.memberWin < 0
                              ? "text-text_color_danger"
                              : "text-black"
                          }`}
                        >
                          ₹ {item?.memberWin}
                        </span>
                      </span>
                      <span className="text-text_color_primary1 w-1/2 flex items-center justify-end gap-x-1">
                        <span>Balance:</span>
                        <span className="font-semibold ">
                          ₹ {item?.balance}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center w-full pt-20">
            <h2 className="text-base text-white">
              No betting profit and loss yet!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BettingProfitLoss;
