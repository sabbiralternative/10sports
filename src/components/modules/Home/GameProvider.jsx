import { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Settings } from "../../../api";
// import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
// import toast from "react-hot-toast";
// import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { scrollToLeft, scrollToRight } from "../../../utils/scroll";

const GameProvider = ({ casinoProviders }) => {
  const [showSeeAll, setShowSeeAll] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  // const [showWarning, setShowWarning] = useState(false);
  // const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  // const { token, bonusToken } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const handleNavigate = (game) => {
    navigate(`/game-provider/${game?.game_name}/${game?.game_id}`);
    // if (token) {
    //   if (bonusToken) {
    //     return setError("Bonus wallet is available only on sports.");
    //   }
    //   if (Settings.casino_currency !== "AED") {
    //     navigate(
    //       `/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`
    //     );
    //   } else {
    //     setGameInfo({ gameName: "", gameId: "" });
    //     setGameInfo({ gameName: game?.game_name, gameId: game?.game_id });
    //     setShowWarning(true);
    //   }
    // } else {
    //   dispatch(setShowLoginModal(true));
    // }
  };

  // useEffect(() => {
  //   if (error) {
  //     return toast.error(error);
  //   }
  // }, [error]);
  const sortedData =
    casinoProviders &&
    casinoProviders?.length > 0 &&
    casinoProviders?.sort((a, b) => a.sort - b.sort);

  return (
    <>
      {/* {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )} */}
      <div title="Game Providers" className="px-[6px] w-full">
        <div className="bg-bg_color_primary rounded-[10px] flex flex-col divide-y divide-divide_color_primary">
          <div className="w-[100%] flex flex-row justify-between px-3 py-1.5">
            <div className="max-w-[85%] text-text_color_primary1 font-semibold capitalize cursor-pointer">
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_140_6590)">
                    <path
                      d="M13.9436 6.83181C13.8951 6.77099 13.8362 6.78294 13.8054 6.79535C13.7796 6.80583 13.7204 6.8393 13.7285 6.92318C13.7384 7.0239 13.7439 7.12659 13.745 7.22844C13.7494 7.65095 13.5799 8.06488 13.28 8.36409C12.982 8.66138 12.5901 8.82155 12.1728 8.81691C11.6028 8.80963 11.13 8.51231 10.8055 7.95709C10.5372 7.49798 10.6552 6.90585 10.78 6.27891C10.853 5.91195 10.9286 5.53247 10.9286 5.17131C10.9286 2.3592 9.0381 0.736805 7.91121 0.0200039C7.8879 0.00520312 7.86571 0 7.84606 0C7.8141 0 7.78879 0.0137812 7.77631 0.0222187C7.75212 0.0386016 7.71342 0.0759375 7.72586 0.142031C8.1566 2.42937 6.87185 3.80507 5.51165 5.26152C4.10962 6.7628 2.52052 8.46439 2.52052 11.5333C2.52052 15.0991 5.42151 18.0001 8.98734 18.0001C11.9233 18.0001 14.5119 15.9531 15.2822 13.0223C15.8075 11.0239 15.2571 8.47832 13.9436 6.83181ZM9.14867 16.6197C8.25577 16.6604 7.40661 16.3402 6.75801 15.72C6.11637 15.1065 5.74836 14.2503 5.74836 13.3709C5.74836 11.7206 6.37934 10.5091 8.07648 8.90079C8.10425 8.87446 8.13269 8.86613 8.15748 8.86613C8.17994 8.86613 8.19942 8.87298 8.21281 8.87941C8.24104 8.89302 8.28745 8.9267 8.28119 8.99954C8.22051 9.70566 8.22157 10.2917 8.28428 10.7416C8.4446 11.8907 9.28578 12.6628 10.3776 12.6628C10.9128 12.6628 11.4227 12.4613 11.8133 12.0955C11.8586 12.053 11.9092 12.0585 11.9286 12.0626C11.9543 12.0681 11.9887 12.0839 12.0068 12.1274C12.1687 12.5183 12.2515 12.9334 12.2527 13.3608C12.2579 15.0808 10.8654 16.5428 9.14867 16.6197Z"
                      fill="var(--bg-active-primary)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_140_6590">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base text-text_color_primary1 font-extrabold font-medium font-extrabold">
                  Game Providers
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
            className={`w-full p-2.5 gap-y-2 gap-x-2 grid ${
              !showSeeAll
                ? "grid-rows-3 grid-flow-col sm:grid-cols-3 overflow-x-auto no-scrollbar scroll-smooth"
                : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
            }   `}
          >
            {sortedData?.map((game, idx) => {
              return (
                <div
                  onClick={() => handleNavigate(game)}
                  key={idx}
                  className={`relative overflow-hidden aspect-[2.27] rounded-md inline-block active:scale-95 transition-all duration-100 ease-in-out bg-bg_color_casinoProvider shadow-md flex flex-col items-center justify-center ${
                    !showSeeAll ? "min-w-[124px] md:min-w-[150px]" : ""
                  }`}
                >
                  <img
                    src={game?.url_thumb}
                    alt="Evolution Gaming"
                    className={`[@supports(-webkit-touch-callout:none)]:h-full object-contain max-h-[80%] w-[80%] `}
                    title="Evolution Gaming"
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

export default GameProvider;
