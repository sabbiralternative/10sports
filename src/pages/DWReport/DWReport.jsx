import { useEffect, useState } from "react";
import DepositStatement from "./DepositStatement";
import WithdrawStatement from "./WithdrawStatement";
import { Settings } from "../../api";

const DWReport = () => {
  const [tab, setTab] = useState("deposit");
  const depositTab = [
    'If you face any issue with your deposit, click the "Report Issue" button next to your deposit details to let us know.',
    "यदि आपकी जमा राशि में कोई समस्या आती है, तो हमें बताने के लिए अपनी डिपॉज़िट विवरण के पास दिए गए Report Issue बटन पर क्लिक करें",
  ];
  const withdrawTab = [
    'If you face any issue with your withdraw, click the "Report Issue" button next to your withdraw details to let us know.',
    "यदि आपको अपने निकासी (Withdrawal) में कोई समस्या आती है, तो हमें बताने के लिए अपनी निकासी विवरण के पास दिए गए  Report Issue बटन पर क्लिक करें",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => {
          const arrLength =
            tab === "deposit" ? depositTab.length : withdrawTab.length;
          return (prev + 1) % arrLength;
        });
        setFade(true);
      }, 500); // fade out duration
    }, 10000); // 10s display time

    return () => clearInterval(interval);
  }, [tab]);

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
                  className={`text-text_color_primary2  text-sm  rounded-md    border-border_color_primary1 px-[25px] py-2  text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10  ${
                    tab === "deposit"
                      ? "bg-bg_text_brand_primary text-primary"
                      : "border"
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
                  className={`text-text_color_primary2  text-sm  rounded-md    border-border_color_primary1 px-[25px] py-2  text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10  ${
                    tab === "withdraw"
                      ? "bg-bg_text_brand_primary text-primary"
                      : "border"
                  }`}
                >
                  Withdraw
                </span>
              </div>
              {/* <div
                className={`absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-bg_text_brand_primary text-sm bg-bg_text_brand_primary  rounded-md lg:h-[36px] ${
                  tab === "deposit"
                    ? "-left-0.5 lg:left-1"
                    : "left-[108px] lg:left-[115px]"
                }`}
                style={{
                  width: tab === "deposit" ? "90px" : "110px",
                  // top: "1px",
                }}
              /> */}
            </div>
          </div>
        </div>
        {Settings.complaint && (
          <div
            className="text-start bg-bg_color_primary px-2.5 py-1 text-text_color_primary1 rounded text-[12px] shadow-sm mx-2 flex items-center gap-2 transition-opacity duration-500"
            style={{
              opacity: fade ? 1 : 0,
            }}
          >
            <img
              style={{ height: "15px" }}
              src="/icon/info-icon-svgrepo-com.svg"
              alt=""
            />
            <span className="font-medium">
              {tab === "deposit"
                ? depositTab[currentIndex]
                : withdrawTab[currentIndex]}
            </span>
          </div>
        )}

        {tab === "deposit" ? <DepositStatement /> : <WithdrawStatement />}
      </div>
    </div>
  );
};

export default DWReport;
