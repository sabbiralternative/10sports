import toast from "react-hot-toast";
import { API, Settings } from "../../../api";
import images from "../../../assets/images";
import useWhatsApp from "../../../hooks/whatsapp";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import getOtpOnWhatsapp from "../../../hooks/getOtpOnWhatsapp";

const GetOTP = ({
  registerRef,
  closeModal,
  logo,
  showLogin,
  setShowRegister,
  mobileNo,
  setOrderId,
  setMobileNo,
}) => {
  const { data: socialLink } = useWhatsApp();
  const getOtp = async (e) => {
    e.preventDefault();
    /* Get Otp based on settings*/
    if (Settings.otp) {
      const otpData = {
        mobile: mobileNo,
      };

      const res = await AxiosSecure.post(API.otp, otpData);
      const data = res.data;
      if (data?.success) {
        setOrderId({
          orderId: data?.result?.orderId,
          otpMethod: "sms",
        });
        toast.success(data?.result?.message);
        setShowRegister(true);
      } else {
        toast.error(data?.error?.errorMessage);
      }
    } else {
      setShowRegister(true);
    }
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobileNo(e.target.value);
    }
  };

  const handleGetOtpOnWhatsapp = async () => {
    await getOtpOnWhatsapp(mobileNo, setOrderId, setShowRegister);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 overflow-hidden flex bg-bg_color_popUpParentBg overflow-y-hidden z-[10000] h-[100dvh] w-dvw items-center justify-center">
      <div
        ref={registerRef}
        className="relative relative w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px] rounded-[5px] max-h-[90%] overflow-y-auto pt-6 pb-7 px-4 bg-bg_color_LoginPopUpBg popUpOpenAnimation1"
        role="dialog"
        aria-modal="true"
        title="undefined:Main Dialog"
      >
        <button
          onClick={closeModal}
          type="button"
          className="absolute top-1 right-1 active:scale-95 transition-all duration-300"
        >
          <svg
            className="cursor-pointer z-50"
            height={24}
            width={24}
            fill="var(--icon-color-secondary)"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="circle-xmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g className="fa-duotone-group">
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
              />
              <path
                fill="white"
                d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z"
              />
            </g>
          </svg>
        </button>
        <h1 className="hidden">Register to 10sports</h1>
        <div className="relative z-10 h-max px-2 w-full">
          <div
            className="w-full flex flex-col justify-center items-center gap-y-6 h-max"
            id="loginRegLayOut"
          >
            <div className="w-full max-h-[35px] flex items-center justify-between">
              <p className="text-text_color_loginTextColor font-bold text-[22px]">
                Sign Up
              </p>
              <div className="relative overflow-hidden max-h-[60px] max-w-[141.428571429px] h-auto flex items-center justify-end">
                <img
                  src={logo}
                  alt="10sports-Register"
                  style={{
                    height: Settings.logoHeight,
                    width: Settings.logoWidth,
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="w-full h-max grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center justify-center">
              <div className="flex flex-col px-2 items-start gap-y-4 w-full col-span-1 lg:col-span-2 w-full">
                <div className="w-full gap-y-4 flex flex-col">
                  <form
                    onSubmit={getOtp}
                    className="w-full h-max"
                    id="signUpForm"
                  >
                    <div
                      title="Mobile Number"
                      className="flex flex-col w-full relative"
                    >
                      <p className="text-sm font-medium text-text_color_primary ml-1">
                        Mobile Number
                      </p>
                      <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1 py-2 border-border_color_primary1">
                        <div className="flex-shrink-0 w-max">
                          <div className="w-max transition-none h-full">
                            <button
                              type="button"
                              className="flex w-max items-center h-full justify-between px-1 text-text_color_loginInputTextColor"
                              disabled
                            >
                              <div className="flex items-center justify-center h-full">
                                +91
                                <div className="relative overflow-hidden mt-[1.5px] ml-1">
                                  <img
                                    src={images.india}
                                    alt="India"
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                                    className="w-[18px] h-[18px]"
                                  />
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                        <input
                          onChange={(e) => handleMobileNo(e)}
                          value={mobileNo}
                          className="px-2 bg-transparent flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                          placeholder="Phone Number"
                          autoComplete="tel"
                          aria-label="Mobile Number"
                          id="mobile-no-input"
                          type="tel"
                          defaultValue
                        />
                      </div>
                      <div className="flex items-start w-full justify-between leading-normal px-1">
                        <div className="w-max min-h-[18px] h-max" />
                        <span className="text-xs bg-bg_color_LoginBtnBgColor text-transparent bg-clip-text text-end">
                          0/10
                        </span>
                      </div>
                    </div>
                    <div className="w-full py-2 grid grid-cols-1 xs:grid-cols-2 gap-2 overflow-hidden mt-2">
                      <button
                        disabled={Settings.otp && mobileNo?.length < 10}
                        type="submit"
                        className="w-full h-fit text-xs sm:text-sm transition-all ease-in-out whitespace-nowrap p-2 rounded-lg disabled:opacity-70 font-medium flex gap-x-2.5 items-center justify-center font-bold overflow-hidden bg-bg_color_input_bg border-border_color_primary1 text-text_color_loginInputTextColor relative"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--icon-color-secondary)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[18px] w-[18px]"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>
                          {Settings.otp ? "Get OTP on SMS" : "Proceed"}
                        </span>
                        <span className="shimmer" />
                      </button>
                      {Settings.otpWhatsapp && (
                        <button
                          onClick={handleGetOtpOnWhatsapp}
                          disabled={mobileNo?.length < 10}
                          type="button"
                          className="w-full h-fit text-xs sm:text-sm transition-all ease-in-out whitespace-nowrap p-2 rounded-lg disabled:opacity-70 font-medium flex gap-x-2.5 items-center justify-center font-bold overflow-hidden text-text_color_loginTextColor bg-bg_color_LoginBtnBgColor border-border_color_brand_secondary1 relative text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--text-primary)"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-[18px] w-[18px]"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span>Get OTP on WhatsApp</span>
                          <span className="shimmer" />
                        </button>
                      )}
                      {socialLink?.result?.whatsapplink && (
                        <button
                          onClick={() =>
                            getWhatsAppId(socialLink?.result?.whatsapplink)
                          }
                          type="button"
                          className="w-full h-fit text-xs sm:text-sm transition-all ease-in-out whitespace-nowrap p-2 rounded-lg disabled:opacity-70 font-medium flex gap-x-2.5 items-center justify-center font-bold overflow-hidden text-text_color_loginTextColor bg-bg_color_LoginBtnBgColor border-border_color_brand_secondary1 relative text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--text-primary)"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-[18px] w-[18px]"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span>Get WhatsApp Id</span>
                          <span className="shimmer" />
                        </button>
                      )}
                    </div>
                  </form>
                  <div className="w-full flex items-center gap-4">
                    <div className="h-px flex-1 bg-bg_color_quaternary3" />
                    <span className="text-text_color_loginTextColor text-sm font-medium">
                      Or Register With
                    </span>
                    <div className="h-px flex-1 bg-bg_color_quaternary3" />
                  </div>
                  <div
                    title="loginWithGoogle"
                    className="w-full flex items-center justify-between gap-x-2"
                  >
                    <div className="w-full">
                      <button
                        className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full bg-transparent font-medium rounded-lg text-[12px] xs:text-[15px] px-5 py-2 md:text-base flex items-center justify-center gap-x-2 border border-border_color_primary1 cursor-pointer"
                        type="button"
                      >
                        <span>
                          <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="Fill Ion Icons"
                              clipPath="url(#clip0_2432_31527)"
                            >
                              <path
                                id="Vector"
                                d="M19.9946 8.26138L11.8368 8.26099C11.4766 8.26099 11.1846 8.55294 11.1846 8.91317V11.5192C11.1846 11.8794 11.4766 12.1714 11.8368 12.1714H16.4307C15.9277 13.4769 14.9888 14.5702 13.7909 15.2649L15.7498 18.6559C18.892 16.8386 20.7498 13.65 20.7498 10.0805C20.7498 9.57228 20.7123 9.20896 20.6374 8.79985C20.5804 8.48903 20.3106 8.26138 19.9946 8.26138Z"
                                fill="#167EE6"
                              />
                              <path
                                id="Vector_2"
                                d="M10.7501 16.0871C8.50185 16.0871 6.5392 14.8587 5.4851 13.041L2.09424 14.9955C3.81982 17.9862 7.0524 20.0001 10.7501 20.0001C12.564 20.0001 14.2756 19.5117 15.7501 18.6606V18.6559L13.7912 15.2649C12.8952 15.7846 11.8583 16.0871 10.7501 16.0871Z"
                                fill="#12B347"
                              />
                              <path
                                id="Vector_3"
                                d="M15.75 18.6606V18.6559L13.7911 15.2649C12.8951 15.7845 11.8583 16.087 10.75 16.087V20.0001C12.5639 20.0001 14.2756 19.5117 15.75 18.6606Z"
                                fill="#0F993E"
                              />
                              <path
                                id="Vector_4"
                                d="M4.66305 9.99999C4.66305 8.89183 4.96547 7.85507 5.48504 6.95909L2.09418 5.00464C1.23836 6.47444 0.75 8.1814 0.75 9.99999C0.75 11.8186 1.23836 13.5255 2.09418 14.9953L5.48504 13.0409C4.96547 12.1449 4.66305 11.1082 4.66305 9.99999Z"
                                fill="#FFD500"
                              />
                              <path
                                id="Vector_5"
                                d="M10.7501 3.91305C12.2161 3.91305 13.5628 4.43398 14.6146 5.30051C14.8741 5.51426 15.2512 5.49883 15.4889 5.26113L17.3354 3.41465C17.6051 3.14496 17.5859 2.70352 17.2978 2.45359C15.5355 0.924726 13.2425 0 10.7501 0C7.0524 0 3.81982 2.01395 2.09424 5.00465L5.4851 6.9591C6.5392 5.14141 8.50186 3.91305 10.7501 3.91305Z"
                                fill="#FF4B26"
                              />
                              <path
                                id="Vector_6"
                                d="M14.6145 5.30051C14.874 5.51426 15.2512 5.49883 15.4889 5.26113L17.3354 3.41465C17.605 3.14496 17.5858 2.70352 17.2977 2.45359C15.5354 0.924688 13.2425 0 10.75 0V3.91305C12.216 3.91305 13.5627 4.43398 14.6145 5.30051Z"
                                fill="#D93F21"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2432_31527">
                                <rect
                                  width={20}
                                  height={20}
                                  fill="white"
                                  transform="translate(0.75)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="font-lato-bold font-semibold bg-bg_color_LoginBtnBgColor bg-clip-text text-transparent">
                          Google
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    title="registerNowButton"
                    className="w-full flex justify-center items-center text-xs md:text-sm lg:text-base"
                  >
                    <div className="text-text_color_loginTextColor">
                      Already have an account?
                      <span
                        onClick={showLogin}
                        className="font-lato-bold font-semibold underline ml-1 cursor-pointer text-text_color_loginButtonTextColor"
                      >
                        Login
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
