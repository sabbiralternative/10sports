import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import {
  Aura,
  Cricket,
  Football,
  HorseRacing,
  LiveCasino,
  SlotGame,
  Tennis,
} from "../../../assets/Icon/SidebarIcon";
import { useLanguage } from "../../../context/LanguageProvider";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";

const HeaderBottomNavItem = () => {
  const { group } = useSelector((state) => state.global);
  const location = useLocation();
  const { valueByLanguage } = useLanguage();
  const dispatch = useDispatch();
  const handleSetGroup = (group) => {
    dispatch(setGroup(group));
  };
  return (
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
          {languageValue(valueByLanguage, LanguageKey.HOME)}
        </span>
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
      {Settings.auraWolf && (
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
          <span className="font font-lato text-[12px]  font-normal">Aura</span>
        </Link>
      )}
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
          <span className="font font-lato text-[12px]  font-normal">Mac88</span>
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
  );
};

export default HeaderBottomNavItem;
