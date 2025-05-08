import { useEffect, useState } from "react";
import { useBankAccount } from "../../../../hooks/bankAccount";
import NewAccount from "./NewAccount";
import OldAccount from "./OldAccount";

const BankAccount = ({ amount }) => {
  const bankData = {
    type: "getBankAccounts",
    status: "1",
  };
  const { data } = useBankAccount(bankData);
  const [tab, setTab] = useState("");

  useEffect(() => {
    if (data?.length > 0) {
      setTab("oldAccount");
    } else {
      setTab("newAccount");
    }
  }, [data]);

  return (
    <div className="w-full h-full  lg:w-[54%] lg:pt-2">
      <div className="px-2 font-lato flex flex-col items-start justify-start gap-y-2 mt-1 md:mt-[0px] pb-10">
        <div className="text-base text-text_color_primary1  w-full font-[700] flex flex-col items-start justify-start gap-y-1">
          <span className="text-sm md:text-base">
            Please fill in all required fields*
          </span>
          <div className="text-sm w-full bg-bg_color_input_bg">
            <div
              id="step-selectMode"
              className="relative flex w-[100%] rounded-lg overflow-clip shadow"
            >
              <button
                onClick={() => setTab("newAccount")}
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold text-text_color_primary2 undefined ${
                  tab === "newAccount" ? "text-primary" : ""
                } `}
                style={{ zIndex: 10 }}
              >
                Use New Account
              </button>
              <button
                onClick={() => setTab("oldAccount")}
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold text-text_color_primary2 undefined bg-none ${
                  tab === "oldAccount" ? "text-primary" : ""
                }`}
                style={{ zIndex: 10 }}
              >
                Use Previous Account
              </button>
              <div
                className={`w-[48%] absolute z-10 h-full transition-all ease-in-out ${
                  tab === "oldAccount" ? "right-0" : "left-0"
                }`}
                style={{
                  zIndex: 9,
                  width: "50%",

                  bottom: "0px",
                }}
              >
                <div className="w-full h-full bg-bg_text_brand_primary rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {tab === "newAccount" && <NewAccount setTab={setTab} />}
        {tab === "oldAccount" && (
          <OldAccount bankAccounts={data} amount={amount} />
        )}
      </div>
      <div className="w-full pb-4 px-2" />
    </div>
  );
};

export default BankAccount;
