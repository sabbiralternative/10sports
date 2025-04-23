// import { useState } from "react";
// import { useCurrentBets } from "../../../hooks/currentBets";
// import { useParams } from "react-router-dom";

const MobileEventHeader = () => {
  // const [showBet, setShowBet] = useState(true);
  // const [tab, setTab] = useState("live");
  // const { eventId } = useParams();
  // const { data } = useCurrentBets(eventId);

  return (
    <>
      <div
        id="eventDetails4-Bangladesh-vs-Zimbabwe"
        className=" w-full  top-0 flex items-center justify-start flex-col lg:hidden"
        style={{ zIndex: 20 }}
      >
        <div
          id="eventPageHeader"
          className=" w-full pl-[4px] pr-[4px] py-1.5 bg-bg_color_primary flex flex-col items-center"
        >
          <div className=" w-full flex  items-center justify-between">
            <div
              id="playIcon"
              className="flex items-start justify-center gap-x-3  w-max max-w-[92%]"
            >
              <div className="w-8 cursor-pointer rounded-sm h-6 flex items-center transition-all duration-300 ease-in-out justify-center bg-bg_color_quaternary active:scale-[120%] active:opacity-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--icon-color-brand-secondary)"
                  ></path>
                </svg>
              </div>
              <span className=" max-w-[10%] min-w-[6%] mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1875_77994)">
                    <path
                      d="M13.2984 9.60764L9.14541 6.58877C8.993 6.4783 8.79068 6.46166 8.62363 6.54751C8.45525 6.6327 8.3501 6.80574 8.3501 6.99275V13.0285C8.3501 13.2175 8.45525 13.3899 8.62363 13.4751C8.69485 13.511 8.77271 13.529 8.85125 13.529C8.95374 13.529 9.05756 13.4964 9.14541 13.4318L13.2984 10.4156C13.4295 10.3191 13.506 10.17 13.506 10.0116C13.5067 9.85056 13.4281 9.70215 13.2984 9.60764Z"
                      fill="var(--icon-color-secondary)"
                    ></path>
                    <path
                      d="M10.0003 0C4.47639 0 0 4.47639 0 10.0003C0 15.5223 4.47639 19.9973 10.0003 19.9973C15.5229 19.9973 20 15.5216 20 10.0003C20.0007 4.47639 15.5229 0 10.0003 0ZM10.0003 18.3288C5.40015 18.3288 1.67049 14.6012 1.67049 10.0003C1.67049 5.40148 5.40015 1.66916 10.0003 1.66916C14.5998 1.66916 18.3288 5.40082 18.3288 10.0003C18.3295 14.6012 14.5998 18.3288 10.0003 18.3288Z"
                      fill="var(--icon-color-secondary)"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1875_77994">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className=" flex flex-col items-start justify-start w-[95%] break-words gap-y-0">
                <span className=" w-full  text-start font-lato text-base font-bold text-text_color_primary2">
                  <span className=" capitalize break-words">Bangladesh</span>
                  <span className="mx-1">vs</span>
                  <span className=" capitalize break-words">Zimbabwe</span>
                </span>
                <span className=" w-auto max-w-[90%]"></span>
              </div>
            </div>
            <div className=" flex items-start justify-start w-max h-full">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1717_31141)">
                  <path
                    d="M8.5 0.5C4.07841 0.5 0.5 4.078 0.5 8.5C0.5 12.9215 4.078 16.5 8.5 16.5C12.9216 16.5 16.5 12.922 16.5 8.5C16.5 4.07847 12.922 0.5 8.5 0.5ZM8.5 15.3837C4.70431 15.3837 1.61628 12.2957 1.61628 8.5C1.61628 4.70428 4.70431 1.61628 8.5 1.61628C12.2957 1.61628 15.3837 4.70428 15.3837 8.5C15.3837 12.2957 12.2957 15.3837 8.5 15.3837Z"
                    fill="var(--icon-color-brand-secondary)"
                  ></path>
                  <path
                    d="M8.5003 7.1687C8.02642 7.1687 7.68945 7.36883 7.68945 7.66367V11.6757C7.68945 11.9285 8.02642 12.1812 8.5003 12.1812C8.95311 12.1812 9.32164 11.9285 9.32164 11.6757V7.66361C9.32164 7.36879 8.95311 7.1687 8.5003 7.1687Z"
                    fill="var(--icon-color-brand-secondary)"
                  ></path>
                  <path
                    d="M8.50019 4.69409C8.01578 4.69409 7.63672 5.04159 7.63672 5.44175C7.63672 5.84194 8.01581 6.19997 8.50019 6.19997C8.97406 6.19997 9.35319 5.84194 9.35319 5.44175C9.35319 5.04159 8.97403 4.69409 8.50019 4.69409Z"
                    fill="var(--icon-color-brand-secondary)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1717_31141">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className=" w-full  bg-bg_color_secondary px-0">
          <div className=" flex w-full justify-between items-center px-3.5 py-1 font-lato">
            <div className=" flex items-start justify-start w-max flex-col max-w-[70%]">
              <div className=" bg-bg_text_brand_primary text-transparent text-start bg-clip-text font-lato font-bold text-sm flex items-start justify-start w-full">
                <span className=" text-start">Zimbabwe</span>
              </div>
              <div className=" flex items-center justify-start gap-x-1">
                <span className="text-[18px] font-bold text-text_color_primary1 ">
                  273/10
                </span>
                <div className=" flex items-center justify-center rounded-[4px] px-1.5 py-0.5 bg-bg_text_brand_primary">
                  <span className=" text-[10px] font-[500] leading-4 text-text_color_primary2">
                    Over 80.2
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-[3px] text-end max-w-[60%] text-text_color_primary1 ">
              <span className="text-lg bg-bg_text_brand_secondary text-transparent  bg-clip-text font-bold leading-6 text-lg">
                0
              </span>
              <div className=" text-x font-semibold text-end leading-3">
                <span className="text-text_color_primary1 ">CRR : 3.40</span>
              </div>
            </div>
          </div>
          <div className=" px-[11px] relative bg-bg_color_primary w-full shadow-md">
            <div className=" w-full flex items-center py-1 justify-start overflow-scroll no-scrollbar gap-x-2">
              <div
                title="Current Over"
                className=" flex py-1 items-center justify-start gap-x-[7px]"
              >
                <span className=" w-max min-w-11 text-xs font-medium text-text_color_primary">
                  Over 74
                </span>
                <div className=" flex items-center justify-start gap-x-[11px]">
                  <div className="flex items-center justify-start gap-x-[11px]">
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>1</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>&nbsp;</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center text-xs gap-x-0.5 font-medium leading-4 border-r border-border_color_primary pr-3 text-text_color_primary">
                <span>=</span>
                <span>1</span>
              </div>
              <div
                title="Last Over"
                className=" py-1 flex items-center justify-start gap-x-[7px]"
              >
                <span className=" w-max min-w-11 text-xs font-medium text-text_color_primary">
                  Over 73
                </span>
                <div className=" flex items-center justify-start gap-x-[11px]">
                  <div className="flex items-center justify-start gap-x-[11px]">
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>1</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>2</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                    <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                      <span>0</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center text-xs gap-x-0.5 font-medium leading-4 border-r border-border_color_primary pr-5 text-text_color_primary">
                <span>=</span>
                <span>3</span>
              </div>
            </div>
            <div className=" absolute z-1 top-1/2 -translate-y-1/2 right-2">
              <button
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  min-w-5 min-h-5 flex items-center justify-center rounded-[4px] bg-bg_color_quaternary 
               cursor-pointer
               "
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.4998 10L6.6665 6.16667L7.83317 5L12.8332 10L7.83317 15L6.6665 13.8333L10.4998 10Z"
                    fill="var(--icon-color-brand-secondary)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          title="Live And Open Bets"
          className=" lg:hidden w-full bg-bg_color_primary shadow-sm"
        >
          <div
            id="step-selectMode"
            className="relative flex w-[100%]  overflow-clip  rounded-none bg-bg_color_primary w-full border-none shadow-none overflow-clip gap-x-2.5 active:scale-100 bg-bg_color_primary"
          >
            <button
              className=" flex items-center justify-center w-full gap-1.5 tracking-wider  font-lato  py-2.5 uppercase  active:opacity-90 p-3 text-sm font-semibold text-text_brand_primary  bg-clip-text font-bold font-lato text-xs bg-bg_text_brand_primary text-transparent"
              style={{ zIndex: 10 }}
            >
              <span>
                <div className=" w-2 h-2 bg-bg_color_brand_primary1 rounded-full mr"></div>
              </span>
              LIVE
            </button>
            <button
              className=" flex items-center justify-center w-full gap-1.5 tracking-wider  font-lato  py-2.5 uppercase  active:opacity-90 p-3 text-sm font-semibold text-text_color_tertiary1 text-text_color_primary3 font-lato font-bold text-xs bg-none"
              style={{ zIndex: 10 }}
            >
              OPEN BETS
              <span>
                <div>(0)</div>
              </span>
            </button>
            <div
              className="w-[48%] absolute z-10 transition-all ease-in-out bg-bg_color_brand_primary1 rounded-lg h-[2px]"
              style={{ zIndex: 9, width: "50%", left: "0%", bottom: "0px" }}
            ></div>
          </div>
        </div>
      </div>

      <div
        title="Live Score"
        className="  grid grid-cols-1   min-h-[124px]   sm:grid-cols-2 lg:grid-cols-1 sm:gap-x-1 sm:px-0.5 lg:gap-x-0 lg:px-0 w-full  flex-grow lg:hidden"
      >
        <div className=" col-span-1 w-full h-max">
          <div className="bg-bg_color_primary font-lato py-1">
            <div className="min-w-full snap-center text-text_color_primary1 text-[10px] flex flex-col justify-evenly divide-y divide-divide_color_primary2">
              <div className="grid grid-cols-10 text-center  gap-2 divide-x divide-divide_color_primary2">
                <div className="flex flex-col col-span-2">
                  <span>CRR</span>
                  <span>3.4</span>
                </div>
                <div className="flex flex-col col-span-2">
                  <span> {"P'SHIP"} R</span>
                  <span>0</span>
                </div>
                <div className="flex flex-col col-span-2">
                  <span className="text-text_color_tertiary1">
                    {"P'SHIP"} B
                  </span>
                  <span>0</span>
                </div>
                <div className="flex flex-col col-span-4">
                  <span className="text-text_color_tertiary1">LAST WICKET</span>
                  <div className=" flex items-center justify-center gap-x-0.5">
                    <span>Taijul Islam</span>
                    <div className=" flex items-center justify-center gap-x-0.5">
                      <span>1</span>
                      <span>(3)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-8 pt-3 text-text_color_tertiary1">
                <span className="col-span-3 ml-3">Batsmen</span>
                <span className="col-span-1">R</span>
                <span className="col-span-1">B</span>
                <span className="col-span-1">4s</span>
                <span className="col-span-1">6s</span>
                <span className="col-span-1">SR</span>
                <div className=" col-span-3 ml-3 flex items-center justify-start flex-row text-text_color_primary1 gap-x-1">
                  <span> Jaker Ali</span>
                </div>
                <span className=" col-span-1 text-text_color_primary1">45</span>
                <span className=" col-span-1 text-text_color_primary1">
                  103
                </span>
                <span className=" col-span-1 text-text_color_primary1">3s</span>
                <span className=" col-span-1 text-text_color_primary1 ">
                  0s
                </span>
                <span className=" col-span-1 text-text_color_primary1 ">
                  43.69
                </span>
                <div className=" col-span-3 ml-3 flex items-center justify-start flex-row text-text_color_primary1 gap-x-1">
                  <span> Hasan Mahmud</span>
                </div>
                <span className=" col-span-1 text-text_color_primary1">11</span>
                <span className=" col-span-1 text-text_color_primary1">43</span>
                <span className=" col-span-1 text-text_color_primary1">2s</span>
                <span className=" col-span-1 text-text_color_primary1 ">
                  0s
                </span>
                <span className=" col-span-1 text-text_color_primary1 ">
                  25.58
                </span>
              </div>
              <div className="grid grid-cols-8 pt-3 text-text_color_tertiary1">
                <span className="col-span-3 ml-3">Bowler</span>
                <span className="col-span-1">O</span>
                <span className="col-span-1">M</span>
                <span className="col-span-1">R</span>
                <span className="col-span-1">W</span>
                <span className="col-span-1">Eco</span>
                <span className=" col-span-3 ml-3 text-text_color_primary1">
                  Victor Nyauchi
                </span>
                <span className=" col-span-1 text-text_color_primary1">
                  16.4
                </span>
                <span className=" col-span-1 text-text_color_primary1">0</span>
                <span className=" col-span-1 text-text_color_primary1">36</span>
                <span className=" col-span-1 text-text_color_primary1">1</span>
                <span className=" col-span-1 text-text_color_primary1">
                  2.2
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1 h-full">
          <div className=" w-full px-2">
            <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  w-full py-2 text-sm my-2 font-semibold text-center text-text_color_primary2 bg-bg_brand_primary rounded-md 
      cursor-pointer
      "
              type="button"
            >
              Watch And Enjoy Live Action...
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileEventHeader;
