import { useDispatch, useSelector } from "react-redux";
import {
  setGroup,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  Aura,
  Aviator,
  Cricket,
  Football,
  GreyhoundRacing,
  HorseRacing,
  LiveCasino,
  SlotGame,
  Tennis,
} from "../../../assets/Icon/SidebarIcon";
import { Settings } from "../../../api";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import { useState } from "react";
import toast from "react-hot-toast";
import WarningCondition from "../WarningCondition/WarningCondition";

const LeftDeskSidebar = () => {
  const { valueByLanguage } = useLanguage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);

  const handleSetGroup = (group) => {
    dispatch(setGroup(group));
    navigate("/");
  };

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      if (bonusToken) {
        return toast.error("Bonus wallet is available only on sports.");
      }
      if (Settings.casinoCurrency !== "AED") {
        navigate(`/casino/${name}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: name, gameId: id });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };
  return (
    <>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <aside
        title="Menu"
        id="leftDeskSideBar"
        className="hidden lg:flex p-2 overflow-y-auto z-10 w-[20%] sticky top-0 h-[calc(100vh-110px)]"
      >
        <ul className="flex border rounded-lg border-border_color_primary bg-bg_color_primary overflow-x-hidden flex-col w-full">
          <li
            onClick={() => handleSetGroup(4)}
            className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav"
          >
            <a
              title="Cricket"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
            >
              <Cricket />
              <span className="font-medium text-start text-text_color_primary1">
                {languageValue(valueByLanguage, LanguageKey.CRICKET)}
              </span>
            </a>
          </li>
          <li
            onClick={() => handleSetGroup(1)}
            className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav"
          >
            <a
              title="Football"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
            >
              <Football />
              <span className="font-medium text-start text-text_color_primary1">
                {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
              </span>
            </a>
          </li>

          <li
            onClick={() => handleSetGroup(2)}
            className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav"
          >
            <a
              title="Tennis"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
            >
              <Tennis />
              <span className="font-medium text-start text-text_color_primary1">
                {languageValue(valueByLanguage, LanguageKey.TENNIS)}
              </span>
            </a>
          </li>
          <li
            onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
            className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav"
          >
            <a
              title="Tennis"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="20"
                width="20"
                fill="currentColor"
              >
                <path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"></path>
              </svg>
              <span className="font-medium text-start text-text_color_primary1">
                Sportsbook
              </span>
            </a>
          </li>
          <li
            onClick={() => navigate("/horse-racing")}
            className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav"
          >
            <a
              title="Horse Racing"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
            >
              <HorseRacing />
              <span className="font-medium text-start text-text_color_primary1">
                {languageValue(valueByLanguage, LanguageKey.HORSE)}
              </span>
            </a>
          </li>
          <li
            onClick={() => navigate("/greyhound-racing")}
            className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav"
          >
            <a
              title="Greyhound Racing"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
            >
              <GreyhoundRacing />
              <span className="font-medium text-start text-text_color_primary1">
                {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
              </span>
            </a>
          </li>

          {Settings.auraWolf && (
            <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav">
              {" "}
              <Link
                title="Aura"
                className="flex w-full items-center h-full px-6 justify-start gap-3"
                to={`/wolf/auraWolf`}
              >
                <span className="text-text_headerDeskNav">
                  <Aura />
                </span>
                <span className="font-medium text-start text-text_color_primary1">
                  Aura
                </span>
              </Link>
            </li>
          )}
          {Settings.mac88 && (
            <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav">
              {" "}
              <Link
                title="Aura"
                className="flex w-full items-center h-full px-6 justify-start gap-3"
                to={`/mac88`}
              >
                <span className="text-text_headerDeskNav">
                  <Aura />
                </span>
                <span className="font-medium text-start text-text_color_primary1">
                  Mac88
                </span>
              </Link>
            </li>
          )}
          {Settings.liveCasinoWolf && (
            <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav">
              {" "}
              <Link
                title="Aura"
                className="flex w-full items-center h-full px-6 justify-start gap-3"
                to={`/wolf/liveCasinoWolf`}
              >
                <span className="text-text_headerDeskNav">
                  <Aura />
                </span>
                <span className="font-medium text-start text-text_color_primary1">
                  Live Casino Wolf
                </span>
              </Link>
            </li>
          )}
          {Settings.slotWolf && (
            <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav">
              {" "}
              <Link
                title="Aura"
                className="flex w-full items-center h-full px-6 justify-start gap-3"
                to={`/wolf/slotWolf`}
              >
                <span className="text-text_headerDeskNav">
                  <Aura />
                </span>
                <span className="font-medium text-start text-text_color_primary1">
                  Slot Wolf
                </span>
              </Link>
            </li>
          )}
          <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav">
            <Link
              title="Live Casino"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
              to="/live-casino"
            >
              <LiveCasino />
              <span className="font-medium text-start text-text_color_primary1">
                {languageValue(valueByLanguage, LanguageKey.LIVE_CASINO)}
              </span>
            </Link>
          </li>

          <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav">
            <Link
              title="Slot Games"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
              to="/slot-games"
            >
              <SlotGame />
              <span className="font-medium text-start text-text_color_primary1">
                {languageValue(valueByLanguage, LanguageKey.SLOTS)}
              </span>
            </Link>
          </li>
          <li
            onClick={() => handleNavigateToIFrame("EvolutionGaming", "201206")}
            className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav"
          >
            <a
              title="Aviator"
              className="flex w-full items-center h-full px-6 justify-start gap-3"
            >
              <Aviator />
              <span className="font-medium text-start text-text_color_primary1">
                Aviator
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default LeftDeskSidebar;
