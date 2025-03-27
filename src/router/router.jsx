import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import EventDetails from "../pages/EventDetails/EventDetails";
import HorseRacing from "../pages/HorseRacing/HorseRacing";
import GreyhoundRacing from "../pages/GreyhoundRacing/GreyhoundRacing";
import AuraSlotLiveCasino from "../pages/AuraSlotLiveCasino/AuraSlotLiveCasino";
import LiveCasino from "../pages/LiveCasino/LiveCasino";
import SlotGames from "../pages/SlotGames/SlotGames";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <App />
        </PrivateRoute>
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
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
