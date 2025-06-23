import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";
import WarningCondition from "../../components/shared/WarningCondition/WarningCondition";
import { Settings } from "../../api";

const GameProviderDetails = () => {
  const { game_name } = useParams();
  const { data: lotusLobby } = useLotusHomeLobby({ provider: game_name });
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const navigate = useNavigate();
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
      <div
        id="main-content-container"
        className="flex-1 overflow-y-auto scroll-smooth flex flex-col h-full min-h-0"
      >
        <main className="flex items-start app-bg h-full lg:h-max justify-start w-full h-full">
          <div
            className="w-full h-full
                  lg:w-full"
          >
            <div className="w-full  md:pb-0">
              <div className=" bg-transparent w-full h-max pb-1 md:pb-0">
                <div className=" w-full  px-[6px]">
                  <div className="app-bg flex-row w-full h-full flex  items-center justify-center cursor-pointer items-center justify-center  pb-2 gap-x-1.5">
                    <button className="w-7 rounded h-6 sm:h-7 sm:w-8 flex  items-center justify-center bg-bg_color_quaternary active:scale-[115%] transition-all duration-300 ease-in-out shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 7 12"
                        fill="none"
                      >
                        <path
                          d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                          fill="var(--bg-active-primary)"
                        />
                      </svg>
                    </button>
                    <div className="flex-1 h-full capitalize ml-[4px] flex items-center text-text_color_primary1 font-medium text-[16px] leading-5">
                      <div className="flex items-center  rounded-full px-2 py-1 w-/4">
                        <div className="truncate font-medium">
                          <span>Casino</span>
                          <span>/{game_name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-3 md:grid-cols-5  2xl:grid-cols-8 gap-1 mt-0 lg:mt-2">
                    {lotusLobby?.length > 0 &&
                      lotusLobby?.map((item) => {
                        return (
                          <div
                            onClick={() => handleNavigate(item)}
                            key={item?.game_id}
                            className="w-full h-max"
                          >
                            <div className="relative overflow-hidden w-full aspect-[0.75]  rounded-md cursor-pointer">
                              <img
                                src={item?.url_thumb}
                                alt="Lightning Storm"
                                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                                className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                                loading="lazy"
                                title="Lightning Storm - 10sports"
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="hidden">
                <h1>Play Live Casino Games | Best Online Casino</h1>
                <h2>
                  Play live casino games on 10sports. Enjoy classic games like
                  roulette, blackjack, and baccarat with top-notch online casino
                  games in India.
                </h2>
              </div>
              <div className="w-full px-2 pb-[45px] mt-2" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GameProviderDetails;
