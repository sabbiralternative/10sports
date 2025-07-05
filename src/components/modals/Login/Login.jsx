import { useRef, useState } from "react";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import {
  setShowForgotPasswordModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import { useForm } from "react-hook-form";
import { Settings } from "../../../api";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/LanguageProvider";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";
import images from "../../../assets/images";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(Settings.registration ? "mobile" : "userId");
  const { valueByLanguage } = useLanguage();
  const [passwordType, setPasswordType] = useState(true);
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const loginRef = useRef();
  useCloseModalClickOutside(loginRef, () => {
    dispatch(setShowLoginModal(false));
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (result?.result?.changePassword) {
        dispatch(setShowLoginModal(false));
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const closeLoginModal = () => {
    dispatch(setShowLoginModal(false));
  };

  const showRegister = () => {
    closeLoginModal();
    dispatch(setShowRegisterModal(true));
  };

  const showForgotPassword = () => {
    closeLoginModal();
    dispatch(setShowForgotPasswordModal(true));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 overflow-hidden flex h-[100dvh] w-dvw items-center justify-center bg-bg_color_popUpParentBg overflow-y-hidden z-[10000]">
      <div
        ref={loginRef}
        className="relative w-[90%]  sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px] rounded-[5px] max-h-[90%] overflow-y-auto  pt-6 pb-7 px-4 bg-bg_color_LoginPopUpBg popUpOpenAnimation max-h-[80%] overflow-y-auto"
      >
        <button
          onClick={closeLoginModal}
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
              {languageValue(valueByLanguage, LanguageKey.LOGIN)}
            </p>
            <div className="relative overflow-hidden max-h-[60px] max-w-[141.428571429px] h-auto ">
              <img
                src={logo}
                alt="10sports-Login"
                style={{
                  height: Settings.logoHeight,
                  width: Settings.logoWidth,
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="w-full h-max grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center justify-center">
            <div className="flex flex-col  items-start gap-y-4 h-max col-span-1 lg:col-span-2 w-full">
              {Settings.registration && (
                <div className="w-full cursor-pointer bg-bg_color_loginTabsBg px-2 py-1.5 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300 ease-in-out relative">
                  <div
                    onClick={() => setTab("mobile")}
                    className={`min-w-[45%] cursor-pointer text-[13px] flex items-center justify-center py-2 md:text-sm lg:text-base font-bold leading-4  rounded-md  text-text_color_loginButtonTextColor ${
                      tab === "mobile"
                        ? "bg-bg_color_LoginBtnBgColor text-primary"
                        : "bg-transparent"
                    }`}
                  >
                    Mobile Number
                  </div>
                  <div
                    onClick={() => setTab("userId")}
                    className={`min-w-[45%] cursor-pointer text-[13px] flex items-center justify-center py-2 md:text-sm lg:text-base font-bold leading-4  rounded-md  text-text_color_loginTextColor ${
                      tab === "userId"
                        ? "bg-bg_color_LoginBtnBgColor text-primary"
                        : "bg-transparent"
                    }`}
                  >
                    User Id
                  </div>
                </div>
              )}

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
                      {tab === "mobile" ? "Mobile Number" : "User Id"}
                    </span>
                    <div className="flex items-center w-full text-text_color_loginInputTextColor text-sm bg-bg_color_input_bg rounded-lg border w-full focus-within:border-border_color_activeInput px-1.5 border-border_color_primary1 py-2.5">
                      {tab === "mobile" && (
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
                      )}
                      <input
                        {...register("username", { required: true })}
                        className="text-text_color_loginInputTextColor bg-transparent px-1.5 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                        placeholder={`${
                          tab === "mobile"
                            ? "Enter Mobile Number"
                            : "Enter User Id"
                        }`}
                        aria-label="Mobile Number"
                        id="loginFormMobileUserIdInput"
                        type="text"
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
                        type={passwordType ? "text" : "password"}
                      />
                      <div
                        onClick={() => setPasswordType((prev) => !prev)}
                        className="flex-shrink-0 w-max"
                      >
                        {passwordType ? (
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
                  {Settings.registration && (
                    <div className="w-full flex justify-end items-end">
                      <button
                        onClick={showForgotPassword}
                        type="button"
                        title="forgotPassword"
                        className=" w-max text-xs cursor-pointer  underline text-text_color_loginTextColor  mt-1.5 font-lato md:text-xs lg:text-sm"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  )}
                </div>
                <div title="loginButton" className=" w-full">
                  <button
                    type="submit"
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-full text-text_color_loginButtonTextColor  bg-bg_color_LoginBtnBgColor shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base 
                    cursor-pointer text-primary"
                  >
                    {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                  </button>
                </div>
                {Settings.demoLogin && (
                  <div title="loginButton" className=" w-full">
                    <button
                      onClick={loginWithDemo}
                      type="button"
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-full text-text_color_loginButtonTextColor  bg-bg_color_LoginBtnBgColor shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base 
        cursor-pointer text-primary
        "
                    >
                      Demo
                    </button>
                  </div>
                )}
              </form>
              <div className="w-full flex items-center gap-4">
                <div className="h-px flex-1 bg-bg_color_quaternary3"></div>
                <span className="text-text_color_loginTextColor  text-sm font-medium uppercase">
                  OR
                </span>
                <div className="h-px flex-1 bg-bg_color_quaternary3"></div>
              </div>
              <div
                title="loginWithGoogle"
                className=" w-full flex items-center justify-between gap-x-2"
              >
                <div className=" w-full flex items-center justify-center cursor-pointer">
                  <button
                    disabled
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-full font-medium text-[12px] xs:text-[15px] px-5 py-2  flex items-center justify-center gap-x-2 border rounded-lg font-lato-bold lg:text-base bg-transparent border border-border_color_primary1 text-text_color_loginTextColor  
      cursor-pointer
      "
                    type="button"
                  >
                    <span>
                      <svg
                        width="21"
                        height="20"
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
                          ></path>
                          <path
                            id="Vector_2"
                            d="M10.7501 16.0871C8.50185 16.0871 6.5392 14.8587 5.4851 13.041L2.09424 14.9955C3.81982 17.9862 7.0524 20.0001 10.7501 20.0001C12.564 20.0001 14.2756 19.5117 15.7501 18.6606V18.6559L13.7912 15.2649C12.8952 15.7846 11.8583 16.0871 10.7501 16.0871Z"
                            fill="#12B347"
                          ></path>
                          <path
                            id="Vector_3"
                            d="M15.75 18.6606V18.6559L13.7911 15.2649C12.8951 15.7845 11.8583 16.087 10.75 16.087V20.0001C12.5639 20.0001 14.2756 19.5117 15.75 18.6606Z"
                            fill="#0F993E"
                          ></path>
                          <path
                            id="Vector_4"
                            d="M4.66305 9.99999C4.66305 8.89183 4.96547 7.85507 5.48504 6.95909L2.09418 5.00464C1.23836 6.47444 0.75 8.1814 0.75 9.99999C0.75 11.8186 1.23836 13.5255 2.09418 14.9953L5.48504 13.0409C4.96547 12.1449 4.66305 11.1082 4.66305 9.99999Z"
                            fill="#FFD500"
                          ></path>
                          <path
                            id="Vector_5"
                            d="M10.7501 3.91305C12.2161 3.91305 13.5628 4.43398 14.6146 5.30051C14.8741 5.51426 15.2512 5.49883 15.4889 5.26113L17.3354 3.41465C17.6051 3.14496 17.5859 2.70352 17.2978 2.45359C15.5355 0.924726 13.2425 0 10.7501 0C7.0524 0 3.81982 2.01395 2.09424 5.00465L5.4851 6.9591C6.5392 5.14141 8.50186 3.91305 10.7501 3.91305Z"
                            fill="#FF4B26"
                          ></path>
                          <path
                            id="Vector_6"
                            d="M14.6145 5.30051C14.874 5.51426 15.2512 5.49883 15.4889 5.26113L17.3354 3.41465C17.605 3.14496 17.5858 2.70352 17.2977 2.45359C15.5354 0.924688 13.2425 0 10.75 0V3.91305C12.216 3.91305 13.5627 4.43398 14.6145 5.30051Z"
                            fill="#D93F21"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_2432_31527">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0.75)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span>Google</span>
                  </button>
                </div>
              </div>
              {Settings.registration && (
                <div
                  title="registerNowButton"
                  className=" w-full flex justify-center items-center text-xs md:text-sm lg:text-base"
                >
                  <div className="text-text_color_loginTextColor ">
                    New User?
                    <span
                      onClick={showRegister}
                      className="font-lato-bold font-semibold underline ml-1 cursor-pointer text-text_color_loginButtonTextColor cursor-pointer"
                    >
                      Create an account
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
