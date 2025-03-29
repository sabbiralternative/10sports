import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
0;
import toast from "react-hot-toast";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";

/* eslint-disable react/no-unknown-property */
const TrendingCasino = ({ trendingGames }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState();
  const categories = trendingGames && Object.keys(trendingGames);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredGames =
    selectedCategory && trendingGames
      ? trendingGames[selectedCategory]
      : trendingGames;

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
    if (trendingGames) {
      const [firstCategory] = Object.keys(trendingGames);
      setSelectedCategory(firstCategory);
    }
  }, [trendingGames]);

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
      <div title="Originals & Trending Casino" className="px-[6px] w-full">
        <div className="flex flex-col bg-bg_color_primary rounded-[10px] w-full h-full divide-y divide-border_color_primary">
          <div className="w-[100%] flex flex-row justify-between px-0.5 pr-1">
            <div className="max-w-[83%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
              <div className="flex items-center w-full justify-start overflow-scroll no-scrollbar scroll-smooth">
                {categories?.map((category) => (
                  <div
                    onClick={() => handleSelectCategory(category)}
                    key={category}
                    className="flex items-center justify-start py-1.5 px-2 rounded-t-[6px] h-full relative"
                  >
                    <span
                      className={`text-sm capitalize whitespace-nowrap w-full text-center    font-normal  ${
                        selectedCategory === category
                          ? "bg-bg_text_brand_secondary bg-clip-text text-transparent"
                          : "text-text_color_primary"
                      }`}
                    >
                      {category}
                    </span>
                    {selectedCategory === category && (
                      <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] rounded bg-bg_text_brand_secondary" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
              <button
                onClick={() => scrollToLeft(ref)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] justify-center items-center bg-bg_color_quaternary rounded cursor-pointer"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="var(--icon-color-brand-secondary)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              </button>
              <button
                onClick={() => scrollToRight(ref)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] justify-center items-center bg-bg_color_quaternary rounded cursor-pointer"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="var(--icon-color-brand-secondary)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>
          <div
            ref={ref}
            className="flex overflow-x-scroll no-scrollbar scroll-smooth gap-x-1 p-2.5"
          >
            {trendingGames &&
              filteredGames?.length > 0 &&
              filteredGames?.map((game, idx) => {
                return (
                  <div
                    onClick={() => handleNavigate(game)}
                    key={idx}
                    className="relative overflow-hidden min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px] aspect-[0.8640] object-cover cursor-pointer overflow-hidden rounded-md"
                  >
                    <img
                      src={game?.url_thumb}
                      alt="Aviator - 10Sports"
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                      className="w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105"
                      title={game?.game_name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCasino;
