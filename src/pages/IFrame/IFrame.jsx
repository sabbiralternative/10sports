import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userToken } from "../../redux/features/auth/authSlice";
import { API, Settings } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";
import Loader from "../../components/shared/Loader/Loader";

const IFrame = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [iFrame, setIFrame] = useState("");
  const { gameId } = useParams();

  const token = useSelector(userToken);

  /* get iframe url */
  useEffect(() => {
    window.scrollTo(0, 0);
    const getCasinoVideo = async () => {
      setLoading(true);
      const payload = {
        gameId: gameId,
        isHome: false,
        mobileOnly: true,
        casino_currency: Settings.casino_currency,
      };

      try {
        setLoading(true);
        const res = await AxiosSecure.post(API.liveCasinoIframe, payload);
        const data = res?.data;

        setIFrame(data?.gameUrl);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error?.message);
      }
    };
    getCasinoVideo();
  }, [gameId, token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col transition-all  ease-in-out duration-100 pt-0 w-full">
      {/* Desktop Header */}
      <div className="hidden md:block fixed top-0 w-full  bg-headerBg">
        <div className="flex flex-col shadow-lg autoAnimate">
          <div
            id="bottomTabContainer"
            className="w-full h-[42px] pr-[4px] flex items-center justify-between gap-1 bg-transparent"
          >
            <div
              id="logoContainer"
              className="logo flex w-full h-full md:w-fit "
            >
              <div
                onClick={() => navigate(-1)}
                className="flex items-center w-[40px] md:w-fit justify-center  back-from-iframe "
              >
                <button
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-8 h-6 flex ml-[4px] items-center bg-bg_Primary2 rounded-md justify-center active:scale-150 cursor-pointer py-2"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 7 12"
                    fill="var(--bg-active-primary)"
                  >
                    <path
                      d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                      fill="var(--bg-active-primary)"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              onClick={() => navigate("/")}
              className="md:w-max flex items-center justify-center ml-auto lg:ml-0"
            >
              <div className="w-max hidden items-center justify-center gap-1 rounded-full lg:flex">
                <button className="relative flex rounded-full gap-1  hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-primary">
                  <span className="w-max text-text_LoginTextColor hidden md:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    </svg>
                  </span>
                  <span className="text-xxs   font-normal font-lato md:font-semibold md:text-xs xs:text-xs">
                    Account
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center gap-x-1 h-max lg:hidden">
                <button
                  type="button"
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out overflow-hidden relative active:scale-95 hidden xxs:flex items-center h-fit justify-center bg-bg_Success rounded-md px-8 py-2 sm:px-4 sm:py-1.5 mr-[8px] text-primary text-sm text-center cursor-pointer"
                >
                  <span className="font-semibold flex flex-row font-lato md:font-normal sm:text-base xs:text-sm">
                    <span className="relative top-[2px] right-[3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="19"
                        viewBox="0 0 21 19"
                        fill="none"
                      >
                        <path
                          d="M3.62143 4.52979C3.52275 4.52988 3.42507 4.54945 3.33397 4.58737C3.24287 4.62528 3.16014 4.68079 3.09054 4.75074C3.02094 4.82068 2.96584 4.90368 2.92837 4.99496C2.8909 5.08624 2.87181 5.18402 2.8722 5.28269C2.8724 5.48134 2.95139 5.67179 3.09185 5.81225C3.23232 5.95271 3.42278 6.03171 3.62143 6.03191H16.6423C17.4549 6.03191 18.0115 6.5801 18.0115 7.19078V8.50099C18.0111 8.59998 18.0303 8.69805 18.068 8.78958C18.1057 8.8811 18.1612 8.96425 18.2312 9.03424C18.3012 9.10424 18.3843 9.15969 18.4758 9.19739C18.5674 9.23508 18.6654 9.25429 18.7644 9.2539C18.8631 9.2538 18.9608 9.23424 19.0519 9.19632C19.143 9.1584 19.2257 9.10288 19.2953 9.03293C19.3649 8.96299 19.42 8.87999 19.4575 8.78871C19.4949 8.69743 19.514 8.59966 19.5136 8.50099V7.19078C19.5136 5.6859 18.1796 4.52979 16.6423 4.52979H3.62143Z"
                          fill="var(--color-quaternary)"
                        ></path>
                        <path
                          d="M16.6606 7.75177C15.5639 7.75177 14.6603 8.65906 14.6603 9.75583V11.2579C14.6603 12.3547 15.5639 13.262 16.6606 13.262H18.7459C19.8427 13.262 20.75 12.3547 20.75 11.2579V9.75583C20.75 8.65906 19.8427 7.75177 18.7459 7.75177H16.6606ZM16.6606 9.25389H18.7459C19.032 9.25389 19.2478 9.46966 19.2478 9.75583V11.2579C19.2478 11.5441 19.032 11.7599 18.7459 11.7599H16.6606C16.3745 11.7599 16.1587 11.5441 16.1587 11.2579V9.75583C16.1587 9.46966 16.3745 9.25389 16.6606 9.25389Z"
                          fill="var(--color-quaternary)"
                        ></path>
                        <path
                          d="M10.2315 13.0663C10.0329 13.0665 9.84242 13.1455 9.70195 13.286C9.56149 13.4265 9.4825 13.6169 9.4823 13.8156V17.7499C9.4825 17.9485 9.56149 18.139 9.70195 18.2794C9.84242 18.4199 10.0329 18.4989 10.2315 18.4991C10.4302 18.4989 10.6206 18.4199 10.7611 18.2794C10.9015 18.139 10.9805 17.9485 10.9807 17.7499V13.8156C10.9805 13.6169 10.9015 13.4265 10.7611 13.286C10.6206 13.1455 10.4302 13.0665 10.2315 13.0663Z"
                          fill="var(--color-quaternary)"
                        ></path>
                        <path
                          d="M10.2315 13.0663C10.1327 13.0664 10.0348 13.086 9.94364 13.124C9.85243 13.162 9.76964 13.2177 9.70001 13.2878L7.72179 15.2771C7.58156 15.4177 7.50281 15.6081 7.50281 15.8067C7.50281 16.0053 7.58156 16.1957 7.72179 16.3363C7.79147 16.4063 7.8743 16.4619 7.9655 16.4997C8.05671 16.5376 8.15449 16.5571 8.25325 16.5571C8.35201 16.5571 8.44981 16.5376 8.54101 16.4997C8.63221 16.4619 8.71503 16.4063 8.78471 16.3363L10.7629 14.347C10.8327 14.2771 10.8879 14.1941 10.9255 14.1027C10.9631 14.0114 10.9822 13.9135 10.9819 13.8148C10.9815 13.716 10.9617 13.6183 10.9234 13.5272C10.8852 13.4361 10.8294 13.3535 10.7592 13.2841C10.6188 13.1448 10.4292 13.0665 10.2315 13.0663Z"
                          fill="var(--color-quaternary)"
                        ></path>
                        <path
                          d="M10.2353 13.0664C10.1367 13.0659 10.0391 13.085 9.94786 13.1223C9.85667 13.1597 9.77374 13.2147 9.70381 13.2841C9.63357 13.3535 9.57774 13.4361 9.53952 13.5272C9.5013 13.6183 9.48143 13.716 9.48108 13.8148C9.48073 13.9135 9.4999 14.0114 9.53747 14.1027C9.57504 14.1941 9.63028 14.2771 9.70002 14.347L11.6783 16.3363C11.7479 16.4063 11.8308 16.4619 11.922 16.4998C12.0132 16.5376 12.111 16.5571 12.2097 16.5571C12.3085 16.5571 12.4063 16.5376 12.4975 16.4998C12.5887 16.4619 12.6715 16.4063 12.7412 16.3363C12.8819 16.1962 12.9614 16.0061 12.9621 15.8075C12.9628 15.6089 12.8847 15.4182 12.745 15.2771L10.763 13.2878C10.6233 13.1471 10.4335 13.0675 10.2353 13.0664Z"
                          fill="var(--color-quaternary)"
                        ></path>
                        <path
                          d="M1.49923 2.62171C1.30058 2.6219 1.11013 2.70089 0.96967 2.84135C0.829205 2.98181 0.750198 3.17227 0.75 3.37091V13.8747C0.75 15.3796 2.08406 16.532 3.6214 16.532H5.75093C5.94957 16.5318 6.14003 16.4528 6.28049 16.3123C6.42095 16.1719 6.49995 15.9814 6.50015 15.7828C6.49995 15.5841 6.42095 15.3937 6.28049 15.2532C6.14003 15.1128 5.94957 15.0338 5.75093 15.0336H3.6214C2.8088 15.0336 2.25214 14.4854 2.25214 13.8747V3.37091C2.25204 3.27224 2.23247 3.17456 2.19455 3.08347C2.15664 2.99237 2.10113 2.90965 2.03118 2.84005C1.96124 2.77045 1.87824 2.71533 1.78696 2.67786C1.69568 2.6404 1.5979 2.62132 1.49923 2.62171ZM18.7644 11.7599C18.6654 11.7595 18.5673 11.7787 18.4758 11.8164C18.3843 11.8541 18.3011 11.9096 18.2311 11.9795C18.1611 12.0495 18.1057 12.1327 18.068 12.2242C18.0303 12.3157 18.0111 12.4138 18.0115 12.5128V13.8747C18.0115 14.4854 17.4548 15.0336 16.6422 15.0336H14.7489C14.5503 15.0338 14.3598 15.1128 14.2193 15.2532C14.0789 15.3937 13.9999 15.5841 13.9997 15.7828C13.9999 15.9814 14.0789 16.1719 14.2193 16.3123C14.3598 16.4528 14.5503 16.5318 14.7489 16.532H16.6422C18.1796 16.532 19.5136 15.3796 19.5136 13.8747V12.5128C19.514 12.4141 19.4949 12.3164 19.4574 12.2251C19.42 12.1338 19.3649 12.0508 19.2953 11.9809C19.2257 11.9109 19.1429 11.8554 19.0518 11.8175C18.9608 11.7796 18.8631 11.76 18.7644 11.7599Z"
                          fill="var(--color-quaternary)"
                        ></path>
                        <path
                          d="M3.6214 0.713562C2.08514 0.713543 0.75 1.86619 0.75 3.37088C0.75 4.87556 2.08514 6.03188 3.6214 6.03188C3.82005 6.03168 4.01049 5.95269 4.15095 5.81223C4.29141 5.67177 4.37041 5.48131 4.37061 5.28267C4.37099 5.184 4.35191 5.08622 4.31444 4.99493C4.27697 4.90365 4.22186 4.82067 4.15226 4.75073C4.08266 4.68078 3.99994 4.62526 3.90885 4.58734C3.81775 4.54942 3.72008 4.52986 3.6214 4.52976C2.81475 4.52976 2.25214 3.97492 2.25214 3.37088C2.25214 2.76683 2.81475 2.21197 3.6214 2.21199H14.963C15.4851 2.21199 15.893 2.61991 15.893 3.14205V5.28267C15.8932 5.48131 15.9722 5.67177 16.1127 5.81223C16.2531 5.95269 16.4436 6.03168 16.6422 6.03188C16.7409 6.03227 16.8387 6.01318 16.93 5.97571C17.0212 5.93825 17.1042 5.88314 17.1742 5.81354C17.2441 5.74394 17.2996 5.66122 17.3376 5.57012C17.3755 5.47903 17.395 5.38134 17.3951 5.28267V3.14205C17.3951 1.8093 16.2957 0.713562 14.963 0.713562H3.6214Z"
                          fill="var(--color-quaternary)"
                        ></path>
                      </svg>
                    </span>
                    <span>Deposit</span>
                  </span>
                  <span className="shimmer"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Header End */}
      <div className="flex items-start justify-start w-full  md:mt-[42px]">
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-full"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="' bg-transparent w-full h-full">
            <div className="w-full flex h-[calc(100dvh-42px)] lg:h-[calc(100dvh-54px)]">
              <iframe
                src={iFrame}
                title="AVIATOR"
                className="w-full h-full flex-grow no-scrollbar"
                allowFullscreen={true}
              ></iframe>
            </div>
          </div>
          <div className="px-[6px]"></div>
          <div className="py-1 px-[6px]"></div>
        </div>
      </div>

      {/* Mobile footer */}
      <div className="fixed bottom-0 w-full md:hidden bg-transparent">
        <div className="flex flex-col shadow-lg autoAnimate">
          <div
            id="bottomTabContainer"
            className="w-full h-[42px] pr-[4px] flex items-center justify-between gap-1 bg-transparent"
          >
            <div
              id="logoContainer"
              className="logo flex w-full h-full md:w-fit"
            >
              <div
                onClick={() => navigate("/")}
                className="flex items-center w-[40px] md:w-fit justify-center lg:hidden back-from-iframe"
              >
                <button
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-8 h-6 flex ml-[4px] items-center bg-bg_Primary2 rounded-md justify-center active:scale-150 cursor-pointer"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 7 12"
                    fill="var(--bg-active-primary)"
                  >
                    <path
                      d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                      fill="var(--bg-active-primary)"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IFrame;
