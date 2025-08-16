import { Settings } from "../../../api";
import useDepositBreakdown from "../../../hooks/depositBreakdown";
import toast from "react-hot-toast";

const SelectAmount = ({ amount, setAmount, setTab }) => {
  const { mutate: handleDepositBreakdown } = useDepositBreakdown();

  const handleShowBankAccount = (e) => {
    e.preventDefault();
    if (amount) {
      const floatAmount = parseFloat(amount);

      if (typeof floatAmount !== "number") {
        return toast.error("Please enter a valid number");
      }
      handleDepositBreakdown(
        { amount: floatAmount },
        {
          onSuccess: (data) => {
            console.log(data);
            if (data?.minimumDeposit && floatAmount < data?.minimumDeposit) {
              toast.error(`Minimum deposit amount is ${data?.minimumDeposit}`);
            } else {
              setTab("bankAccount");
            }
          },
        }
      );
    }
  };

  return (
    <div className="w-full h-full  lg:w-[54%] lg:pt-2">
      <div className="mx-2 font-lato h-full pb-10">
        <div className="w-full flex flex-col gap-y-2">
          <form
            className="w-full flex flex-col gap-y-2 h-max"
            autoComplete="off"
          >
            <div className="w-full mt-2.5 py-[15px] rounded-lg bg-bg_color_primary px-3">
              <div className="font-lato font-bold text-text_color_primary1 text-base leading-5">
                <p>
                  Amount<span className="text-text_color_danger">*</span>
                </p>
              </div>
              <div className="w-full mt-2 py-2 bg-bg_color_input_bg grid grid-cols-12 border rounded-[4px] px-2 items-center justify-center border-border_color_success font-semibold">
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full focus:outline-none col-span-11 text-text_color_primary1 w-full h-max bg-transparent font-lato placeholder:font-lato placeholder:font-normal font-bold text-base"
                  placeholder="₹ Enter Amount"
                  required
                  autoComplete="off"
                  type="number"
                  value={amount}
                />
                <span className="font-lato font-bold leading-4 text-text_color_primary1 text-base col-span-1 text-center font-semibold">
                  INR
                </span>
              </div>
              <div className="text-x pl-1 mt-0 text-text_color_primary1 font-lato">
                <span>Min 300</span>
                <span> - Max 5,00,000</span>
              </div>
              <div className="w-full grid grid-cols-3 gap-[10px] mt-[18px] text-primary">
                <button
                  onClick={() => setAmount(300)}
                  className="relative overflow-hidden bg-bg_text_brand_primary transition-all ease-in-out duration-300 active:scale-95  min-h-9 text-base font-lato rounded-md font-[800] leading-4"
                  type="button"
                >
                  <span>+300</span>
                </button>
                <button
                  onClick={() => setAmount(500)}
                  className="relative overflow-hidden bg-bg_text_brand_primary transition-all ease-in-out duration-300 active:scale-95  min-h-9 text-base font-lato rounded-md font-[800] leading-4"
                  type="button"
                >
                  <span>+500</span>
                </button>
                <button
                  onClick={() => setAmount(1000)}
                  className="relative overflow-hidden bg-bg_text_brand_primary transition-all ease-in-out duration-300 active:scale-95  min-h-9 text-base font-lato rounded-md font-[800] leading-4"
                  type="button"
                >
                  <span>+1,000</span>
                </button>
                <button
                  onClick={() => setAmount(2000)}
                  className="relative overflow-hidden bg-bg_text_brand_primary transition-all ease-in-out duration-300 active:scale-95  min-h-9 text-base font-lato rounded-md font-[800] leading-4"
                  type="button"
                >
                  <span>+2,000</span>
                </button>
                <button
                  onClick={() => setAmount(5000)}
                  className="relative overflow-hidden bg-bg_text_brand_primary transition-all ease-in-out duration-300 active:scale-95  min-h-9 text-base font-lato rounded-md font-[800] leading-4"
                  type="button"
                >
                  <span>+5,000</span>
                </button>
                <button
                  onClick={() => setAmount(10000)}
                  className="relative overflow-hidden bg-bg_text_brand_primary transition-all ease-in-out duration-300 active:scale-95  min-h-9 text-base font-lato rounded-md font-[800] leading-4"
                  type="button"
                >
                  <span>+10,000</span>
                </button>
              </div>
              <div className="text-text_brand_primary my-2 w-full text-start text-base font-lato font-[480] leading-4" />
            </div>
            {/* {amount && (
              <div className="w-full mt-2.5 rounded-md bg-bg_color_primary text-text_color_primary1 px-3 py-[15px] font-lato">
                <div className="font-bold text-base leading-5">
                  Deposit Breakdown
                </div>
                <div className="w-full mt-[11px] rounded-md text-text_color_primary1 text-base font-normal border border-border_color_primary5 active:bg-bg_color_quaternary2 active:border-primary transition-all duration-300 ease-in-out py-3.5 px-3">
                  <div className="w-full mb-[11px] flex flex-col pb-[11px] gap-y-[11px] border-b border-border_color_primary5">
                    <div className="flex items-center w-full justify-between">
                      <span>Deposit Amount</span>
                      <span>₹{data?.deposit}</span>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <span>Bonus Amount</span>
                      <span>₹{data?.bonus}</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between font-semibold">
                    <span className="bg-bg_text_brand_primary text-transparent bg-clip-text">
                      Total Amount
                    </span>
                    <span className="bg-bg_text_brand_primary text-transparent bg-clip-text">
                      ₹{data?.totalAmount}
                    </span>
                  </div>
                </div>
                <div className="w-full mt-[11px] rounded-md text-text_color_primary1 text-base font-normal border border-border_color_primary5 active:bg-bg_color_quaternary2 active:border-primary transition-all duration-300 ease-in-out py-3 px-3">
                  <div className="flex items-center w-full justify-between">
                    <span>Amount credit main wallet</span>
                    <span>₹{data?.totalAmount}</span>
                  </div>
                </div>
              </div>
            )} */}

            <div className="sticky w-full bottom-0 pb-[10px] app-bg">
              <button
                onClick={handleShowBankAccount}
                disabled={!amount}
                type="submit"
                className="bg-bg_text_brand_primary flex items-center justify-center gap-x-2 w-full  h-10 text-base rounded-md font-[500] leading-4 disabled:opacity-70 relative"
              >
                <span>NEXT</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden">
        <h1>
          {Settings.siteTitle} Fast and Secure Payment Options for Betting
        </h1>
        <h2>
          Enjoy fast and secure payment options at {Settings.siteTitle}. Deposit
          funds easily and start betting on your favorite sports and casino
          games.
        </h2>
      </div>
      <div className="w-full pb-4 px-2" />
    </div>
  );
};

export default SelectAmount;
