import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../context/LanguageProvider";
import useBalance from "../../../hooks/balance";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Settings } from "../../../api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/auth/authSlice";
import { setShowRegisterModal } from "../../../redux/features/global/globalSlice";
import { useLogo } from "../../../context/ApiProvider";
import images from "../../../assets/images";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";

const RegistrationForm = ({
  mobile,
  setOTP,
  OTP,
  showRegister,
  registerRef,
  showLogin,
  setShowRegister,
}) => {
  const dispatch = useDispatch();
  const { logo } = useLogo();
  const [countDown, setCountDown] = useState(45);
  const { valueByLanguage } = useLanguage();
  const referralCode = localStorage.getItem("referralCode");
  const { refetchBalance } = useBalance();
  const [passType, setPassType] = useState(true);
  const [confirmPassType, setConfirmPassType] = useState(true);
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  useEffect(() => {
    if (showRegister) {
      if (countDown > 0) {
        setTimeout(() => {
          setCountDown((prev) => prev - 1);
        }, 1000);
      }
    }
  }, [countDown, showRegister]);

  const handleInput = (index, e) => {
    const newValue = e.target.value.slice(0, 1);
    const newOtpValues = [...otpValues];
    newOtpValues[index] = newValue;
    setOtpValues(newOtpValues);
    if (newValue && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setOTP({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: otpValues.join(""),
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: OTP.orderId,
      otpMethod: OTP.otpMethod,
    };

    const result = await handleRegister(registerData).unwrap();
    if (result.success) {
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        refetchBalance();
        dispatch(setShowRegisterModal(false));
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
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
          onClick={() => dispatch(setShowRegisterModal(false))}
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
        <h1 className="hidden">Register to {Settings.siteTitle}</h1>
        <div className="relative z-10 h-max px-2 w-full">
          <div
            className="w-full flex flex-col justify-center items-center gap-y-6 h-max"
            id="loginRegLayOut"
          >
            <div className="w-full max-h-[35px] flex items-center justify-between">
              <p className="text-text_color_loginTextColor font-bold text-[22px]">
                {languageValue(valueByLanguage, LanguageKey.REGISTER)}
              </p>
              <div className="relative overflow-hidden max-h-[60px] max-w-[141.428571429px] h-auto flex items-center justify-end">
                <img
                  src={logo}
                  alt="10sports-Register"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="max-h-[60px] max-w-[141.428571429px] h-auto"
                />
              </div>
            </div>
            <div className="w-full h-max grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center justify-center">
              <div className="flex flex-col px-2 items-start gap-y-4 w-full col-span-1 lg:col-span-2 w-full">
                <div className="w-full gap-y-4 flex flex-col">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
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
                      <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1 py-1 border-border_color_activeInput">
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
                          className="px-2 bg-transparent flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                          placeholder="Phone Number"
                          autoComplete="tel"
                          aria-label="Mobile Number"
                          id="mobile-no-input"
                          type="tel"
                          readOnly
                          value={mobile}
                        />
                        <div className="flex-shrink-0 w-max">
                          <button
                            onClick={() => setShowRegister(false)}
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato-bold h-fit transition-all ease-in-out text-xs whitespace-nowrap mr-1 active:scale-[0.98] active:opacity-95 disabled:bg-bg_color_slate500 disabled:opacity-70 font-medium relative flex items-center justify-center bg-bg_color_loaderBg px-2 aspect-square rounded-full cursor-pointer"
                            type="button"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="var(--icon-color-brand-secondary)"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_3085_24)">
                                <path
                                  d="M3.5 24H18.5C19.4297 23.9974 20.3204 23.626 20.9765 22.9674C21.6327 22.3087 22.0008 21.4167 22 20.487V12.95C22 12.6848 21.8946 12.4304 21.7071 12.2429C21.5196 12.0554 21.2652 11.95 21 11.95C20.7348 11.95 20.4804 12.0554 20.2929 12.2429C20.1054 12.4304 20 12.6848 20 12.95V20.487C20.0013 20.8864 19.8441 21.2701 19.5629 21.5537C19.2817 21.8374 18.8994 21.9979 18.5 22H3.5C3.10057 21.9979 2.7183 21.8374 2.43708 21.5537C2.15587 21.2701 1.99867 20.8864 2 20.487V5.513C1.99867 5.11357 2.15587 4.72993 2.43708 4.44627C2.7183 4.16262 3.10057 4.00212 3.5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H3.5C2.57031 2.00265 1.67964 2.37403 1.02346 3.03265C0.367281 3.69126 -0.000797091 4.5833 1.29611e-06 5.513V20.487C-0.000797091 21.4167 0.367281 22.3087 1.02346 22.9674C1.67964 23.626 2.57031 23.9974 3.5 24Z"
                                  fill="var(--icon-color-brand-secondary)"
                                />
                                <path
                                  d="M9.45499 10.5441L8.66599 14.1581C8.63027 14.322 8.63638 14.4923 8.68373 14.6532C8.73109 14.8142 8.81818 14.9606 8.93699 15.0791C9.05742 15.1946 9.20393 15.2793 9.36408 15.3261C9.52423 15.373 9.69331 15.3805 9.85699 15.3481L13.463 14.5571C13.6502 14.516 13.8217 14.4219 13.957 14.2861L23.071 5.1721C23.3496 4.89351 23.5706 4.56277 23.7214 4.19876C23.8722 3.83475 23.9498 3.4446 23.9498 3.0506C23.9498 2.65659 23.8722 2.26644 23.7214 1.90243C23.5706 1.53842 23.3496 1.20768 23.071 0.929096C22.4998 0.383232 21.7401 0.0786133 20.95 0.0786133C20.1599 0.0786133 19.4002 0.383232 18.829 0.929096L9.72899 10.0521C9.59241 10.1865 9.4973 10.3572 9.45499 10.5441ZM20.243 2.3441C20.4332 2.16184 20.6865 2.06009 20.95 2.06009C21.2135 2.06009 21.4667 2.16184 21.657 2.3441C21.842 2.53272 21.9456 2.78639 21.9456 3.0506C21.9456 3.3148 21.842 3.56847 21.657 3.7571L20.95 4.4641L19.536 3.0501L20.243 2.3441ZM11.343 11.2581L18.117 4.4671L19.517 5.8741L12.74 12.6671L10.945 13.0611L11.343 11.2581Z"
                                  fill="var(--icon-color-brand-secondary)"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_3085_24">
                                  <rect width={24} height={24} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-start w-full justify-between leading-normal px-1">
                        <div className="w-max min-h-[18px] h-max">
                          <div className="text-x text-text_color_error_message" />
                        </div>
                        <span className="text-xs bg-bg_color_LoginBtnBgColor text-transparent bg-clip-text text-end">
                          {mobile?.length}/10
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 w-full flex flex-col gap-y-0.5 relative">
                      <h1 className="text-sm font-medium text-text_color_primary ml-1">
                        Enter OTP
                      </h1>
                      <div className="grid grid-cols-4 gap-4">
                        {[...Array(4)].map((_, index) => (
                          <div key={index} className="relative">
                            <input
                              ref={(el) => (inputs.current[index] = el)}
                              onChange={(e) => handleInput(index, e)}
                              value={otpValues[index]}
                              inputMode="numeric"
                              className="block w-full focus:outline-none w-full h-12 text-center text-xl bg-bg_color_input_bg border rounded-lg text-text_color_primary focus:border-border_color_activeInput focus:ring-0 border-border_color_primary"
                              placeholder="−"
                              aria-label="Digit 1 of OTP"
                              autoComplete="one-time-code"
                              pattern="[0-9]*"
                              type="text"
                              defaultValue
                            />
                          </div>
                        ))}
                      </div>
                      {countDown <= 0 ? (
                        <div
                          onClick={handleOTP}
                          className="flex justify-end mt-1"
                        >
                          <div className="bg-bg_text_brand_primary font-bold text-transparent text-xs sm:text-sm bg-clip-text opacity-70 cursor-not-allowed">
                            Resend
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-end mt-1">
                          <div className="bg-bg_text_brand_primary font-bold text-transparent text-xs sm:text-sm bg-clip-text opacity-70 cursor-not-allowed">
                            Resend OTP in 00:{countDown}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        title="Password"
                        className="flex flex-col w-full relative"
                      >
                        <span className="text-text_color_loginTextColor font-normal text-sm w-full px-1 pb-1">
                          Password
                        </span>
                        <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm  bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1.5 border-border_color_primary1 py-1.5">
                          <input
                            {...register("password", { required: true })}
                            className="text-text_color_loginInputTextColor bg-transparent px-1.5 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                            placeholder="Enter your Password"
                            aria-label="Password"
                            id="loginFormPasswordInput"
                            type={passType ? "text" : "password"}
                          />
                          <div
                            onClick={() => setPassType((prev) => !prev)}
                            className="flex-shrink-0 w-max"
                          >
                            {passType ? (
                              <svg
                                xmlns="http:www.w3.org/2000/svg"
                                height="24"
                                width="24"
                                fill="var(--icon-color-brand-secondary)"
                                viewBox="0 0 512 512"
                                title="Hide Password"
                                className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                              >
                                <title>Hide Password</title>
                                <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"></path>
                                <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"></path>
                              </svg>
                            ) : (
                              <svg
                                xmlns="http:www.w3.org/2000/svg"
                                height="24"
                                width="24"
                                viewBox="0 0 512 512"
                                fill="var(--icon-color-brand-secondary)"
                                title="View Password"
                                className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                              >
                                <title>View Password</title>
                                <path
                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                  fill="none"
                                  stroke="var(--icon-color-brand-secondary)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="32"
                                ></path>
                                <circle
                                  cx="256"
                                  cy="256"
                                  r="80"
                                  fill="none"
                                  stroke="var(--icon-color-brand-secondary)"
                                  strokeMiterlimit="10"
                                  strokeWidth="32"
                                ></circle>
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="flex items-start w-full justify-between leading-normal px-1">
                          <div className=" w-max  h-max"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        title="Password"
                        className="flex flex-col w-full relative"
                      >
                        <span className="text-text_color_loginTextColor font-normal text-sm w-full px-1 pb-1">
                          Confirm Password
                        </span>
                        <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm  bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1.5 border-border_color_primary1 py-1.5">
                          <input
                            {...register("confirmPassword", { required: true })}
                            className="text-text_color_loginInputTextColor bg-transparent px-1.5 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                            placeholder="Enter your Password"
                            aria-label="Password"
                            id="loginFormPasswordInput"
                            type={confirmPassType ? "text" : "password"}
                          />
                          <div
                            onClick={() => setConfirmPassType((prev) => !prev)}
                            className="flex-shrink-0 w-max"
                          >
                            {confirmPassType ? (
                              <svg
                                xmlns="http:www.w3.org/2000/svg"
                                height="24"
                                width="24"
                                fill="var(--icon-color-brand-secondary)"
                                viewBox="0 0 512 512"
                                title="Hide Password"
                                className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                              >
                                <title>Hide Password</title>
                                <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"></path>
                                <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"></path>
                              </svg>
                            ) : (
                              <svg
                                xmlns="http:www.w3.org/2000/svg"
                                height="24"
                                width="24"
                                viewBox="0 0 512 512"
                                fill="var(--icon-color-brand-secondary)"
                                title="View Password"
                                className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                              >
                                <title>View Password</title>
                                <path
                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                  fill="none"
                                  stroke="var(--icon-color-brand-secondary)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="32"
                                ></path>
                                <circle
                                  cx="256"
                                  cy="256"
                                  r="80"
                                  fill="none"
                                  stroke="var(--icon-color-brand-secondary)"
                                  strokeMiterlimit="10"
                                  strokeWidth="32"
                                ></circle>
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="flex items-start w-full justify-between leading-normal px-1">
                          <div className=" w-max  h-max"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        title="Password"
                        className="flex flex-col w-full relative"
                      >
                        <span className="text-text_color_loginTextColor font-normal text-sm w-full px-1 pb-1">
                          Referral Code
                        </span>
                        <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm  bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1.5 border-border_color_primary1 py-1.5">
                          <input
                            readOnly={referralCode}
                            {...register("referralCode")}
                            className="text-text_color_loginInputTextColor bg-transparent px-1.5 flex-grow min-w-0 border-none focus:outline-none  py-0.5 bg-transparent"
                            placeholder="Enter referral code(Optional)"
                            aria-label="Password"
                            id="loginFormPasswordInput"
                            type={"text"}
                            defaultValue={referralCode}
                          />
                        </div>
                        <div className="flex items-start w-full justify-between leading-normal px-1">
                          <div className=" w-max  h-max"></div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-5 w-full h-fit bg-bg_color_LoginBtnBgColor text-text_color_loginButtonTextColor transition-all ease-in-out text-sm whitespace-nowrap p-2 rounded-lg active:scale-[0.98] active:opacity-95 disabled:opacity-70 font-medium relative flex items-center justify-center font-bold"
                    >
                      Register
                    </button>
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

export default RegistrationForm;
