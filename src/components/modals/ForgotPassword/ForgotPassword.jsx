import { useEffect, useRef, useState } from "react";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch } from "react-redux";
import {
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../../redux/features/auth/authApi";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import {
  setShowForgotPasswordModal,
  setShowLoginModal,
} from "../../../redux/features/global/globalSlice";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import toast from "react-hot-toast";
import images from "../../../assets/images";
import { useLanguage } from "../../../context/LanguageProvider";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";

const ForgotPassword = () => {
  const { valueByLanguage } = useLanguage();
  const [handleForgotPassword] = useForgotPasswordMutation();
  const [passType, setPassType] = useState(true);
  const [confirmPassType, setConfirmPassType] = useState(true);
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState({});
  const [getOTP] = useGetOtpMutation();
  const { register, handleSubmit } = useForm();
  const { logo } = useLogo();
  const [timer, setTimer] = useState(null);
  const forgotPassRef = useRef();
  useCloseModalClickOutside(forgotPassRef, () => {
    closeForgotPasswordModal();
  });

  const handleMobileInputChange = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const handleOTP = async () => {
    if (mobile.length > 0) {
      const res = await getOTP({ mobile }).unwrap();

      if (res?.success) {
        setTimer(60);
        setOTP({
          orderId: res?.result?.orderId,
          otpMethod: "sms",
        });
        toast.success(res?.result?.message);
      } else {
        toast.error(res?.error?.errorMessage);
      }
    }
  };

  const onSubmit = async (data) => {
    const forgotPasswordData = {
      username: mobile,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      orderId: OTP.orderId,
      otpMethod: OTP.otpMethod,
    };

    const result = await handleForgotPassword(forgotPasswordData).unwrap();
    if (result.success) {
      toast.success("Password updated successfully");
      closeForgotPasswordModal();
      dispatch(setShowLoginModal(true));
    } else {
      toast.error(result?.error?.loginName?.[0]?.description);
    }
  };

  const closeForgotPasswordModal = () => {
    dispatch(setShowForgotPasswordModal(false));
  };

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(null);
    }
  }, [timer]);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 overflow-hidden flex h-[100dvh] w-dvw items-center justify-center bg-bg_color_popUpParentBg overflow-y-hidden z-[10000]">
      <div
        ref={forgotPassRef}
        className="relative w-[90%]  sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px] rounded-[5px] max-h-[90%] overflow-y-auto  pt-6 pb-7 px-4 bg-bg_color_LoginPopUpBg popUpOpenAnimation max-h-[80%] overflow-y-auto"
      >
        <button
          onClick={closeForgotPasswordModal}
          className="absolute top-1 right-1 active:scale-95 transition-all duration-300"
        >
          <svg
            className="cursor-pointer z-50"
            height="24"
            width="24"
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
              ></path>
              <path
                fill="white"
                d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z"
              ></path>
            </g>
          </svg>
        </button>
        <h1 className="hidden">Login to 10sports</h1>
        <div
          className="w-full  flex flex-col justify-center items-center py-2  gap-y-6 h-max"
          id="loginRegLayOut"
        >
          <div className="w-full max-h-[35px] flex items-center justify-between">
            <p className=" text-text_color_loginTextColor font-bold text-[22px]">
              Forgot Password
            </p>
            <div className="relative overflow-hidden max-h-[60px] max-w-[141.428571429px] h-auto ">
              <img
                src={logo}
                alt="10sports-Login"
                style={{
                  height: Settings.logo_height,
                  width: Settings.logo_width,
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="w-full h-max grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center justify-center">
            <div className="flex flex-col  items-start gap-y-4 h-max col-span-1 lg:col-span-2 w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full gap-y-4 flex flex-col"
                id="loginForm"
              >
                <div title="loginFormMonileUserIdInput" className=" w-full ">
                  <div
                    title="Mobile Number"
                    className="flex flex-col w-full relative"
                  >
                    <span className="text-text_color_loginTextColor font-normal text-sm w-full px-1 pb-1">
                      Mobile Number
                    </span>
                    <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1.5 border-border_color_primary1 py-2.5">
                      <div className="flex-shrink-0 w-max">
                        <div className="w-max  transition-none h-full">
                          <button
                            type="button"
                            className="flex w-max items-center  h-full justify-between  px-1 text-text_color_loginInputTextColor"
                            disabled=""
                          >
                            <div className=" flex items-center justify-center h-full">
                              +91
                              <div className="relative overflow-hidden w-max h-max ml-1">
                                <img
                                  src={images.india}
                                  alt="India"
                                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                                  className="  w-4 h-4"
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <input
                        onChange={(e) => handleMobileInputChange(e)}
                        className="text-text_color_loginInputTextColor bg-transparent px-1.5 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                        placeholder="Enter  Mobile/Username"
                        aria-label="Mobile Number"
                        id="loginFormMobileUserIdInput"
                        type="text"
                        required
                      />
                      <div className="flex-shrink-0 w-max">
                        <div className="w-max  transition-none h-full">
                          {timer ? (
                            <button
                              type="button"
                              className="flex w-max items-center  h-full justify-between  px-1 text-text_color_loginInputTextColor bg-bg_color_LoginBtnBgColor py-1 rounded-sm text-primary cursor-text"
                            >
                              Retry in {timer}
                            </button>
                          ) : (
                            <button
                              onClick={handleOTP}
                              type="button"
                              className="flex w-max items-center  h-full justify-between  px-1 text-text_color_loginInputTextColor bg-bg_color_LoginBtnBgColor py-1 rounded-sm text-primary"
                            >
                              Get OTP Message
                            </button>
                          )}
                        </div>
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
                      OTP
                    </span>
                    <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm  bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1.5 border-border_color_primary1 py-1.5">
                      <input
                        {...register("otp", { required: true })}
                        className="text-text_color_loginInputTextColor bg-transparent px-1.5 flex-grow min-w-0 border-none focus:outline-none bg-transparent py-0.5"
                        placeholder="Enter your OTP"
                        aria-label="Password"
                        id="loginFormPasswordInput"
                        type="text"
                        maxLength={6}
                      />
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
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            fill="var(--bg-active-primary)"
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
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 512 512"
                            fill="var(--bg-active-primary)"
                            title="View Password"
                            className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                          >
                            <title>View Password</title>
                            <path
                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                              fill="none"
                              stroke="var(--bg-active-primary)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                            ></path>
                            <circle
                              cx="256"
                              cy="256"
                              r="80"
                              fill="none"
                              stroke="var(--bg-active-primary)"
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
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            fill="var(--bg-active-primary)"
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
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 512 512"
                            fill="var(--bg-active-primary)"
                            title="View Password"
                            className="cursor-pointer active:scale-95 transition-all duration-300 ml-1"
                          >
                            <title>View Password</title>
                            <path
                              d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                              fill="none"
                              stroke="var(--bg-active-primary)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="32"
                            ></path>
                            <circle
                              cx="256"
                              cy="256"
                              r="80"
                              fill="none"
                              stroke="var(--bg-active-primary)"
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

                <div title="loginButton" className=" w-full">
                  <button
                    type="submit"
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-full text-text_color_loginButtonTextColor  bg-bg_color_LoginBtnBgColor shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base 
                    cursor-pointer text-primary"
                  >
                    {languageValue(
                      valueByLanguage,
                      LanguageKey.CHANGE_PASSWORD,
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
