import { useEffect, useState } from "react";
import OpenBet from "./OpenBet";
import BetSlip from "./BetSlip";
import { useSelector } from "react-redux";

const RightDeskSidebar = () => {
  const { placeBetValues } = useSelector((state) => state.event);
  const [tab, setTab] = useState("openBet");

  useEffect(() => {
    if (placeBetValues) {
      setTab("betSlip");
    }
  }, [placeBetValues]);
  return (
    <aside
      title="Menu 2"
      id="rightDeskSideBar"
      className="hidden lg:flex p-2 overflow-y-auto z-10 w-[26%] sticky top-0 h-[calc(100vh-110px)]"
    >
      <div className="flex p-2 overflow-x-hidden relative no-scrollbar border flex-col w-full rounded-lg bg-bg_color_primary border-border_color_primary">
        <div className="w-full flex flex-col gap-y-1 py-2">
          <div className="w-full flex items-center gap-1">
            <div className="flex gap-1 w-3/4 rounded-lg p-0.5 border border-border_color_primary">
              <button
                onClick={() => setTab("betSlip")}
                className={`text-xs w-full capitalize whitespace-nowrap rounded p-2  ${
                  tab === "betSlip"
                    ? "bg-bg_brand_secondary text-primary"
                    : "bg-bg_color_primary text-text_color_primary1"
                }`}
              >
                Betslip
              </button>
              <button
                onClick={() => setTab("openBet")}
                className={`text-xs w-full capitalize whitespace-nowrap rounded p-2  ${
                  tab === "openBet"
                    ? "bg-bg_brand_secondary text-primary"
                    : "bg-bg_color_primary text-text_color_primary1"
                }`}
              >
                Open Bets
              </button>
            </div>
          </div>
          {tab === "openBet" ? <OpenBet /> : <BetSlip />}
        </div>
      </div>
    </aside>
  );
};

export default RightDeskSidebar;
