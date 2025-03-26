import { useDispatch } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { useNavigate } from "react-router-dom";
import {
  Aviator,
  BlogNews,
  Cricket,
  Election,
  Football,
  GreyhoundRacing,
  HorseRacing,
  IndiaCardGame,
  LiveCasino,
  SlotGame,
  SportsBook,
  Tennis,
} from "../../../assets/Icon/SidebarIcon";

const LeftDeskSidebar = () => {
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
          className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]"
        >
          <a
            title="Cricket"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
          >
            <Cricket />
            <span className="font-medium text-start text-text_color_primary1">
              Cricket
            </span>
          </a>
        </li>
        <li
          onClick={() => handleSetGroup(1)}
          className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]"
        >
          <a
            title="Football"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
          >
            <Football />
            <span className="font-medium text-start text-text_color_primary1">
              Football
            </span>
          </a>
        </li>
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]">
          <a
            title="Election"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
          >
            <Election />
            <span className="font-medium text-start text-text_color_primary1">
              Election
            </span>
          </a>
        </li>
        <li
          onClick={() => handleSetGroup(2)}
          className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]"
        >
          <a
            title="Tennis"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
          >
            <Tennis />
            <span className="font-medium text-start text-text_color_primary1">
              Tennis
            </span>
          </a>
        </li>
        <li
          onClick={() => navigate("/horse-racing")}
          className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]"
        >
          <a
            title="Horse Racing"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
          >
            <HorseRacing />
            <span className="font-medium text-start text-text_color_primary1">
              Horse Racing
            </span>
          </a>
        </li>
        <li
          onClick={() => navigate("/greyhound-racing")}
          className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]"
        >
          <a
            title="Greyhound Racing"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
          >
            <GreyhoundRacing />
            <span className="font-medium text-start text-text_color_primary1">
              Greyhound Racing
            </span>
          </a>
        </li>
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]">
          <a
            title="Indian Card Games"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
            href
          >
            <IndiaCardGame />
            <span className="font-medium text-start text-text_color_primary1">
              Indian Card Games
            </span>
          </a>
        </li>
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]">
          <a
            title="Sportsbook"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
            href="/sportsbook"
          >
            <SportsBook />
            <span className="font-medium text-start text-text_color_primary1">
              Sportsbook
            </span>
          </a>
        </li>
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]">
          <a
            title="Live Casino"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
            href="casino"
          >
            <LiveCasino />
            <span className="font-medium text-start text-text_color_primary1">
              Live Casino
            </span>
          </a>
        </li>
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]">
          <a
            title="Aviator"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
            href="aviator"
          >
            <Aviator />
            <span className="font-medium text-start text-text_color_primary1">
              Aviator
            </span>
          </a>
        </li>
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]">
          <a
            title="Slot Games"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
            href="/slot-games"
          >
            <SlotGame />
            <span className="font-medium text-start text-text_color_primary1">
              Slot Games
            </span>
          </a>
        </li>
        <li className="text-sm cursor-pointer py-4 text-nowrap whitespace-nowrap autoAnimate font-semibold w-full border-b border-border_color_primary hover:bg-bg_MenuHoverColor hover:scale-[102%]">
          <a
            title="Blogs & News"
            className="flex w-full items-center h-full px-6 justify-start gap-3"
            href="/blogs"
          >
            <BlogNews />
            <span className="font-medium text-start text-text_color_primary1">
              Blogs &amp; News
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default LeftDeskSidebar;
