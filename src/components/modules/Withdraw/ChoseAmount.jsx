import useWithdrawBreakdown from "../../../hooks/withdrawBreakdown";

const ChooseAmount = ({ setTab, setAmount, amount }) => {
  const { data } = useWithdrawBreakdown();

  const handleShowBank = () => {
    if (amount < data?.minimumWithdraw || amount > data?.mainWallet) {
      return;
    } else {
      setTab("bank");
    }
  };
  return (
    <div className="w-full h-full  lg:w-[54%] lg:pt-2">
      <div className="px-2 font-lato flex flex-col items-start justify-start gap-y-2 mt-1 md:mt-[0px] pb-10">
        <div className="text-base text-text_color_primary1  w-full font-[700] flex flex-col items-start justify-start gap-y-1">
          <span className="text-sm md:text-base">
            Please fill in all required fields*
          </span>
        </div>
        <div className="rounded-lg bg-bg_color_primary text-text_color_primary1 py-2 px-3.5 flex flex-col items-start justify-start w-full gap-y-0.5">
          <div className="w-full flex items-start justify-start gap-y-[0.5] flex-col">
            <span className="text-sm mt-1 bg-bg_text_brand_primary rounded  shadow-md text-primary px-2 py-1 my-1">
              Available to withdrawal : ₹ {data?.mainWallet}
            </span>
            <div className="flex flex-col w-full">
              <div className="ml-1 text-sm">
                Amount <span className="text-text_color_danger">*</span>
              </div>
              <div
                className={`flex items-center w-full bg-bg_color_input_bg w-full py-2 px-2 rounded-lg border  ${
                  !amount ||
                  amount < data?.minimumWithdraw ||
                  amount > data?.mainWallet
                    ? "border-border_color_danger focus-within:border-border_color_danger"
                    : "border-border_color_success focus-within:border-border_color_success"
                }`}
              >
                <div className="flex-shrink-0 w-max">₹</div>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-sm px-1 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                  placeholder="Enter Amount"
                  inputMode="numeric"
                  aria-label="Amount"
                  id="amount"
                  type="number"
                  value={amount}
                />
                <div className="flex-shrink-0 w-max">
                  Minimum {data?.minimumWithdraw}
                </div>
              </div>
              <div className="flex items-start w-full justify-between leading-normal px-1">
                <div className="w-max min-h-[18px] h-max" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center gap-x-2">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full bg-bg_color_quaternary4"
              htmlFor="blue"
            >
              <input
                className="before:content[''] before:bg-bg_color_quaternary8 rounded-md peer relative cursor-pointer appearance-none border border-undefined transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-undefined checked:bg-bg_color_success hover:before:opacity-10 h-5 w-5"
                id="blue"
                type="checkbox"
                defaultChecked
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-text_color_primary2 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </label>
          </div>
          <span className="text-sm text-text_color_primary1 font-[400] leading-5">
            I have read and agree with{" "}
            <span className="underline text-sm bg-bg_text_brand_primary bg-clip-text text-transparent font-[400] leading-4 cursor-pointer">
              the terms of payment and withdrawal policy.
            </span>
          </span>
        </div>
        <div className="w-full sticky bottom-0 left-0 pb-2 app-bg pt-2">
          <button
            onClick={handleShowBank}
            disabled={
              !amount ||
              amount < data?.minimumWithdraw ||
              amount > data?.mainWallet
                ? true
                : false
            }
            className="relative overflow-hidden bg-bg_text_brand_primary w-full text-text_color_primary2 h-10 text-base shadow-lg rounded-md font-[900] leading-4 disabled:opacity-70 flex gap-x-1 items-center justify-center text-primary"
            type="button"
          >
            <span>Submit</span>
          </button>
        </div>
      </div>
      <div className="w-full pb-4 px-2" />
    </div>
  );
};

export default ChooseAmount;
