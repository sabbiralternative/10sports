import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";

const PopularGames = ({ popularGames }) => {
  const [showSeeAll, setShowSeeAll] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
      <div title="Popular Games" className="px-[6px] w-full">
        <div className="flex flex-col w-full font-lato bg-bg_color_primary rounded-[10px] divide-y-[1px] divide-border_color_primary shadow-homeCasinoCardGamesShadow">
          <div className="w-[100%] flex flex-row justify-between px-3 py-1.5">
            <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
              <div className="flex items-center w-full gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={20}
                  height={20}
                  x={0}
                  y={0}
                  viewBox="0 0 511.643 511.643"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M453.209 184.081C373.725 121.725 300.804 41.437 270.565 6.713c-7.795-8.951-21.691-8.951-29.486 0-30.24 34.723-103.16 115.011-182.644 177.368C22.372 212.373 1.267 254.915 1.267 299.99c0 80 66.652 144.853 148.871 144.853 27.807 0 53.101-10.455 71.97-27.539v28.247c0 34.386-24.644 38.65-43.766 54.707-4.599 3.862-1.775 11.384 4.23 11.384h145.994c5.984 0 8.811-7.47 4.262-11.358-18.926-16.176-43.294-19.786-43.294-54.478v-28.503c18.869 17.084 44.163 27.539 71.97 27.539 82.219 0 148.871-64.853 148.871-144.853.001-45.074-21.104-87.616-57.166-115.908z"
                      fill="var(--bg-active-primary)"
                      opacity={1}
                    />
                  </g>
                </svg>
                <span className="text-text_color_primary1 font-semibold capitalize">
                  Popular Games
                </span>
              </div>
            </div>
            <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
              <button
                onClick={() => setShowSeeAll((prev) => !prev)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato bg-bg_text_brand_secondary text-transparent bg-clip-text font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200 cursor-pointer"
                type="button"
              >
                {showSeeAll ? "See Less" : "See All"}
              </button>
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
                  stroke="var(--bg-active-primary)"
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
                  stroke="var(--bg-active-primary)"
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
            title="Indian Card Games"
            className={`p-2.5 transition-all ease-in-out duration-200 w-full gap-1 overflow-x-auto scroll-smooth no-scrollbar grid ${
              showSeeAll
                ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
                : "grid-flow-col grid-rows-2"
            }`}
          >
            {popularGames?.map((game, idx) => {
              return (
                <div
                  onClick={() => handleNavigate(game)}
                  key={idx}
                  className={`${
                    showSeeAll
                      ? ""
                      : "min-w-[117px] w-[117px] sm:min-w-[140px] sm:w-[140px] md:min-w-[160px] md:w-[160px]  "
                  } 10 aspect-[0.75] rounded-md cursor-pointer overflow-hidden`}
                >
                  <div className="relative overflow-hidden w-full h-full object-cover">
                    <img
                      src={game?.url_thumb}
                      alt="Live Teenpatti"
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                      className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-all ease-in-out duration-200"
                      title="Live Teenpatti"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularGames;
