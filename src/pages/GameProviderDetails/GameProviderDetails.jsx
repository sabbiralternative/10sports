import { useParams } from "react-router-dom";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";

const GameProviderDetails = () => {
  const { game_name } = useParams();
  const { data: lotusLobby } = useLotusHomeLobby({ provider: game_name });
  //   console.log(lotusLobby);
  //   console.log(game_name);
  return (
    <div
      id="main-content-container"
      className="flex-1 overflow-y-auto scroll-smooth flex flex-col h-full min-h-0"
    >
      <main className="flex items-start app-bg h-full lg:h-max justify-start w-full h-full">
        <div
          className="w-full h-full
                  lg:w-full"
        >
          {/* <div className="hidden lg:flex sticky top-0 z-[1000] app-bg font-lato-bold w-full justify-between items-center lg:pt-2">
            <div />
          </div> */}
          <div className="w-full  md:pb-0">
            <div className=" bg-transparent w-full h-max pb-1 md:pb-0">
              <div className=" w-full  px-[6px]">
                <div className="app-bg flex-row w-full h-full flex  items-center justify-center cursor-pointer items-center justify-center  pb-2 gap-x-1.5">
                  <button className="w-7 rounded h-6 sm:h-7 sm:w-8 flex items-center justify-center bg-bg_color_quaternary active:scale-[115%] transition-all duration-300 ease-in-out shadow-md">
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
                  <div className="flex-1 h-full capitalize ml-[4px] flex items-center text-text_color_primary1 font-bold text-[16px] leading-5">
                    <div className="flex items-center  rounded-full px-2 py-1 w-/4">
                      <div className="truncate font-medium">
                        <span>Casino</span>
                        <span>/Evolution Gaming</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-3 md:grid-cols-5  2xl:grid-cols-8 gap-1 mt-0 lg:mt-2">
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_storm/thumb_3_4_custom.webp"
                        alt="Lightning Storm"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Storm - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_crazy_time/thumb_3_4_custom.webp"
                        alt="Crazy Time"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Crazy Time - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_super_sic_bo/thumb_3_4_custom.webp"
                        alt="Super Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Super Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_dragon_tiger/thumb_3_4_custom.webp"
                        alt="Dragon Tiger"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Dragon Tiger - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_fan_tan/thumb_3_4_custom.webp"
                        alt="Fan Tan"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Fan Tan - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_baccarat/thumb_3_4_custom.webp"
                        alt="Lightning Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_b/thumb_3_4_custom.webp"
                        alt="Speed Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_c/thumb_3_4_custom.webp"
                        alt="Speed Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_d/thumb_3_4_custom.webp"
                        alt="Speed Baccarat D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_e/thumb_3_4_custom.webp"
                        alt="Speed Baccarat E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_f/thumb_3_4_custom.webp"
                        alt="Speed Baccarat F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_g/thumb_3_4_custom.webp"
                        alt="Speed Baccarat G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_h/thumb_3_4_custom.webp"
                        alt="Speed Baccarat H"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat H - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_i/thumb_3_4_custom.webp"
                        alt="Speed Baccarat I"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat I - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_j/thumb_3_4_custom.webp"
                        alt="Speed Baccarat J"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat J - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_k/thumb_3_4_custom.webp"
                        alt="Speed Baccarat K"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat K - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_l/thumb_3_4_custom.webp"
                        alt="Speed Baccarat L"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat L - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_m/thumb_3_4_custom.webp"
                        alt="Speed Baccarat M"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat M - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_n/thumb_3_4_custom.webp"
                        alt="Speed Baccarat N"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat N - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_o/thumb_3_4_custom.webp"
                        alt="Speed Baccarat O"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat O - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_p/thumb_3_4_custom.webp"
                        alt="Speed Baccarat P"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat P - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_q/thumb_3_4_custom.webp"
                        alt="Speed Baccarat Q"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat Q - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_r/thumb_3_4_custom.webp"
                        alt="Speed Baccarat R"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat R - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_s/thumb_3_4_custom.webp"
                        alt="Speed Baccarat S"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat S - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_no_commission_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="No Commission Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="No Commission Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_no_commission_speed_baccarat_b/thumb_3_4_custom.webp"
                        alt="No Commission Speed Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="No Commission Speed Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_no_commission_speed_baccarat_c/thumb_3_4_custom.webp"
                        alt="No Commission Speed Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="No Commission Speed Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_no_commission_baccarat/thumb_3_4_custom.webp"
                        alt="No Commission Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="No Commission Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_baccarat_a/thumb_3_4_custom.webp"
                        alt="Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_baccarat_b/thumb_3_4_custom.webp"
                        alt="Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_baccarat_c/thumb_3_4_custom.webp"
                        alt="Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_baccarat_squeeze/thumb_3_4_custom.webp"
                        alt="Baccarat Squeeze"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Baccarat Squeeze - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_baccarat_control_squeeze/thumb_3_4_custom.webp"
                        alt="Baccarat Control Squeeze"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Baccarat Control Squeeze - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_baccarat_a/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_baccarat_b/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_baccarat_c/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_baccarat_d/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_baccarat_e/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="Korean Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_craps/thumb_3_4_custom.webp"
                        alt="Craps"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Craps - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_a/thumb_3_4_custom.webp"
                        alt="Blackjack A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_b/thumb_3_4_custom.webp"
                        alt="Blackjack B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_k/thumb_3_4_custom.webp"
                        alt="Speed Blackjack K"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack K - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_free_bet_blackjack/thumb_3_4_custom.webp"
                        alt="Infinite Free Bet Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Infinite Free Bet Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_power_blackjack/thumb_3_4_custom.webp"
                        alt="Power Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Power Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_infinite_blackjack/thumb_3_4_custom.webp"
                        alt="Infinite Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Infinite Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_craps/thumb_3_4_custom.webp"
                        alt="First Person Craps"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Craps - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_baccarat/thumb_3_4_custom.webp"
                        alt="First Person Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_top_card/thumb_3_4_custom.webp"
                        alt="First Person Top Card"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Top Card - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_dragon_tiger/thumb_3_4_custom.webp"
                        alt="First Person Dragon Tiger"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Dragon Tiger - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_party/thumb_3_4_custom.webp"
                        alt="Blackjack Party"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Party - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_french_roulette_gold/thumb_3_4_custom.webp"
                        alt="French Roulette Gold"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="French Roulette Gold - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lotus_roulette/thumb_3_4_custom.webp"
                        alt="Lotus Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lotus Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_xclusive_speed_baccarat_e/thumb_3_4_custom.webp"
                        alt="Xclusive Speed Baccarat E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Xclusive Speed Baccarat E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_roleta_relmpago/thumb_3_4_custom.webp"
                        alt="Roleta Relâmpago"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Roleta Relâmpago - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bacar_rpido/thumb_3_4_custom.webp"
                        alt="Bacará Rápido"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bacará Rápido - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_ftbol_studio/thumb_3_4_custom.webp"
                        alt="Fútbol Studio"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Fútbol Studio - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_sic_bo/thumb_3_4_custom.webp"
                        alt="Japanese Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_lightning_baccarat/thumb_3_4_custom.webp"
                        alt="Japanese Lightning Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Lightning Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_infinite_fun_fun_21_blackjack/thumb_3_4_custom.webp"
                        alt="Infinite Fun Fun 21 Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Infinite Fun Fun 21 Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_salon_prive_baccarat/thumb_3_4_custom.webp"
                        alt="Japanese Salon Prive Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className=" bg-bg_color_skeletonBgLoaderColor transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Salon Prive Baccarat - 10sports"
                      />
                      <div className=" transition-all duration-500 ease-in-out active:scale-105 w-full h-full bg-bg_text_brand_primary rounded-md absolute top-0 left-0 flex items-center justify-center p-2">
                        <p className=" text-text_color_primary2 text-xl text-center font-extrabold">
                          Japanese Salon Prive Baccarat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_super_speed_baccarat/thumb_3_4_custom.webp"
                        alt="Super Speed Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Super Speed Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_crazy_balls/thumb_3_4_custom.webp"
                        alt="Crazy Balls"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Crazy Balls - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_livespins__bet_with_streamers/thumb_3_4_custom.webp"
                        alt="Livespins – Bet With Streamers"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Livespins – Bet With Streamers - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_grand_japanese_speed_blackjack/thumb_3_4_custom.webp"
                        alt="Grand Japanese Speed Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Grand Japanese Speed Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_speed_blackjack_c/thumb_3_4_custom.webp"
                        alt="Japanese Speed Blackjack C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Speed Blackjack C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_speed_blackjack_b/thumb_3_4_custom.webp"
                        alt="Japanese Speed Blackjack B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Speed Blackjack B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_speed_blackjack_d/thumb_3_4_custom.webp"
                        alt="Japanese Speed Blackjack D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Speed Blackjack D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_speed_blackjack_e/thumb_3_4_custom.webp"
                        alt="Japanese Speed Blackjack E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Speed Blackjack E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_speed_blackjack_f/thumb_3_4_custom.webp"
                        alt="Japanese Speed Blackjack F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Speed Blackjack F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_platinum_priv_blackjack_1/thumb_3_4_custom.webp"
                        alt="Platinum Privé Blackjack 1"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Platinum Privé Blackjack 1 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_platinum_priv_blackjack_2/thumb_3_4_custom.webp"
                        alt="Platinum Privé Blackjack 2"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Platinum Privé Blackjack 2 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_platinum_priv_blackjack_3/thumb_3_4_custom.webp"
                        alt="Platinum Privé Blackjack 3"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Platinum Privé Blackjack 3 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_always_8_baccarat/thumb_3_4_custom.webp"
                        alt="Always 8 Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Always 8 Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_super_sic_bo/thumb_3_4_custom.webp"
                        alt="Speed Super Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Super Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_infinite_bet_stacker_blackjack/thumb_3_4_custom.webp"
                        alt="Infinite Bet Stacker Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Infinite Bet Stacker Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_easy_blackjack/thumb_3_4_custom.webp"
                        alt="Easy Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Easy Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_classic_bet_stacker_blackjack/thumb_3_4_custom.webp"
                        alt="Bet Stacker Blackjack 1"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bet Stacker Blackjack 1 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_race_track/thumb_3_4_custom.webp"
                        alt="Race Track"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Race Track - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_golden_wealth_baccarat/thumb_3_4_custom.webp"
                        alt="Emperor Golden Wealth Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Golden Wealth Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_golden_wealth_baccarat/thumb_3_4_custom.webp"
                        alt="Japanese Golden Wealth Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Golden Wealth Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_salon_prive_baccarat/thumb_3_4_custom.webp"
                        alt="Korean Salon Prive Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Salon Prive Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_blackjack_d/thumb_3_4_custom.webp"
                        alt="Korean Speed Blackjack D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Blackjack D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_blackjack_e/thumb_3_4_custom.webp"
                        alt="Korean Speed Blackjack E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Blackjack E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_blackjack_f/thumb_3_4_custom.webp"
                        alt="Korean Speed Blackjack F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Blackjack F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_blackjack_g/thumb_3_4_custom.webp"
                        alt="Korean Speed Blackjack G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Blackjack G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lotus_sic_bo/thumb_3_4_custom.webp"
                        alt="Lotus Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lotus Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_o/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack O"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack O - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_p/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack P"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack P - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_q/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack Q"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack Q - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_auto_lightning_roulette/thumb_3_4_custom.webp"
                        alt="Auto Lightning Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Auto Lightning Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_prosperity_tree_baccarat/thumb_3_4_custom.webp"
                        alt="Korean Prosperity Tree Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Prosperity Tree Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_golden_wealth_baccarat/thumb_3_4_custom.webp"
                        alt="Korean Golden Wealth Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Golden Wealth Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lotus_speed_baccarat_a_new/thumb_3_4_custom.webp"
                        alt="Lotus Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lotus Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_thai_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="Thai Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Thai Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_bac_bo/thumb_3_4_custom.webp"
                        alt="First Person Bac Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Bac Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_war/thumb_3_4_custom.webp"
                        alt="War"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="War - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bet_stacker_blackjack_2/thumb_3_4_custom.webp"
                        alt="Bet Stacker Blackjack 2"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bet Stacker Blackjack 2 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bet_stacker_blackjack_3/thumb_3_4_custom.webp"
                        alt="Bet Stacker Blackjack 3"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bet Stacker Blackjack 3 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bet_stacker_blackjack_4/thumb_3_4_custom.webp"
                        alt="Bet Stacker Blackjack 4"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bet Stacker Blackjack 4 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_race_track_a/thumb_3_4_custom.webp"
                        alt="Race Track A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Race Track A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_prosperity_tree_baccarat/thumb_3_4_custom.webp"
                        alt="Japanese Prosperity Tree Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Prosperity Tree Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_baccarat_g/thumb_3_4_custom.webp"
                        alt="Korean Speed Baccarat G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Baccarat G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_baccarat_h/thumb_3_4_custom.webp"
                        alt="Korean Speed Baccarat H"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Baccarat H - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_marble_race/thumb_3_4_custom.webp"
                        alt="Marble Race"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Marble Race - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_dragon_tiger/thumb_3_4_custom.webp"
                        alt="Korean Dragon Tiger"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Dragon Tiger - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_super_color_game/thumb_3_4_custom.webp"
                        alt="Super Color Game"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Super Color Game - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_fireball_roulette/thumb_3_4_custom.webp"
                        alt="Fireball Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Fireball Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_bac_bo/thumb_3_4_custom.webp"
                        alt="Lightning Bac Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Bac Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_dream_catcher/thumb_3_4_custom.webp"
                        alt="First Person Dream Catcher"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Dream Catcher - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_a/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_b/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_c/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_d/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_e/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_f/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_blackjack/thumb_3_4_custom.webp"
                        alt="First Person Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_g/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_1/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 1"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 1 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_roulette/thumb_3_4_custom.webp"
                        alt="First Person Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_2/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 2"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 2 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_3/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 3"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 3 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_4/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 4"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 4 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_5/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 5"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 5 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_6/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 6"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 6 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_7/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 7"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 7 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_8/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 8"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 8 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_9/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 9"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 9 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_10/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 10"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 10 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_11/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 11"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 11 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_12/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 12"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 12 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_13/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 13"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 13 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_14/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 14"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 14 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_15/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 15"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 15 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_16/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 16"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 16 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_17/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 17"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 17 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_18/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 18"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 18 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_19/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 19"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 19 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_c/thumb_3_4_custom.webp"
                        alt="Blackjack C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_l/thumb_3_4_custom.webp"
                        alt="Speed Blackjack L"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack L - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_d/thumb_3_4_custom.webp"
                        alt="Speed Blackjack D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_m/thumb_3_4_custom.webp"
                        alt="Speed Blackjack M"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack M - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_e/thumb_3_4_custom.webp"
                        alt="Speed Blackjack E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_g/thumb_3_4_custom.webp"
                        alt="Speed Blackjack G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_h/thumb_3_4_custom.webp"
                        alt="Speed Blackjack H"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack H - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_i/thumb_3_4_custom.webp"
                        alt="Speed Blackjack I"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack I - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_blackjack_j/thumb_3_4_custom.webp"
                        alt="Speed Blackjack J"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Blackjack J - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_silver_a/thumb_3_4_custom.webp"
                        alt="Blackjack Silver A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Silver A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_silver_b/thumb_3_4_custom.webp"
                        alt="Blackjack Silver B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Silver B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_silver_c/thumb_3_4_custom.webp"
                        alt="Blackjack Silver C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Silver C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_silver_d/thumb_3_4_custom.webp"
                        alt="Blackjack Silver D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Silver D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_silver_e/thumb_3_4_custom.webp"
                        alt="Blackjack Silver E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Silver E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_silver_f/thumb_3_4_custom.webp"
                        alt="Blackjack Silver F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Silver F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_mega_ball/thumb_3_4_custom.webp"
                        alt="First Person Mega Ball"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Mega Ball - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_silver_g/thumb_3_4_custom.webp"
                        alt="Blackjack Silver G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Silver G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_a/thumb_3_4_custom.webp"
                        alt="Blackjack VIP A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_b/thumb_3_4_custom.webp"
                        alt="Blackjack VIP B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_c/thumb_3_4_custom.webp"
                        alt="Blackjack VIP C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_d/thumb_3_4_custom.webp"
                        alt="Blackjack VIP D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_e/thumb_3_4_custom.webp"
                        alt="Blackjack VIP E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_f/thumb_3_4_custom.webp"
                        alt="Blackjack VIP F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_g/thumb_3_4_custom.webp"
                        alt="Blackjack VIP G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_h/thumb_3_4_custom.webp"
                        alt="Blackjack VIP H"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP H - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_i/thumb_3_4_custom.webp"
                        alt="Blackjack VIP I"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP I - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_j/thumb_3_4_custom.webp"
                        alt="Blackjack VIP J"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP J - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_lightning_roulette/thumb_3_4_custom.webp"
                        alt="First Person Lightning Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Lightning Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_k/thumb_3_4_custom.webp"
                        alt="Blackjack VIP K"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP K - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_l/thumb_3_4_custom.webp"
                        alt="Blackjack VIP L"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP L - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_m/thumb_3_4_custom.webp"
                        alt="Blackjack VIP M"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP M - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_n/thumb_3_4_custom.webp"
                        alt="Blackjack VIP N"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP N - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_rng_american_roulette/thumb_3_4_custom.webp"
                        alt="First Person American Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person American Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_o/thumb_3_4_custom.webp"
                        alt="Blackjack VIP O"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP O - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_p/thumb_3_4_custom.webp"
                        alt="Blackjack VIP P"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP P - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_q/thumb_3_4_custom.webp"
                        alt="Blackjack VIP Q"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP Q - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_cash_or_crash/thumb_3_4_custom.webp"
                        alt="Cash or Crash"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Cash or Crash - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_r/thumb_3_4_custom.webp"
                        alt="Blackjack VIP R"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP R - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_s/thumb_3_4_custom.webp"
                        alt="Blackjack VIP S"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP S - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_t/thumb_3_4_custom.webp"
                        alt="Blackjack VIP T"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP T - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_u/thumb_3_4_custom.webp"
                        alt="Blackjack VIP U"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP U - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_v/thumb_3_4_custom.webp"
                        alt="Blackjack VIP V"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP V - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_x/thumb_3_4_custom.webp"
                        alt="Blackjack VIP X"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP X - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_z/thumb_3_4_custom.webp"
                        alt="Blackjack VIP Z"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP Z - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_alpha/thumb_3_4_custom.webp"
                        alt="Blackjack VIP Alpha"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP Alpha - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_beta/thumb_3_4_custom.webp"
                        alt="Blackjack VIP Beta"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP Beta - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_gamma/thumb_3_4_custom.webp"
                        alt="Blackjack VIP Gamma"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP Gamma - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_platinum_vip/thumb_3_4_custom.webp"
                        alt="Blackjack Platinum VIP"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Platinum VIP - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_fortune_vip/thumb_3_4_custom.webp"
                        alt="Blackjack Fortune VIP"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Fortune VIP - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_grand_vip/thumb_3_4_custom.webp"
                        alt="Blackjack Grand VIP"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Grand VIP - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_diamond_vip/thumb_3_4_custom.webp"
                        alt="Blackjack Diamond VIP"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Diamond VIP - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_xxxtreme_lightning_roulette/thumb_3_4_custom.webp"
                        alt="XXXtreme Lightning Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="XXXtreme Lightning Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_autoroulette/thumb_3_4_custom.webp"
                        alt="Auto-Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Auto-Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_dice/thumb_3_4_custom.webp"
                        alt="Lightning Dice"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Dice - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_instant_roulette/thumb_3_4_custom.webp"
                        alt="Instant Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Instant Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_a/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_red_door_roulette/thumb_3_4_custom.webp"
                        alt="Red Door Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Red Door Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_b/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_c/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_d/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_e/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_f/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_roulette/thumb_3_4_custom.webp"
                        alt="Lightning Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_roulette/thumb_3_4_custom.webp"
                        alt="Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_mega_ball/thumb_3_4_custom.webp"
                        alt="Mega Ball"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Mega Ball - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_immersive_roulette/thumb_3_4_custom.webp"
                        alt="Immersive Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Immersive Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_roulette/thumb_3_4_custom.webp"
                        alt="Speed Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_vip_roulette/thumb_3_4_custom.webp"
                        alt="VIP Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="VIP Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_dream_catcher/thumb_3_4_custom.webp"
                        alt="Dream Catcher"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Dream Catcher - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_american_roulette/thumb_3_4_custom.webp"
                        alt="American Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="American Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_monopoly_live/thumb_3_4_custom.webp"
                        alt="MONOPOLY Live"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="MONOPOLY Live - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_double_ball_roulette/thumb_3_4_custom.webp"
                        alt="Double Ball Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Double Ball Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_auto_roulette/thumb_3_4_custom.webp"
                        alt="Speed Auto Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Auto Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_roulette/thumb_3_4_custom.webp"
                        alt="Japanese Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_autoroulette_vip/thumb_3_4_custom.webp"
                        alt="Auto-Roulette VIP"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Auto-Roulette VIP - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_texas_holdem_bonus_poker/thumb_3_4_custom.webp"
                        alt="Texas Hold'em Bonus Poker"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Texas Hold'em Bonus Poker - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_roulette/thumb_3_4_custom.webp"
                        alt="Salon Privé Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_caribbean_stud_poker/thumb_3_4_custom.webp"
                        alt="Caribbean Stud Poker"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Caribbean Stud Poker - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_triple_card_poker/thumb_3_4_custom.webp"
                        alt="Triple Card Poker"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Triple Card Poker - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_football_studio/thumb_3_4_custom.webp"
                        alt="Football Studio"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Football Studio - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_deal_or_no_deal/thumb_3_4_custom.webp"
                        alt="Deal or No Deal"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Deal or No Deal - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_extreme_texas_holdem/thumb_3_4_custom.webp"
                        alt="Extreme Texas Hold'em"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Extreme Texas Hold'em - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_2_hand_casino_holdem/thumb_3_4_custom.webp"
                        alt="2 Hand Casino Hold'em"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="2 Hand Casino Hold'em - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_casino_holdem/thumb_3_4_custom.webp"
                        alt="Casino Hold'em"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Casino Hold'em - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bac_bo/thumb_3_4_custom.webp"
                        alt="Bac Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bac Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_blackjack/thumb_3_4_custom.webp"
                        alt="Lightning Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="Japanese Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_dragon_tiger/thumb_3_4_custom.webp"
                        alt="Emperor Dragon Tiger"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Dragon Tiger - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_golden_wealth_baccarat/thumb_3_4_custom.webp"
                        alt="Golden Wealth Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Golden Wealth Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_speed_baccarat_b/thumb_3_4_custom.webp"
                        alt="Emperor Speed Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Speed Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_lightning_baccarat/thumb_3_4_custom.webp"
                        alt="First Person Lightning Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Lightning Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_golden_wealth_baccarat/thumb_3_4_custom.webp"
                        alt="First Person Golden Wealth Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Golden Wealth Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="Emperor Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_lightning_blackjack/thumb_3_4_custom.webp"
                        alt="First Person Lightning Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Lightning Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_roulette/thumb_3_4_custom.webp"
                        alt="Emperor Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_hindi_roulette/thumb_3_4_custom.webp"
                        alt="Hindi Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Hindi Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_speed_baccarat_c/thumb_3_4_custom.webp"
                        alt="Emperor Speed Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Speed Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_baccarat_lobby/thumb_3_4_custom.webp"
                        alt="Baccarat Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Baccarat Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_top_games_lobby/thumb_3_4_custom.webp"
                        alt="Top Games Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Top Games Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_dealer_power_blackjack/thumb_3_4_custom.webp"
                        alt="Korean Dealer Power Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Dealer Power Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_20/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 20"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 20 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speaking_speed_baccarat/thumb_3_4_custom.webp"
                        alt="Korean Speaking Speed Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speaking Speed Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_peek_baccarat/thumb_3_4_custom.webp"
                        alt="Peek Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Peek Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_dealer_speed_blackjack/thumb_3_4_custom.webp"
                        alt="Korean Dealer Speed Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Dealer Speed Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_h/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack H"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack H - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_dealer_lightning_roulette/thumb_3_4_custom.webp"
                        alt="Korean Dealer Lightning Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Dealer Lightning Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_22/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 22"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 22 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speaking_speed_baccarat_2/thumb_3_4_custom.webp"
                        alt="Korean Speaking Speed Baccarat 2"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speaking Speed Baccarat 2 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_21/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 21"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 21 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_game_shows_lobby/thumb_3_4_custom.webp"
                        alt="Game Shows Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Game Shows Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_sic_bo/thumb_3_4_custom.webp"
                        alt="Emperor Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_super_andar_bahar/thumb_3_4_custom.webp"
                        alt="Super Andar Bahar"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Super Andar Bahar - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_deal_or_no_deal/thumb_3_4_custom.webp"
                        alt="First Person Deal or No Deal"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Deal or No Deal - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_crazy_coin_flip/thumb_3_4_custom.webp"
                        alt="Crazy Coin Flip"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Crazy Coin Flip - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_teen_patti/thumb_3_4_custom.webp"
                        alt="Teen Patti"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Teen Patti - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_roulette_lobby/thumb_3_4_custom.webp"
                        alt="Roulette Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Roulette Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_lobby/thumb_3_4_custom.webp"
                        alt="Blackjack Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_poker_lobby/thumb_3_4_custom.webp"
                        alt="Poker Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Poker Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_lobby/thumb_3_4_custom.webp"
                        alt="First Person Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_monopoly_big_baller/thumb_3_4_custom.webp"
                        alt="Monopoly Big Baller"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Monopoly Big Baller - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_25/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 25"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 25 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_26/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 26"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 26 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_27/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 27"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 27 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_casino_malta_roulette/thumb_3_4_custom.webp"
                        alt="Casino Malta Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Casino Malta Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_dragonara_roulette/thumb_3_4_custom.webp"
                        alt="Dragonara Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Dragonara Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_grand_casino_roulette/thumb_3_4_custom.webp"
                        alt="Grand Casino Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Grand Casino Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_hindi_lightning_roulette/thumb_3_4_custom.webp"
                        alt="Hindi Lightning Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Hindi Lightning Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_hindi_speed_baccarat/thumb_3_4_custom.webp"
                        alt="Hindi Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Hindi Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_baccarat_b/thumb_3_4_custom.webp"
                        alt="Korean Speed Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_baccarat_c/thumb_3_4_custom.webp"
                        alt="Korean Speed Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_baccarat_f/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat F"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat F - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_baccarat_g/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_g/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack G"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack G - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_t/thumb_3_4_custom.webp"
                        alt="Speed Baccarat T"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat T - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_u/thumb_3_4_custom.webp"
                        alt="Speed Baccarat U"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat U - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_v/thumb_3_4_custom.webp"
                        alt="Speed Baccarat V"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat V - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_w/thumb_3_4_custom.webp"
                        alt="Speed Baccarat W"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat W - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_x/thumb_3_4_custom.webp"
                        alt="Speed Baccarat X"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat X - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_i/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack I"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack I - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_j/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack J"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack J - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_k/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack K"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack K - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_l/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack L"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack L - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_m/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack M"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack M - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_hippodrome_grand_casino/thumb_3_4_custom.webp"
                        alt="Hippodrome Grand Casino"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Hippodrome Grand Casino - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_dealer_baseball_studio/thumb_3_4_custom.webp"
                        alt="Korean Dealer Baseball Studio"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Dealer Baseball Studio - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_hindi_lobby/thumb_3_4_custom.webp"
                        alt="Hindi Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Hindi Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_dealer_lobby/thumb_3_4_custom.webp"
                        alt="Korean Dealer Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Dealer Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_dice_lobby/thumb_3_4_custom.webp"
                        alt="Dice Lobby"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Dice Lobby - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_dead_or_alive_saloon/thumb_3_4_custom.webp"
                        alt="Dead or Alive Saloon"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Dead or Alive Saloon - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_baccarat_h/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat H"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat H - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_baccarat_i/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat I"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat I - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_baccarat_j/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat J"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat J - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_blackjack_h/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack H"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack H - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_blackjack_i/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack I"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack I - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_prive_blackjack_j/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack J"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack J - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_imperial_quest/thumb_3_4_custom.webp"
                        alt="Imperial Quest"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Imperial Quest - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_football_studio_dice/thumb_3_4_custom.webp"
                        alt="Football Studio Dice"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Football Studio Dice - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_crazy_time_a/thumb_3_4_custom.webp"
                        alt="Crazy Time A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Crazy Time A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_z/thumb_3_4_custom.webp"
                        alt="Speed Baccarat Z"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat Z - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_1/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 1"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 1 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_2/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 2"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 2 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_3/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 3"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 3 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_extra_chilli_epic_spins/thumb_3_4_custom.webp"
                        alt="Extra Chilli Epic Spins"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Extra Chilli Epic Spins - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_funky_time/thumb_3_4_custom.webp"
                        alt="Funky Time"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Funky Time - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_gonzos_treasure_map/thumb_3_4_custom.webp"
                        alt="Gonzo’s Treasure Map"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Gonzo’s Treasure Map - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_xxxtreme_lightning_roulette/thumb_3_4_custom.webp"
                        alt="First Person XXXtreme Lightning Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person XXXtreme Lightning Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_video_poker/thumb_3_4_custom.webp"
                        alt="Video Poker"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Video Poker - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_gold_vault_roulette/thumb_3_4_custom.webp"
                        alt="Gold Vault Roulette"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Gold Vault Roulette - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_xclusive_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="Xclusive Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Xclusive Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_xclusive_speed_baccarat_b/thumb_3_4_custom.webp"
                        alt="Xclusive Speed Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Xclusive Speed Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_xclusive_speed_baccarat_c/thumb_3_4_custom.webp"
                        alt="Xclusive Speed Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Xclusive Speed Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_xclusive_speed_baccarat_d/thumb_3_4_custom.webp"
                        alt="Xclusive Speed Baccarat D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Xclusive Speed Baccarat D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bonsai_speed_baccarat_a/thumb_3_4_custom.webp"
                        alt="Bonsai Speed Baccarat A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bonsai Speed Baccarat A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bonsai_speed_baccarat_b/thumb_3_4_custom.webp"
                        alt="Bonsai Speed Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bonsai Speed Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_bonsai_speed_baccarat_c/thumb_3_4_custom.webp"
                        alt="Bonsai Speed Baccarat C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Bonsai Speed Baccarat C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_speed_baccarat_d/thumb_3_4_custom.webp"
                        alt="Emperor Speed Baccarat D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Speed Baccarat D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_baccarat_d/thumb_3_4_custom.webp"
                        alt="Korean Speed Baccarat D"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Baccarat D - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_baccarat_e/thumb_3_4_custom.webp"
                        alt="Korean Speed Baccarat E"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Baccarat E - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_4/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 4"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 4 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_28/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 28"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 28 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_29/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 29"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 29 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_30/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 30"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 30 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_31/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 31"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 31 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_32/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 32"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 32 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_grand_korean_blackjack/thumb_3_4_custom.webp"
                        alt="Grand Korean Speed Blackjack"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Grand Korean Speed Blackjack - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_n/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack N"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack N - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_o/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack O"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack O - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_p/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack P"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack P - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_q/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack Q"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack Q - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_vip_blackjack_r/thumb_3_4_custom.webp"
                        alt="Speed VIP Blackjack R"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed VIP Blackjack R - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_sic_bo_a/thumb_3_4_custom.webp"
                        alt="Emperor Sic Bo A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Sic Bo A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_prosperity_tree_baccarat/thumb_3_4_custom.webp"
                        alt="Prosperity Tree Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Prosperity Tree Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_prosperity_tree_baccarat/thumb_3_4_custom.webp"
                        alt="First Person Prosperity Tree Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Prosperity Tree Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_instant_super_sic_bo/thumb_3_4_custom.webp"
                        alt="Instant Super Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Instant Super Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_super_sic_bo/thumb_3_4_custom.webp"
                        alt="First Person Super Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Super Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_xxxtreme_lightning_baccarat/thumb_3_4_custom.webp"
                        alt="XXXtreme Lightning Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="XXXtreme Lightning Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_xxxtreme_lightning_baccarat/thumb_3_4_custom.webp"
                        alt="First Person XXXtreme Lightning Baccarat"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person XXXtreme Lightning Baccarat - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_video_poker/thumb_3_4_custom.webp"
                        alt="First Person Video Poker"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Video Poker - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_crazy_pachinko/thumb_3_4_custom.webp"
                        alt="Crazy Pachinko"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Crazy Pachinko - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_japanese_speed_blackjack_a/thumb_3_4_custom.webp"
                        alt="Japanese Speed Blackjack A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Japanese Speed Blackjack A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_stock_market/thumb_3_4_custom.webp"
                        alt="Stock Market"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Stock Market - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_dragon_tiger/thumb_3_4_custom.webp"
                        alt="Lightning Dragon Tiger"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Dragon Tiger - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_stock_market_rng/thumb_3_4_custom.webp"
                        alt="Stock Market RNG"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Stock Market RNG - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_balloon_race/thumb_3_4_custom.webp"
                        alt="Balloon Race"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Balloon Race - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_first_person_hilo/thumb_3_4_custom.webp"
                        alt="First Person Hi Lo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="First Person Hi Lo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_sic_bo/thumb_3_4_custom.webp"
                        alt="Lightning Sic Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Sic Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_lightning_ball/thumb_3_4_custom.webp"
                        alt="Lightning Ball"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Lightning Ball - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_baccarat_m/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat M"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat M - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_baccarat_n/thumb_3_4_custom.webp"
                        alt="Salon Privé Baccarat N"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Baccarat N - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_41/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 41"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 41 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_37/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 37"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 37 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_36/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 36"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 36 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_38/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 38"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 38 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_40/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 40"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 40 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_39/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 39"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 39 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_35/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 35"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 35 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_34/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 34"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 34 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_33/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 33"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 33 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_42/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 42"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 42 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_50/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 50"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 50 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_44/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 44"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 44 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_45/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 45"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 45 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_51/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 51"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 51 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_43/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 43"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 43 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_49/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 49"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 49 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_48/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 48"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 48 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_47/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 47"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 47 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_blackjack_vip_46/thumb_3_4_custom.webp"
                        alt="Blackjack VIP 46"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Blackjack VIP 46 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_free_bet_vip_blackjack_a/thumb_3_4_custom.webp"
                        alt="Free Bet VIP Blackjack A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Free Bet VIP Blackjack A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_free_bet_vip_blackjack_b/thumb_3_4_custom.webp"
                        alt="Free Bet VIP Blackjack B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Free Bet VIP Blackjack B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_6/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 6"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 6 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_7/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 7"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 7 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_8/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 8"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 8 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_9/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 9"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 9 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_10/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 10"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 10 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_11/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 11"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 11 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_12/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 12"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 12 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_speed_baccarat_5/thumb_3_4_custom.webp"
                        alt="Speed Baccarat 5"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Speed Baccarat 5 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_1/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 1"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 1 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_11/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 11"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 11 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_10/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 10"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 10 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_9/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 9"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 9 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_8/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 8"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 8 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_7/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 7"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 7 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_6/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 6"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 6 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_5/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 5"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 5 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_4/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 4"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 4 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_3/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 3"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 3 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_evo_speed_blackjack_2/thumb_3_4_custom.webp"
                        alt="Evo Speed Blackjack 2"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Evo Speed Blackjack 2 - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_blackjack_a/thumb_3_4_custom.webp"
                        alt="Korean Speed Blackjack A"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Blackjack A - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_blackjack_b/thumb_3_4_custom.webp"
                        alt="Korean Speed Blackjack B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Blackjack B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_korean_speed_blackjack_c/thumb_3_4_custom.webp"
                        alt="Korean Speed Blackjack C"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Korean Speed Blackjack C - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_hindi_speed_baccarat_b/thumb_3_4_custom.webp"
                        alt="Hindi Speed Baccarat B"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Hindi Speed Baccarat B - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_emperor_bac_bo/thumb_3_4_custom.webp"
                        alt="Emperor Bac Bo"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Emperor Bac Bo - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_k/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack K"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack K - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_l/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack L"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack L - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_m/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack M"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack M - 10sports"
                      />
                    </div>
                  </div>
                  <div className="w-full h-max">
                    <div className="relative overflow-hidden w-full aspect-[0.75] object-cover rounded-md cursor-pointer">
                      <img
                        src="https://luckmedia.link/evo_salon_priv_blackjack_n/thumb_3_4_custom.webp"
                        alt="Salon Privé Blackjack N"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="  transition-all cursor-pointer hover:scale-105 w-full h-full duration-500 ease-in-out active:scale-105"
                        loading="lazy"
                        title="Salon Privé Blackjack N - 10sports"
                      />
                    </div>
                  </div>
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
  );
};

export default GameProviderDetails;
