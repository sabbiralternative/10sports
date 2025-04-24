import { useState } from "react";
import DepositStatement from "./DepositStatement";
import WithdrawStatement from "./WithdrawStatement";

const DWReport = () => {
  const [tab, setTab] = useState("deposit");
  return (
    <div
      className="w-full lg:pt-2  h-full
     lg:w-[54%]"
    >
      <div className=" w-full h-full flex flex-col gap-y-2">
        <div className="flex items-center justify-center flex-col h-max w-full relative z-[11]">
          <div className="px-2 w-full pt-2">
            <div className=" flex flex-row font-lato items-center justify-start gap-2.5 relative">
              <div
                onClick={() => setTab("deposit")}
                className="cursor-pointer flex flex-row items-center justify-center"
              >
                <span
                  className={`text-text_color_primary2  text-sm  rounded-md bg-transparent   border-border_color_primary1 px-[25px] py-2  text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10  ${
                    tab === "withdraw" ? "border" : ""
                  }`}
                >
                  Deposit
                </span>
              </div>
              <div
                onClick={() => setTab("withdraw")}
                className="cursor-pointer flex flex-row items-center justify-center"
              >
                <span
                  className={`text-text_color_primary2  text-sm  rounded-md bg-transparent   border-border_color_primary1 px-[25px] py-2  text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10  ${
                    tab === "deposit" ? "border" : ""
                  }`}
                >
                  Withdrawal
                </span>
              </div>
              <div
                className={`absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-bg_text_brand_primary text-sm bg-bg_text_brand_primary  rounded-md lg:h-[36px] ${
                  tab === "deposit" ? "-left-1" : "left-[106px]"
                }`}
                style={{
                  width: tab === "deposit" ? "90px" : "110px",
                  top: "1px",
                }}
              />
            </div>
          </div>
        </div>
        {tab === "deposit" ? <DepositStatement /> : <WithdrawStatement />}
      </div>
    </div>
  );
};

export default DWReport;
