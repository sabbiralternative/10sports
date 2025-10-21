import { useEffect, useState } from "react";
import DepositStatement from "./DepositStatement";
import WithdrawStatement from "./WithdrawStatement";
import { Settings } from "../../api";
import { useLocation } from "react-router-dom";

const DWReport = () => {
  const location = useLocation();
  const isDeposit = location.pathname.includes("deposit");
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
          const arrLength = isDeposit ? depositTab.length : withdrawTab.length;
          return (prev + 1) % arrLength;
        });
        setFade(true);
      }, 500); // fade out duration
    }, 10000); // 10s display time

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <div
      className="w-full lg:pt-2  h-full
     lg:w-[54%]"
    >
      <div className=" w-full h-full flex flex-col gap-y-2">
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
              {isDeposit ? depositTab[currentIndex] : withdrawTab[currentIndex]}
            </span>
          </div>
        )}

        {isDeposit ? <DepositStatement /> : <WithdrawStatement />}
      </div>
    </div>
  );
};

export default DWReport;
