import "./affiliate.css";

import BonusInformation from "../../components/modules/Affiliate/BonusInformation";
import InviteSection from "../../components/modules/Affiliate/InviteSection";
import TodayProfitLoss from "../../components/modules/Affiliate/TodayProfitLoss";
import TodayStatusSection from "../../components/modules/Affiliate/TodayStatusSection";
import TopFiveLossUser from "../../components/modules/Affiliate/TopFiveLossUser";

const Affiliate = () => {
  return (
    <div className="w-full h-full  lg:w-[54%] lg:pt-2">
      <div className="no-scrollbar h-full overflow-y-auto">
        <div className="px-2 w-full">
          <div className="main-content">
            <div data-v-4c49d924 className="container">
              <TodayStatusSection />
              <InviteSection />
              <TopFiveLossUser />
              <BonusInformation />
              <TodayProfitLoss />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
