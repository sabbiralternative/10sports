import { useDispatch } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";
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

const LeftDeskSidebar = () => {
  const { valueByLanguage } = useLanguage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetGroup = (group) => {
    dispatch(setGroup(group));
    navigate("/");
  };
  return (
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
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%] text-text_headerDeskNav">
          <Link
            title="Aviator"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
            to="/"
          >
            <Aviator />
            <span className="font-medium text-start text-text_color_primary1">
              Aviator
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftDeskSidebar;
