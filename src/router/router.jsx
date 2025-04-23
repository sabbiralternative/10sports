import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";
import HorseRacing from "../pages/HorseRacing/HorseRacing";
import GreyhoundRacing from "../pages/GreyhoundRacing/GreyhoundRacing";
import AuraSlotLiveCasino from "../pages/AuraSlotLiveCasino/AuraSlotLiveCasino";
import LiveCasino from "../pages/LiveCasino/LiveCasino";
import SlotGames from "../pages/SlotGames/SlotGames";
import IFrame from "../pages/IFrame/IFrame";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import StakeSetting from "../pages/StakeSetting/StakeSetting";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import BonusStatement from "../pages/BonusStatement/BonusStatement";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import SingleBettingProfitLoss from "../pages/SingleBettingProfitLoss/SingleBettingProfitLoss";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails";
import ResponsibleGambling from "../pages/ResponsibleGambling/ResponsibleGambling";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ExclusionPolicy from "../pages/ExclusionPolicy/ExclusionPolicy";
import Rules from "../pages/Rules/Rules";
import ReferralStatement from "../pages/ReferralStatement/ReferralStatement";
import NotFound from "../pages/NotFound/NotFound";
import OpenBets from "../pages/OpenBets/OpenBets";
import DWReport from "../pages/DWReport/DWReport";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <App />
        </>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/horse-racing",
          element: <HorseRacing />,
        },
        {
          path: "/greyhound-racing",
          element: <GreyhoundRacing />,
        },
        {
          path: "/wolf/:wolfType",
          element: <AuraSlotLiveCasino />,
        },
        {
          path: "/live-casino",
          element: <LiveCasino />,
        },
        {
          path: "/slot-games",
          element: <SlotGames />,
        },
        {
          path: "/:route/:name/:gameId",
          element: <IFrame />,
        },
        {
          path: "/account-statement",
          element: <AccountStatement />,
        },
        {
          path: "/referral-statement",
          element: <ReferralStatement />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/stake-setting",
          element: <StakeSetting />,
        },
        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/open-bets",
          element: <OpenBets />,
        },
        {
          path: "/transactions",
          element: <DWReport />,
        },
        {
          path: "/betting-profit-loss",
          element: <BettingProfitLoss />,
        },
        {
          path: "/betting-profit-loss/:marketId",
          element: <SingleBettingProfitLoss />,
        },
        {
          path: "/my-bank-details",
          element: <MyBankDetails />,
        },
        {
          path: "/responsible-gambling",
          element: <ResponsibleGambling />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/exclusion-policy",
          element: <ExclusionPolicy />,
        },
        {
          path: "/rules",
          element: <Rules />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
