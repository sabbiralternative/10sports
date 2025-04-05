import { useNavigate } from "react-router-dom";
import { useAccountStatement } from "../../hooks/accountStatement";
import { useSelector } from "react-redux";

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
  console.log(payload);
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
    <div className="w-full h-full  lg:w-[54%] lg:pt-2">
      <div className="flex flex-col h-full">
        <div className="pt-2 lg:pt-0 border-t border-border_color_primary lg:border-none">
          <div className="relative w-full" />
        </div>
        {token && categories?.length > 0 ? (
          categories?.map((category) => {
            const filterData = data?.result?.filter(
              (item) => item.settledTime?.split(" ")[0] === category
            );
            return (
              <div
                key={category}
                title="Profit & Loss Statement"
                className="w-full px-1 my-1.5"
              >
                <div className="w-full text-text_color_primary2 rounded-[4px] flex items-center justify-between px-2.5 py-[9px] bg-bg_text_brand_primary">
                  <div className="text-xs text-text_color_primary2 font-manrope-bold font-[600] leading-[140%]">
                    {category}
                  </div>
                  <div className="text-xs text-text_color_primary2 font-manrope-bold font-[600] flex items-center justify-center leading-[140%]">
                    <span>P&amp;L</span>
                    <span className="-mt-0.5 ml-1">:</span>
                    <span className="ml-1">112</span>
                  </div>
                </div>
                {filterData?.map((item) => (
                  <div
                    onClick={() => handleNavigateSinglePassbook(item)}
                    key={item?.eventId}
                    className="w-full flex bg-bg_color_primary active:scale-95 transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 my-1 shadow-md cursor-pointer"
                  >
                    <div className="w-full text-start font-manrope-regular bg-bg_text_brand_primary bg-clip-text text-transparent px-2.5 py-2 text-xs font-[550] capitalize">
                      <span>{item?.narration}</span>
                    </div>
                    <div className="w-full bg-bg_color_tertiary1 px-2.5 py-2 flex items-center justify-between font-manrope-regular text-xs sm:text-sm">
                      <span className="text-text_color_primary1 w-1/2 border-r border-r-border_color_primary flex items-center justify-start gap-x-1">
                        <span>Commission:</span>
                        <span className="font-semibold text-text_color_danger">
                          ₹ {item?.memberComm}
                        </span>
                      </span>
                      <span className="text-text_color_primary1 w-1/2 flex items-center justify-end gap-x-1">
                        <span>Net Win:</span>
                        <span className="font-semibold text-text_color_success">
                          ₹ {item?.memberWin}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-start flex-col w-full px-2.5 py-2 text-xs sm:text-sm font-manrope-regular text-text_color_primary1">
                      <div className="flex items-center justify-between w-full font-[500] text-text_color_primary1">
                        <span>Start Time</span>
                        <span className="uppercase">N/A</span>
                      </div>
                      <div className="flex items-center justify-between w-full font-[500] text-text_color_primary1">
                        <span>Settled Time</span>
                        <span className="uppercase">{item?.settledTime}</span>
                      </div>
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
