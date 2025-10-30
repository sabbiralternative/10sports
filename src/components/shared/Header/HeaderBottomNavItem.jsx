import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  setGroup,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import {
  Aura,
  Cricket,
  Football,
  HorseRacing,
  KABBADI,
  LiveCasino,
  SlotGame,
  Tennis,
} from "../../../assets/Icon/SidebarIcon";
import { useLanguage } from "../../../context/LanguageProvider";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";
import { useState } from "react";
import WarningCondition from "../WarningCondition/WarningCondition";
import { AiFillHome } from "react-icons/ai";

const HeaderBottomNavItem = () => {
  const { group } = useSelector((state) => state.global);
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const { valueByLanguage } = useLanguage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSetGroup = (group) => {
    dispatch(setGroup(group));
  };

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
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
      <div className="flex w-full overflow-x-auto bg-bg_headerDeskNavMenu no-scrollbar py-[5px] px-3 items-start md:items-center md:justify-center">
        <Link
          onClick={() => handleSetGroup(0)}
          title="Home"
          className={`cursor-pointer uppercase min-h-[28px]  min-w-[80px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm
        ${
          location.pathname === "/" && group === 0
            ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
            : "text-text_headerDeskNav"
        }`}
          to="/"
        >
          <span className="">
            <AiFillHome size={17} />
          </span>
          <span className="font font-lato text-[12px]  font-semibold">
            {languageValue(valueByLanguage, LanguageKey.HOME)}
          </span>
        </Link>
        <Link
          title="Home"
          className={`cursor-pointer uppercase min-h-[28px]  min-w-[140px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm
        ${
          location.pathname === "/event-details/4/1759935118"
            ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
            : "text-text_headerDeskNav"
        }`}
          to="/event-details/4/1759935118"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clipPath="url(#clip0_145_9104)">
                <path
                  d="M11.4 0.6H9.6V0H2.4V0.6H0.6C0.24 0.6 0 0.84 0 1.2V2.64C0 4.02 1.02 5.16 2.4 5.34V5.4C2.4 7.14 3.6 8.58 5.22 8.94L4.8 10.2H3.42C3.18 10.2 2.94 10.38 2.88 10.62L2.4 12H9.6L9.12 10.62C9.06 10.38 8.82 10.2 8.58 10.2H7.2L6.78 8.94C8.4 8.58 9.6 7.14 9.6 5.4V5.34C10.98 5.16 12 4.02 12 2.64V1.2C12 0.84 11.76 0.6 11.4 0.6ZM2.4 4.14C1.74 3.96 1.2 3.36 1.2 2.64V1.8H2.4V4.14ZM7.2 6L6 5.34L4.8 6L5.1 4.8L4.2 3.6H5.46L6 2.4L6.54 3.6H7.8L6.9 4.8L7.2 6ZM10.8 2.64C10.8 3.36 10.26 4.02 9.6 4.14V1.8H10.8V2.64Z"
                  fill="url(#paint0_linear_145_9104)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_145_9104"
                  x1="-1.12"
                  y1="-3.85125e-08"
                  x2="14.2675"
                  y2="1.30581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="currentColor"></stop>
                  <stop offset="1" stopColor="currentColor"></stop>
                </linearGradient>
                <clipPath id="clip0_145_9104">
                  <rect width="12" height="12" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="font font-lato text-[12px]  font-semibold">
            Bihar Election
          </span>
        </Link>
        <Link
          title="Home"
          className={`cursor-pointer uppercase min-h-[28px]  min-w-[100px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm
        ${
          location.pathname === "/event-details/4/34644908"
            ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
            : "text-text_headerDeskNav"
        }`}
          to="/event-details/4/34644908"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clipPath="url(#clip0_145_9104)">
                <path
                  d="M11.4 0.6H9.6V0H2.4V0.6H0.6C0.24 0.6 0 0.84 0 1.2V2.64C0 4.02 1.02 5.16 2.4 5.34V5.4C2.4 7.14 3.6 8.58 5.22 8.94L4.8 10.2H3.42C3.18 10.2 2.94 10.38 2.88 10.62L2.4 12H9.6L9.12 10.62C9.06 10.38 8.82 10.2 8.58 10.2H7.2L6.78 8.94C8.4 8.58 9.6 7.14 9.6 5.4V5.34C10.98 5.16 12 4.02 12 2.64V1.2C12 0.84 11.76 0.6 11.4 0.6ZM2.4 4.14C1.74 3.96 1.2 3.36 1.2 2.64V1.8H2.4V4.14ZM7.2 6L6 5.34L4.8 6L5.1 4.8L4.2 3.6H5.46L6 2.4L6.54 3.6H7.8L6.9 4.8L7.2 6ZM10.8 2.64C10.8 3.36 10.26 4.02 9.6 4.14V1.8H10.8V2.64Z"
                  fill="url(#paint0_linear_145_9104)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_145_9104"
                  x1="-1.12"
                  y1="-3.85125e-08"
                  x2="14.2675"
                  y2="1.30581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="currentColor"></stop>
                  <stop offset="1" stopColor="currentColor"></stop>
                </linearGradient>
                <clipPath id="clip0_145_9104">
                  <rect width="12" height="12" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="font font-lato text-[12px]  font-semibold">WWC</span>
        </Link>
        <Link
          title="Home"
          className={`cursor-pointer uppercase min-h-[28px]  min-w-[80px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm
        ${
          location.pathname === "/event-details/5/1756414503"
            ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
            : "text-text_headerDeskNav"
        }`}
          to="/event-details/5/1756414503"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clipPath="url(#clip0_145_9104)">
                <path
                  d="M11.4 0.6H9.6V0H2.4V0.6H0.6C0.24 0.6 0 0.84 0 1.2V2.64C0 4.02 1.02 5.16 2.4 5.34V5.4C2.4 7.14 3.6 8.58 5.22 8.94L4.8 10.2H3.42C3.18 10.2 2.94 10.38 2.88 10.62L2.4 12H9.6L9.12 10.62C9.06 10.38 8.82 10.2 8.58 10.2H7.2L6.78 8.94C8.4 8.58 9.6 7.14 9.6 5.4V5.34C10.98 5.16 12 4.02 12 2.64V1.2C12 0.84 11.76 0.6 11.4 0.6ZM2.4 4.14C1.74 3.96 1.2 3.36 1.2 2.64V1.8H2.4V4.14ZM7.2 6L6 5.34L4.8 6L5.1 4.8L4.2 3.6H5.46L6 2.4L6.54 3.6H7.8L6.9 4.8L7.2 6ZM10.8 2.64C10.8 3.36 10.26 4.02 9.6 4.14V1.8H10.8V2.64Z"
                  fill="url(#paint0_linear_145_9104)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_145_9104"
                  x1="-1.12"
                  y1="-3.85125e-08"
                  x2="14.2675"
                  y2="1.30581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="currentColor"></stop>
                  <stop offset="1" stopColor="currentColor"></stop>
                </linearGradient>
                <clipPath id="clip0_145_9104">
                  <rect width="12" height="12" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="font font-lato text-[12px]  font-semibold">PKL</span>
        </Link>
        <Link
          onClick={() => handleSetGroup(4)}
          title="Cricket"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[100px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/" && group === 4
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/"
        >
          <span>
            <Cricket height={16} width={16} />
          </span>
          <span className="font font-lato text-[12px]  font-normal">
            {languageValue(valueByLanguage, LanguageKey.CRICKET)}
          </span>
        </Link>
        <Link
          onClick={() => handleSetGroup(1)}
          title="Football"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[100px] px-[9px] flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/" && group === 1
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/"
        >
          <span>
            <Football height={16} width={16} />
          </span>
          <span className="font font-lato text-[12px] font-normal">
            {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
          </span>
        </Link>
        <Link
          onClick={() => handleSetGroup(2)}
          title="Tennis"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/" && group === 2
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/"
        >
          <span>
            <Tennis height={16} width={16} />
          </span>
          <span className="font font-lato text-[12px]  font-normal">
            {languageValue(valueByLanguage, LanguageKey.TENNIS)}
          </span>
        </Link>
        <a
          onClick={() => handleNavigateToIFrame("sportsbook", "550000")}
          title="Tennis"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[120px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs text-text_headerDeskNav `}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="20"
              width="20"
              fill="currentColor"
            >
              <path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"></path>
            </svg>
          </span>
          <span className="font font-lato text-[12px]  font-normal">
            Sportsbook
          </span>
        </a>
        <Link
          onClick={() => handleSetGroup(5)}
          title="Tennis"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/" && group === 5
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/"
        >
          <span>
            <KABBADI />
          </span>
          <span className="font font-lato text-[12px]  font-normal">
            {languageValue(valueByLanguage, LanguageKey.KABADDI)}
          </span>
        </Link>
        <Link
          title="Horse Racing"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px] flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/horse-racing"
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/horse-racing"
        >
          <span>
            <HorseRacing height={16} width={16} />
          </span>
          <span className="font font-lato text-[12px]  font-normal">
            {languageValue(valueByLanguage, LanguageKey.HORSE)}
          </span>
        </Link>
        <Link
          title="Greyhound Racing"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[120px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/greyhound-racing"
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/greyhound-racing"
        >
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 21 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.44232 8.90395C5.88416 8.90395 5.70714 16.1059 6.2631 20C6.2631 20 4.03942 19.4435 2.37117 18.3309C0.702907 17.2183 0.147685 15.5494 0.147685 15.5494C-0.741855 11.0991 2.77077 6.49335 4.43866 4.45361L6.31223 6.32907C5.08824 4.93769 3.77795 1.77694 4.99462 0.559553C6.32893 -0.775551 8.88636 0.559553 9.04291 1.64232C10.5542 1.11585 12.5557 1.89466 13.89 2.78473C15.5579 3.89731 16.6698 3.89731 20.0056 5.0099C17.2258 8.90395 13.89 8.90395 9.44232 8.90395Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span className="font font-lato text-[12px] font-normal">
            {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
          </span>
        </Link>
        {/* aura slot live casino */}
        {/* {Settings.auraWolf && (
          <Link
            title="Aura"
            className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px] flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
              location.pathname === "/wolf/auraWolf"
                ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
                : "text-text_headerDeskNav"
            }`}
            to={`/wolf/auraWolf`}
          >
            <span>
              <Aura height={16} width={16} />
            </span>
            <span className="font font-lato text-[12px]  font-normal">
              Aura
            </span>
          </Link>
        )} */}
        {Settings.mac88 && (
          <Link
            className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px] flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
              location.pathname === "/mac88"
                ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
                : "text-text_headerDeskNav"
            }`}
            to={`/mac88`}
          >
            <span>
              <Aura height={16} width={16} />
            </span>
            <span className="font font-lato text-[12px]  font-normal">
              Mac88
            </span>
          </Link>
        )}
        {Settings.liveCasinoWolf && (
          <Link
            title="Aura"
            className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
              location.pathname === "/wolf/liveCasinoWolf"
                ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
                : "text-text_headerDeskNav"
            }`}
            to={`/wolf/liveCasinoWolf`}
          >
            <span>
              <Aura height={16} width={16} />
            </span>
            <span className="font font-lato text-[12px] font-normal">
              Live Casino Wolf
            </span>
          </Link>
        )}
        {Settings.slotWolf && (
          <Link
            title="Aura"
            className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
              location.pathname === "/wolf/slotWolf"
                ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
                : "text-text_headerDeskNav"
            }`}
            to={`/wolf/slotWolf`}
          >
            <span>
              <Aura height={16} width={16} />
            </span>
            <span className="font font-lato text-[12px] font-normal">
              Slot Wolf
            </span>
          </Link>
        )}

        <Link
          title="Live Casino"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[120px] px-[9px]  flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/live-casino"
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/live-casino"
        >
          <span>
            <LiveCasino height={16} width={16} />
          </span>
          <span className="font font-lato text-[12px] font-normal">
            {languageValue(valueByLanguage, LanguageKey.LIVE_CASINO)}
          </span>
        </Link>
        <Link
          title="Slots"
          className={`cursor-pointer uppercase min-h-[28px] text-nowrap whitespace-nowrap  min-w-[80px] px-[9px] flex items-center justify-center gap-x-1 py-1 rounded-md text-sm text-xs ${
            location.pathname === "/slot-games"
              ? " bg-bg_headerDeskNavmenuEle text-text_brand_primary"
              : "text-text_headerDeskNav"
          }`}
          to="/slot-games"
        >
          <span>
            <SlotGame height={16} width={16} />
          </span>
          <span className="font font-lato text-[12px]  font-normal">
            {languageValue(valueByLanguage, LanguageKey.SLOTS)}
          </span>
        </Link>
      </div>
    </>
  );
};

export default HeaderBottomNavItem;
