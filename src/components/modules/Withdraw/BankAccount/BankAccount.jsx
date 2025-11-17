import { useEffect, useState } from "react";
import { useBankAccount } from "../../../../hooks/bankAccount";
import NewAccount from "./NewAccount";
import OldAccount from "./OldAccount";
import AddUSDTAccount from "./AddUSDTAccount";

const BankAccount = ({ amount }) => {
  const bankData = {
    type: "getBankAccounts",
    status: "1",
  };
  const { data, refetch } = useBankAccount(bankData);
  const [tab, setTab] = useState("");

  useEffect(() => {
    if (data?.length > 0) {
      setTab("oldAccount");
    } else {
      setTab("add-bank-account");
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
                onClick={() => setTab("add-bank-account")}
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold text-text_color_primary2 undefined ${
                  tab === "add-bank-account" ? "text-primary" : ""
                } `}
                style={{ zIndex: 10 }}
              >
                Add Bank Account
              </button>
              <button
                onClick={() => setTab("add-usdt-account")}
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold text-text_color_primary2 undefined ${
                  tab === "add-usdt-account" ? "text-primary" : ""
                } `}
                style={{ zIndex: 10 }}
              >
                Add USDT Account
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
                className={`w-[30%] absolute z-10 h-full transition-all ease-in-out ${
                  tab === "oldAccount"
                    ? "right-0"
                    : tab === "add-bank-account"
                    ? "left-0"
                    : "left-[35%]"
                }`}
                style={{
                  zIndex: 9,
                  width: "30%",

                  bottom: "0px",
                }}
              >
                <div className="w-full h-full bg-bg_text_brand_primary rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {tab === "add-bank-account" && (
          <NewAccount setTab={setTab} refetchBankAccounts={refetch} />
        )}
        {tab === "add-usdt-account" && (
          <AddUSDTAccount setTab={setTab} refetchBankAccounts={refetch} />
        )}
        {tab === "oldAccount" && (
          <OldAccount bankAccounts={data} amount={amount} />
        )}
      </div>
    </div>
  );
};

export default BankAccount;
