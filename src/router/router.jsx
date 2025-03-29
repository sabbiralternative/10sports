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
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
