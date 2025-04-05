import toast from "react-hot-toast";
import moment from "moment";
import { useBonusMutation, useBonusStatement } from "../../hooks/bonus";

const BonusStatement = () => {
  const { data, refetch } = useBonusStatement();
  const { mutate: claimBonus } = useBonusMutation();

  const handleShowMessage = (item) => {
    if (item?.is_claimed == 1) {
      return <span className="text-text_color_success">Bonus Claimed</span>;
    } else if (item?.is_claimed == 2) {
      return <span className="text-orange-500">Claim Pending</span>;
    } else if (item?.is_claimed == 3) {
      return <span className="text-text_color_danger">Rejected</span>;
    } else if (item?.is_claimed == 0) {
      if (item?.is_wagering_complete == 1) {
        return (
          <button
            onClick={() => handleClaimBonus(item)}
            className="bg-bg_color_success px-2 rounded-sm py-1 text-white"
          >
            Claim
          </button>
        );
      } else if (item?.is_wagering_complete == 0) {
        return (
          <span className="text-text_color_danger">Wagering Incomplete</span>
        );
      }
    }
  };

  const handleClaimBonus = async (item) => {
    const payload = {
      type: "claimBonus",
      bonus_statement_id: item?.bonus_statement_id,
    };
    const result = await claimBonus(payload).unwrap();
    if (result?.success) {
      refetch();
      toast.success(result?.result);
    } else {
      toast.error(result?.result || "Something went wrong");
    }
  };

  const formateDate = (date) => {
    if (date) {
      const formateDate = moment(date).format("DD-MM-YYYY, h:mm a");
      return formateDate;
    }
  };

  return (
    <div className="w-full h-full  lg:w-[54%] lg:pt-2">
      <div className="flex flex-col h-full">
        {data?.length > 0 ? (
          data?.map((item, i) => {
            return (
              <div
                key={i}
                title="Profit &amp; Loss Statement"
                className="w-full px-1 my-1.5"
              >
                <div
                  title="Cricket - 1.232257782-3066645.FY"
                  className="w-full flex  transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 bg-bg_color_primary my-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                >
                  <div className="w-full bg-bg_color_primary px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                    <span className="text-white w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                      <span>Bonus Amount:</span>
                      <span className="font-semibold text-text_Success">
                        ₹ {item?.amount}
                      </span>
                    </span>
                    <span className="text-white w-1/2 flex items-center justify-end gap-x-1">
                      <span>Wagering Required:</span>
                      <span
                        className={`font-semibold ${
                          item?.wagering_amount > 0
                            ? "text-text_Success"
                            : "text-text_Danger"
                        }`}
                      >
                        ₹ {item?.wagering_amount}
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-bg_Quaternary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                    <span className="text-white w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                      <span>Wagering Complete Amount:</span>
                      <span
                        className={`font-semibold ${
                          item?.is_wagering_complete == 0
                            ? "text-orange-500"
                            : ""
                        } ${
                          item?.is_wagering_complete == 1
                            ? "text-text_Success"
                            : ""
                        }`}
                      >
                        ₹ {item?.wagering_complete_amount}
                      </span>
                    </span>
                    <span className="text-white w-1/2 flex items-center justify-end gap-x-1">
                      <span>Date Added:</span>
                      <span className={`font-semibold `}>
                        {formateDate(item?.date_added)}
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-bg_Quaternary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                    <span className="text-white w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                      <span>Expiry Date:</span>
                      <span className="font-semibold">
                        {formateDate(item?.expiry_date)}
                      </span>
                    </span>
                    <span className="text-text_Ternary w-1/2 flex items-center justify-end gap-x-1">
                      <span></span>
                      <span className={`font-semibold `}>
                        {handleShowMessage(item)}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center w-full pt-20">
            <h2 className="text-base text-white">No bonus statement yet!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BonusStatement;
