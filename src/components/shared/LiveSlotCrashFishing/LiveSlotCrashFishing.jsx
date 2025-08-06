import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLiveCasinoLobby from "../../../hooks/liveCasinoLobby";
import { useEffect, useState } from "react";
import {
  setSelectedCategory,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import WarningCondition from "../WarningCondition/WarningCondition";

const LiveSlotCrashFishing = ({ casinoType }) => {
  const { token, bonusToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { selectedCategory } = useSelector((state) => state.global);
  const { data } = useLiveCasinoLobby(casinoType);
  const categories = data && Object.keys(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    setSearchQuery("");
    dispatch(setSelectedCategory(category));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredGames =
    data && selectedCategory && selectedCategory !== "ALL"
      ? { [selectedCategory]: data[selectedCategory] }
      : data;

  const getFilteredGamesByName = (games) =>
    games &&
    games?.filter((game) =>
      game?.game_name?.toLowerCase().includes(searchQuery)
    );

  const handleNavigate = (game) => {
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }
      if (Settings.casinoCurrency !== "AED") {
        navigate(
          `/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`
        );
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.game_name, gameId: game?.game_id });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }
  }, [error]);

  return (
    <>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="flex-1 overflow-y-auto show-scrollbar scroll-smooth flex flex-col h-full">
        {/*  */}
        <div onClick={() => navigate(-1)} className="flex flex-col  ">
          <div className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1  relative font-lato ">
            <div className="app-bg flex-row w-full h-full flex cursor-pointer items-center justify-center pt-2 pb-2 gap-x-1.5">
              <button className="w-7 rounded h-6 sm:h-7 sm:w-8 flex ml-[12px] items-center justify-center bg-bg_color_quaternary active:scale-[115%] transition-all duration-300 ease-in-out shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--bg-active-primary)"
                  ></path>
                </svg>
              </button>
              <div className=" w-full h-full capitalize ml-[4px] flex items-center text-text_color_primary1 font-bold text-[16px] leading-5">
                <div className="flex items-center ">
                  <div className="truncate">
                    <span>casino</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <main className="flex items-start h-full lg:h-max justify-start w-full h-full">
          <div
            className="w-full h-full
                         lg:w-full"
          >
            <div className=" w-full px-2">
              <div className="relative">
                <div className="absolute left-0 pl-2 h-full flex items-center justify-center pointer-events-none">
                  <svg
                    fill="#999"
                    className="h-5 w-5"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                  </svg>
                </div>
                <div className="px-[0.1rem] p-0.5 h-fit">
                  <input
                    value={searchQuery}
                    onChange={handleSearchChange}
                    id="default-search"
                    className="block w-full focus:outline-none rounded rounded-2 w-full p-2 pl-8 text-sm bg-bg_Quaternary text-text_Ternary"
                    placeholder="Search Games (Atleast 3 chars.....)"
                    autoComplete="off"
                    type="search"
                  />
                </div>
              </div>
              <div className="w-full overflow-x-auto no-scrollbar mt-1.5">
                <div className="flex gap-[6px] min-w-max">
                  <button
                    onClick={() => handleCategoryClick("ALL")}
                    className={`relative overflow-hidden  px-4 py-1.5 flex items-center justify-center border border-border_color_primary rounded-full text-text_color_primary2 whitespace-nowrap uppercase font-lato font-[700] text-xs ${
                      selectedCategory === "ALL"
                        ? "bg-bg_text_brand_primary text-primary"
                        : "bg-bg_color_primary"
                    }`}
                    type="button"
                  >
                    <span className="">All</span>
                  </button>
                  {categories?.map((category) => (
                    <button
                      onClick={() => handleCategoryClick(category)}
                      key={category}
                      className={`relative overflow-hidden  px-4 py-1.5 flex items-center justify-center border border-border_color_primary gap-1 rounded-full text-text_color_primary2 whitespace-nowrap uppercase font-lato font-[700] text-xs ${
                        selectedCategory === category
                          ? "bg-bg_text_brand_primary text-primary"
                          : "bg-bg_color_primary"
                      }`}
                      type="button"
                    >
                      <span className=" ">{category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full  md:pb-0">
              <div className=" bg-transparent w-full h-max pb-1 md:pb-0">
                <div className=" w-full  px-[6px]">
                  <div className="w-full pb-4 font-lato">
                    {data &&
                      Object.entries(filteredGames)?.map(
                        ([category, games], idx) => {
                          const filteredByName = getFilteredGamesByName(games); // Filter games by name

                          // If no games match the search, show a message
                          if (filteredByName.length === 0) return null;
                          return (
                            <div
                              key={idx}
                              className="flex flex-col w-full py-0.5 font-lato"
                            >
                              <div className="w-full overflow-hidden">
                                <div className="w-[100%] flex flex-row justify-between px-1">
                                  <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
                                    <div className="flex items-center gap-1.5 py-1">
                                      <span className="text-text_color_brand_secondary text-sm md:text-base font-medium font-extrabold">
                                        {category}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="pt-0 w-full h-max overflow-x-auto no-scrollbar flex  gap-1"
                                  style={{ scrollBehavior: "smooth" }}
                                >
                                  {filteredByName?.map((game, i) => (
                                    <div
                                      onClick={() => handleNavigate(game)}
                                      key={i}
                                      className="w-max h-max"
                                    >
                                      <div className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.75] object-cover rounded-md cursor-pointer">
                                        <img
                                          src={game?.url_thumb}
                                          alt="Auto-Roulette"
                                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                                          className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                                          title="Auto-Roulette"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LiveSlotCrashFishing;
