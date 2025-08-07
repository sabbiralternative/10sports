import { useEffect, useState } from "react";
import { useAccountStatement } from "../../hooks/accountStatement";
import ShowImage from "../../components/modals/ShowImage/ShowImage";
import Complaint from "../../components/modals/Complaint/Complaint";
import { Settings } from "../../api";

const WithdrawStatement = () => {
  const [complaintId, setComplaintId] = useState(null);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState("");
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const payload = {
    from: fromDate,
    to: toDate,
    type: "WITHDRAW",
    status: "ALL",
  };
  const { data } = useAccountStatement(payload);

  useEffect(() => {
    if (data?.result?.length > 0) {
      const categories = Array.from(
        new Set(data?.result?.map((item) => item?.date?.split(" ")?.[0]))
      );
      setCategory(categories);
    }
  }, [data]);

  return (
    <>
      {complaintId && (
        <Complaint
          setComplaintId={setComplaintId}
          complaintId={complaintId}
          method="withdraw"
        />
      )}
      {image && <ShowImage image={image} setShowImage={setImage} />}
      <div className="flex-1 flex flex-col gap-y-2 px-2 mt-2 font-lato pb-10">
        {data?.result?.length > 0 && (
          <>
            {category?.map((category) => {
              return (
                <div
                  key={category}
                  className="w-full flex flex-col gap-y-2  animate-transactionCardAnimation"
                >
                  <div className="flex justify-center items-center   z-10">
                    <div className=" text-center bg-bg_color_primary px-2.5 py-1 text-text_color_primary1 font-bold rounded text-[10px]  shadow-sm">
                      {category}
                    </div>
                  </div>
                  {data?.result
                    ?.filter((item) => item?.date?.split(" ")?.[0] === category)
                    ?.map((data, i) => {
                      return (
                        <div
                          key={i}
                          className="flex active:scale-95 md:hover:scale-[98%] transition-all duration-300 ease-in-out cursor-pointer flex-col gap-2 bg-bg_color_primary rounded overflow-hidden shadow-lg
              
              "
                        >
                          <div className="flex justify-between items-start text-[10px] font-bold h-full">
                            <div className="flex items-center justify-center px-3 py-1 gap-x-2">
                              <span className="text-base text-text_color_primary1">
                                Withdraw{" "}
                              </span>
                            </div>
                            <div
                              className={`px-3 py-1 text-x xs:text-xs sm:text-sm font-semibold  text-text_color_primary2 rounded-bl 
                               
                            ${
                              data?.status === "APPROVED"
                                ? "bg-bg_color_transactionSuccessBg"
                                : ""
                            } ${
                                data?.status === "REJECTED"
                                  ? "bg-bg_color_transactionFailedBg "
                                  : ""
                              } ${
                                data?.status === "PENDING"
                                  ? "bg-bg_color_transactionPendingBg"
                                  : ""
                              }
                            `}
                            >
                              {data?.status}
                            </div>
                          </div>
                          <div className="flex px-3 justify-between text-text_color_primary1">
                            <span className="flex flex-col  justify-center">
                              <span className="text-xs font-normal">
                                {data?.referenceNo}
                              </span>
                            </span>
                            {data?.image && (
                              <span
                                onClick={() => setImage(data?.image)}
                                className=" cursor-pointer"
                              >
                                <img
                                  className="size-12"
                                  src={data?.image}
                                  alt=""
                                />
                              </span>
                            )}
                            <span className="text-start text-lg flex items-center tracking-tighter font-bold">
                              {" "}
                              ₹{data?.amount}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div
                              title="Remkark/Reason"
                              className=" px-3 font-semibold flex items-center justify-start  gap-x-1"
                            >
                              <span className=" text-text_color_primary1  text-xs">
                                Remark
                              </span>
                              <span className=" text-text_color_primary1  text-xs">
                                :
                              </span>
                              <span className=" text-text_color_primary1  text-xs">
                                {data?.remark}
                              </span>
                            </div>
                            {Settings.complaint && (
                              <button
                                style={{ backgroundColor: "rgb(255 131 46)" }}
                                onClick={() =>
                                  setComplaintId(data?.referenceNo)
                                }
                                className="px-2 py-1 rounded-md text-white flex items-center justify-center   sm:text-sm font-semibold"
                              >
                                Raise Complaint
                              </button>
                            )}
                          </div>
                          <div className="text-xs py-1 text-center text-text_color_primary3 w-full border-t bg-bg_color_quaternary capitalize">
                            {data?.date}
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </>
        )}
        {data?.result?.length === 0 && (
          <div className="flex items-center justify-center pt-20 text-white">
            <p>No transaction yet!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WithdrawStatement;
