import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Settings } from "../../../api";
import { 
  setSelectedCategory,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const QuickButtons = () => {
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  const handleNavigateToIFrame = (name, id) => {
    if (token) {
      if (Settings.casino_currency !== "AED") {
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
    <div className="px-[2px] w-full">
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <Swiper
        slidesPerView="auto"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="flex flex-col items-center justify-start w-full scrollSmooth no-scrollbar">
          <div className="flex overflow-auto w-full scrollSmooth no-scrollbar">
            <SwiperSlide className="!w-[200px] md:!w-[300px] h-auto">
              <div title="QuickButtons-0" className="grid grid-row-2">
                <span
                  onClick={() =>
                    handleNavigateToIFrame("EvolutionGaming", 200296)
                  }
                  title="QuickButtons-4"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/evolution.avif")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/evolution1.svg"
                          alt="Evolution"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="Evolution"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        Evolution
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
                <span
                  onClick={() => handleNavigateToIFrame("aviator", 201206)}
                  title="QuickButtons-6"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/aviator.avif")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/aviator1.svg"
                          alt="Aviator"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="Aviator"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        Aviator
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[200px] md:!w-[300px] h-auto">
              <div title="QuickButtons-2" className="grid grid-row-2">
                <span
                  onClick={() => handleNavigate("/mac88")}
                  title="QuickButtons-2"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/aura.avif")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/aura1.svg"
                          alt="Aura"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="Aura"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        Mac88
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
                <span
                  onClick={() => handleNavigate("/live-casino")}
                  title="QuickButtons-3"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/casino.png")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/casino1.svg"
                          alt="Casino"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="Casino"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        Casino
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[200px] md:!w-[300px] h-auto">
              {" "}
              <div title="QuickButtons-4" className="grid grid-row-2">
                <span
                  onClick={() => handleNavigate("/slot-games")}
                  title="QuickButtons-0"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/slot.png")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/slot1.svg"
                          alt="Slot"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="Slot"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        Slot
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
                <span
                  onClick={() => {
                    navigate("/live-casino");
                    dispatch(setSelectedCategory("TABLE GAMES"));
                  }}
                  title="QuickButtons-5"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/limbo.png")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/limbo1.svg"
                          alt="LIMBO"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="LIMBO"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        Table Games
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[200px] md:!w-[300px] h-auto">
              {" "}
              <div title="QuickButtons-6" className="grid grid-row-2">
                <span
                  onClick={() => {
                    navigate("/live-casino");
                    dispatch(setSelectedCategory("CRASH GAMES"));
                  }}
                  title="QuickButtons-1"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/crashgames.png")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/crashgames1.svg"
                          alt="crash games"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="crash games"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        crash games
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
                <span
                  onClick={() => {
                    navigate("/live-casino");
                    dispatch(setSelectedCategory("GAME SHOW"));
                  }}
                  title="QuickButtons-7"
                  className="col-span-1 px-[3px] py-[3px]"
                >
                  <div
                    className="relative w-full active:scale-95 cursor-pointer  bg-bg_color_skeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                    style={{
                      backgroundImage: 'url("/towerlegend.png")',
                    }}
                  >
                    <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                      <div className="relative overflow-hidden   w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate flex justify-center items-center  ">
                        <img
                          src="/towerlegend1.png"
                          alt="Tower Legends"
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                          className="  w-[16px] h-[16px] object-contain"
                          loading="lazy"
                          title="Tower Legends"
                        />
                      </div>
                      <span className=" ml-2 autoAnimate text-text_color_primary2 text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                        Game Show
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] " />
                  </div>
                </span>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default QuickButtons;
