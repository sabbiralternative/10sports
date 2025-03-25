import { useEffect, useState } from "react";
import { useGroupQuery } from "../../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import { Cricket, Tennis } from "../../../assets/Icon/Index";
import { useSelector } from "react-redux";

const InPlay = () => {
  const { group } = useSelector((state) => state.global);

  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    }
  );

  const [categories, setCategories] = useState([]);
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football" };
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId)
        )
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);
  return (
    <div title="In Play" className="px-[6px] w-full">
      <div className="w-full font-helvetica-neue">
        <div className="w-full flex items-center justify-between border-b border-border_color_primary rounded-t-[10px] py-1.5 px-[7px] bg-bg_inPlayBlockBg">
          <div className="flex items-center text-text_color_primary2 font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={29}
              height={29}
              viewBox="0 0 29 29"
              fill="none"
            >
              <g clipPath="url(#clip0_1696_2272)">
                <path
                  d="M14.5 2.83337C8.06004 2.83337 2.83337 8.06004 2.83337 14.5C2.83337 20.94 8.06004 26.1667 14.5 26.1667C20.94 26.1667 26.1667 20.94 26.1667 14.5C26.1667 8.06004 20.94 2.83337 14.5 2.83337ZM12.1667 19.75V9.25004L19.1667 14.5L12.1667 19.75Z"
                  fill="var(--icon-color-secondary)"
                />
              </g>
              <defs>
                <clipPath id="clip0_1696_2272">
                  <rect
                    width={28}
                    height={28}
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>In Play</span>
          </div>
        </div>
        <div className="bg-bg_color_primary border border-border_color_primary border-b-0 shadow-lg border-t-0 rounded-b">
          {categories?.map((category) => {
            const filteredData = Object.entries(data)
              .filter(
                ([, value]) =>
                  value.eventTypeId === category && value.visible === true
              )
              .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
              }, {});
            return (
              <div key={category} className="eventHeadName grid grid-cols-12">
                <div className="text-text_color_primary1 px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                  {eventName[category] === "Cricket" && <Cricket />}
                  {eventName[category] === "Tennis" && <Tennis />}
                  {eventName[category] === "Football" && <Tennis />}
                  <div className="text-text_color_primary1 mt-0.5 md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                    {eventName[category]}
                  </div>
                </div>
                <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
                  <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                    1
                  </span>
                  <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                    X
                  </span>
                  <span className="text-text_color_primary1 mt-0.5 text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                    2
                  </span>
                </div>
                {data &&
                  Object.values(data).length > 0 &&
                  Object.keys(filteredData)
                    .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                    .map((keys) => {
                      if (!data?.[keys]?.visible) {
                        return null;
                      }

                      return (
                        <>
                          <div
                            onClick={() => navigateGameList(keys)}
                            className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-border_color_primary1"
                          >
                            <span
                              id="inPlayTime"
                              className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
                            >
                              <span className="text-text_color_InPlayEventsScoreAndTime text-[8px] xs:text-[9px] md:text-[10px] font-semibold w-full text-center">
                                22-03-2025 8:30 PM
                              </span>
                            </span>
                            <div
                              id="inPlayTeamName"
                              className="cursor-pointer text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-border_color_primary active:scale-[94%] transition-all ease-in-out duration-100"
                            >
                              <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                                <div className="text-selection-none w-full flex items-center justify-start">
                                  <span className="w-[5px] h-[5px] p-[1px] mr-[2px]" />
                                  <span className="text-[11px] font-bold text-text_color_primary1 truncate sm:text-xs md:text-sm">
                                    {data[keys]?.player1}
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                          <span
                            onClick={() => navigateGameList(keys)}
                            className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-border_color_primary1"
                          >
                            <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full gap-x-0.5 py-[1px] pr-[2px]">
                              <div className="col-span-4 grid grid-cols-2 h-full">
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[0]?.ex?.availableToBack[0]
                                        ?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToBack?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToLay?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[0]?.ex
                                        ?.availableToLay?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-4 grid grid-cols-2 h-full">
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToBack?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToBack?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToLay?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[2]?.ex
                                        ?.availableToLay?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-4 grid grid-cols-2 h-full">
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_backBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToBack?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToBack?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-full">
                                  <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col transition-colors duration-300 ease-in-out items-center justify-center w-full h-full bg-bg_color_layBtnBg text-text_color_oddValue">
                                    <span
                                      id="oddBtnPrice"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full leading-5 text-sm md:text-[15px] font-semibold"
                                    >
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToLay?.[0]?.price || "-"}
                                    </span>
                                    <span
                                      id="oddBtnSize"
                                      className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] leading-3 text-center whitespace-normal font-normal"
                                    >
                                      {data?.[keys]?.[1]?.ex
                                        ?.availableToLay?.[0]?.size || "-"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </>
                      );
                    })}

                {/* <div className="col-span-12">
                  <div className="relative w-full min-h-[43px] cursor-pointer active:opacity-70 transition-all duration-300">
                    <div
                      className="absolute right-0 z-0 top-0 w-[42%] h-full"
                      style={{
                        background:
                          'url("assets/images/StadiumImage.png")50% center / cover no-repeat lightgray',
                      }}
                    />
                    <div className="w-full z-10 min-h-[43px] bg-superOverBannerGradient pt-[9px] pb-[8px] pl-[13px] relative">
                      <div className="flex items-center gap-[9px]">
                        <div className="relative overflow-hidden w-6 h-6">
                          <img
                            src="assets/images/superOverBannerImgs/throw.svg"
                            alt="Super Over Banner Throw"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-full h-full"
                            width={24}
                            height={24}
                            title="Super Over Banner Throw"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start font-lato font-bold leading-3 text-text_color_primary2">
                          <span className="text-[11px] md:text-xs">
                            Play Super Over Game
                          </span>
                          <span className="text-xxs md:text-x">
                            Win More Money
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-[31.054%] z-10">
                        <div className="relative overflow-hidden w-max h-max">
                          <img
                            src="assets/images/superOverBannerImgs/card1.svg"
                            alt="Super Over Banner Card1"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-max h-max"
                            title="Super Over Banner Card1"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-[8.17%] z-10">
                        <div className="relative overflow-hidden w-max h-max">
                          <img
                            src="assets/images/superOverBannerImgs/card2.svg"
                            alt="Super Over Banner Card2"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-max h-max"
                            title="Super Over Banner Card2"
                          />
                        </div>
                      </div>
                      <div className="absolute top-0 right-[17.71%] z-10">
                        <div className="relative overflow-hidden w-max h-max">
                          <img
                            src="assets/images/superOverBannerImgs/card3.svg"
                            alt="Super Over Banner Card3"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-max h-max"
                            width={34}
                            height={41}
                            title="Super Over Banner Card3"
                          />
                        </div>
                      </div>
                      <div className="absolute top-[1.87px] right-[27.30%] z-10">
                        <div className="relative overflow-hidden w-max h-max">
                          <img
                            src="assets/images/superOverBannerImgs/chip1.svg"
                            alt="Super Over Banner Chip1"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-max h-max"
                            title="Super Over Banner Chip1"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[39.58%] right-[33.04%] z-10">
                        <div className="relative overflow-hidden w-max h-max">
                          <img
                            src="assets/images/superOverBannerImgs/chip2.svg"
                            alt="Super Over Banner Chip2"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-max h-max"
                            title="Super Over Banner Chip2"
                          />
                        </div>
                      </div>
                      <div className="absolute top-[12.02%] right-[5.30%] z-10">
                        <div className="relative overflow-hidden w-max h-max">
                          <img
                            src="assets/images/superOverBannerImgs/chip3.svg"
                            alt="Super Over Banner Chip3"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-max h-max"
                            title="Super Over Banner Chip3"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[8.27%] right-[1.14%] z-10">
                        <div className="relative overflow-hidden w-max h-max">
                          <img
                            src="assets/images/superOverBannerImgs/chip4.svg"
                            alt="Super Over Banner Chip4"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-max h-max"
                            title="Super Over Banner Chip4"
                          />
                        </div>
                      </div>
                      <div className="absolute right-[25.21%] bottom-[17.45%] z-10">
                        <div className="relative overflow-hidden w-4 h-4">
                          <img
                            src="assets/images/ball.webp"
                            alt="Super Over Banner Ball"
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                            className="w-full h-full"
                            title="Super Over Banner Ball"
                          />
                        </div>
                      </div>
                      <div
                        className="absolute right-[12.17%] z-10 top-[7.6%] w-[20px] h-[20px] flex items-center justify-center"
                        style={{
                          backgroundImage: 'url("assets/images/ball.webp")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          viewBox="0 0 6 8"
                          fill="none"
                        >
                          <path
                            d="M3.002 8C2.41632 8 1.8963 7.90494 1.44194 7.71483C0.990208 7.52472 0.635648 7.26489 0.378265 6.93536C0.123507 6.6033 -0.00255844 6.22687 6.79231e-05 5.80608C-0.00255844 5.47909 0.0709798 5.17871 0.220683 4.90494C0.370385 4.63118 0.572616 4.40304 0.827373 4.22053C1.08476 4.03549 1.37103 3.91762 1.68619 3.86692V3.81369C1.27123 3.72497 0.935054 3.52091 0.67767 3.20152C0.422913 2.87959 0.296847 2.50824 0.299474 2.08745C0.296847 1.68695 0.412407 1.32953 0.646154 1.01521C0.8799 0.700887 1.20032 0.453739 1.6074 0.273764C2.01449 0.0912548 2.47936 0 3.002 0C3.5194 0 3.98032 0.0912548 4.38479 0.273764C4.79187 0.453739 5.11229 0.700887 5.34604 1.01521C5.58241 1.32953 5.70059 1.68695 5.70059 2.08745C5.70059 2.50824 5.57059 2.87959 5.31058 3.20152C5.0532 3.52091 4.72096 3.72497 4.31387 3.81369V3.86692C4.62904 3.91762 4.91268 4.03549 5.16482 4.22053C5.41957 4.40304 5.6218 4.63118 5.77151 4.90494C5.92384 5.17871 6 5.47909 6 5.80608C6 6.22687 5.87131 6.6033 5.61392 6.93536C5.35654 7.26489 5.00198 7.52472 4.55025 7.71483C4.10114 7.90494 3.58506 8 3.002 8ZM3.002 6.91255C3.30404 6.91255 3.56667 6.86312 3.78991 6.76426C4.01315 6.66287 4.18649 6.52091 4.30993 6.3384C4.43337 6.15589 4.49641 5.9455 4.49903 5.70722C4.49641 5.45881 4.42943 5.23954 4.29812 5.04943C4.16942 4.85678 3.99214 4.70596 3.76628 4.59696C3.54304 4.48796 3.28828 4.43346 3.002 4.43346C2.7131 4.43346 2.45572 4.48796 2.22985 4.59696C2.00398 4.70596 1.82539 4.85678 1.69407 5.04943C1.56538 5.23954 1.50235 5.45881 1.50498 5.70722C1.50235 5.9455 1.56276 6.15589 1.68619 6.3384C1.80963 6.51838 1.98297 6.65906 2.20622 6.76046C2.43208 6.86185 2.69735 6.91255 3.002 6.91255ZM3.002 3.36502C3.24888 3.36502 3.46687 3.31686 3.65597 3.22053C3.84769 3.12421 3.99871 2.98986 4.10902 2.81749C4.21932 2.64512 4.27579 2.44613 4.27842 2.22053C4.27579 1.99747 4.22064 1.80228 4.11296 1.63498C4.00528 1.46515 3.85557 1.3346 3.66385 1.24335C3.47212 1.14956 3.25151 1.10266 3.002 1.10266C2.74725 1.10266 2.52269 1.14956 2.32834 1.24335C2.13662 1.3346 1.98691 1.46515 1.87923 1.63498C1.77418 1.80228 1.72296 1.99747 1.72559 2.22053C1.72296 2.44613 1.77549 2.64512 1.88317 2.81749C1.99348 2.98733 2.1445 3.12167 2.33622 3.22053C2.53057 3.31686 2.7525 3.36502 3.002 3.36502Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={9}
                        viewBox="0 0 9 9"
                        fill="none"
                        className="absolute bottom-[11.53%] right-[19.36%] z-10"
                      >
                        <path
                          d="M6.60485 8.26013C6.25023 8.4807 5.86686 8.63712 5.45472 8.72937C5.04108 8.81923 4.61328 8.81218 4.17132 8.70823C3.72785 8.60188 3.28275 8.37056 2.83601 8.01428C2.38776 7.6556 1.95096 7.13681 1.52561 6.45791C1.12668 5.82616 0.838232 5.22041 0.660277 4.64064C0.482322 4.06087 0.411757 3.5208 0.448582 3.02044C0.48389 2.51767 0.622415 2.06397 0.864158 1.65932C1.1083 1.25315 1.45137 0.910518 1.89335 0.631418C2.35695 0.338666 2.82534 0.170564 3.29853 0.127111C3.77412 0.0821404 4.22252 0.148417 4.64374 0.325941C5.06343 0.501062 5.42484 0.770108 5.72797 1.13308L4.41284 1.96355C4.16659 1.72258 3.88589 1.584 3.57073 1.54783C3.25646 1.50773 2.94078 1.58779 2.62371 1.78801C2.11207 2.1111 1.85844 2.58206 1.86282 3.20088C1.8696 3.81818 2.11676 4.51553 2.6043 5.29291L2.65474 5.26106C2.63896 4.97535 2.67697 4.69767 2.76877 4.42803C2.86057 4.15838 2.99838 3.9084 3.18221 3.67808C3.36693 3.44384 3.5914 3.24329 3.85563 3.07644C4.288 2.80341 4.74116 2.66172 5.2151 2.65139C5.69145 2.63955 6.14503 2.75127 6.57585 2.98657C7.00515 3.21946 7.36574 3.56967 7.6576 4.03719C7.96641 4.52089 8.13122 5.02664 8.15204 5.55444C8.17134 6.07984 8.0514 6.57893 7.79221 7.05172C7.53301 7.5245 7.13723 7.92731 6.60485 8.26013ZM5.91507 7.18375C6.17689 7.01841 6.3709 6.80686 6.49708 6.54911C6.62327 6.29135 6.67815 6.01645 6.66174 5.72443C6.64533 5.4324 6.55098 5.15262 6.37869 4.88511C6.21424 4.61937 6.00566 4.41676 5.75296 4.27731C5.50266 4.13633 5.23598 4.06785 4.95293 4.07188C4.66988 4.0759 4.39744 4.16058 4.13562 4.32592C3.94105 4.44879 3.7832 4.60054 3.66208 4.78118C3.54096 4.96183 3.45966 5.15764 3.41818 5.36863C3.37518 5.57722 3.37225 5.79074 3.40941 6.0092C3.44744 6.22373 3.52669 6.42904 3.64715 6.62513C3.81186 6.88063 4.02132 7.07931 4.27554 7.22117C4.52976 7.36303 4.80111 7.4336 5.0896 7.43286C5.37808 7.43212 5.65324 7.34908 5.91507 7.18375Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InPlay;
