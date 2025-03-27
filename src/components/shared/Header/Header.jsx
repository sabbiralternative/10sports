import { Link } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import Login from "../../modals/Login/Login";
import { Settings } from "../../../api";
import Registration from "../../modals/Registration/Registration";
import ForgotPassword from "../../modals/ForgotPassword/ForgotPassword";
import HeaderBottomNavItem from "./HeaderBottomNavItem";
import MobileLeftDrawer from "./MobileLeftDrawer";
import { useEffect, useState } from "react";
import moment from "moment";
import Language from "../../modals/Language/Language";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import SearchBox from "./SearchBox";

const Header = () => {
  const { language, valueByLanguage } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [time, setTime] = useState();
  const [showDrawer, setShowDrawer] = useState(false);
  const { showLoginModal, showRegisterModal, showForgotPasswordModal } =
    useSelector((state) => state.global);
  const { logo } = useLogo();
  const dispatch = useDispatch();

  const showLogin = () => {
    dispatch(setShowLoginModal(true));
  };
  const showRegister = () => {
    dispatch(setShowRegisterModal(true));
  };

  const handleShowDrawer = () => {
    setShowDrawer(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);
  }, [time]);

  return (
    <>
      {showLanguageModal && (
        <Language setShowLanguageModal={setShowLanguageModal} />
      )}
      {showLoginModal && <Login />}
      {showRegisterModal && <Registration />}
      {showForgotPasswordModal && <ForgotPassword />}
      <header
        id="10sports-header"
        title="10sports-header"
        className="w-full h-max"
      >
        <div className="flex flex-col">
          <div className="flex flex-col shadow-lg autoAnimate">
            <div
              id="header_body"
              className="w-full bg-bg_headerBg h-[54px] lg:h-[72px] pr-[4px] md:px-4 flex items-center justify-between gap-1 relative"
            >
              <div
                id="logoContainer"
                className="logo flex w-full h-full md:w-fit"
              >
                <div className="flex items-center w-[40px] md:w-fit justify-center lg:hidden">
                  <button
                    onClick={handleShowDrawer}
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-none border-none h-full flex items-center justify-center active:scale-150 w-[100%] shadow-none px-1 cursor-pointer"
                    type="button"
                  >
                    <svg
                      height={19}
                      width={16}
                      fill="var(--icon-color-secondary)"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </button>
                </div>
                <div className=" ">
                  <Link
                    className="h-full w-auto flex items-center justify-center xs"
                    to="/"
                  >
                    <div className="relative overflow-hidden hidden sm:block ml-2">
                      <img
                        src={logo}
                        alt="10sports"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="w-full h-full max-h-full object-cover"
                        loading="eager"
                        title="10sports"
                        style={{ maxHeight: "40px", maxWidth: "140px" }}
                      />
                    </div>
                    <div className="relative overflow-hidden sm:hidden h-auto xsm:max-w-[120px] sm:max-w-[160px] md:max-w-[180px]">
                      <img
                        src={logo}
                        alt="10sports"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                        className="w-full h-auto max-h-full"
                        loading="eager"
                        title="10sports"
                        style={{
                          maxHeight: "40px",
                          maxWidth: "100px",
                          height: "40px",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <SearchBox />
              <div id="currentDateTime" className="hidden font-lato lg:block">
                <div className="w-full text-text_color_primary4 text-[10px] lg:text-[12px] flex flex-col px-2">
                  <div className="flex gap-1 items-center text-nowrap whitespace-nowrap">
                    {moment().format("MMMM Do YYYY")}
                  </div>
                  <span className="text-text_color_primary2 text-xs lg:text-[14px] text-nowrap whitespace-nowrap font-semibold">
                    {time}
                  </span>
                </div>
              </div>
              <div className="w-max flex items-center justify-center">
                <div
                  id="mobileSearchIcon"
                  className="lg:hidden mr-[2px] flex items-center justify-center"
                >
                  <span className="bg-none border-none shadow-none px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M23.7068 22.2929L16.8818 15.468C18.2038 13.835 18.9998 11.76 18.9998 9.50008C18.9998 4.26213 14.7378 0.000152588 9.49988 0.000152588C4.26193 0.000152588 0 4.26208 0 9.50003C0 14.738 4.26197 19 9.49992 19C11.7599 19 13.8349 18.204 15.4678 16.882L22.2928 23.7069C22.4878 23.9019 22.7438 23.9999 22.9998 23.9999C23.2558 23.9999 23.5118 23.9019 23.7068 23.7069C24.0978 23.3159 24.0978 22.6839 23.7068 22.2929ZM9.49992 17C5.36395 17 2 13.636 2 9.50003C2 5.36405 5.36395 2.0001 9.49992 2.0001C13.6359 2.0001 16.9998 5.36405 16.9998 9.50003C16.9998 13.636 13.6359 17 9.49992 17Z"
                        fill="var(--icon-color-brand-secondary)"
                      />
                    </svg>
                  </span>
                </div>
                <div className="w-max hidden items-center justify-center gap-1 rounded-full lg:flex">
                  <button
                    onClick={showLogin}
                    title="loginButton"
                    id="loginButton"
                    className="relative flex rounded-full gap-1 border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-bg_brand_secondary"
                  >
                    <span className="w-max text-text_color_primary2 hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="var(--icon-color-secondary)"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M21 12h-13l3 -3" />
                        <path d="M11 15l-3 -3" />
                      </svg>
                    </span>
                    <span className="text-xxs text-text_color_primary2 md:text-text_color_primary2 font-normal font-lato md:font-semibold md:text-xs xs:text-xs">
                      {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                    </span>
                  </button>
                  {Settings.registration && (
                    <button
                      onClick={showRegister}
                      title="signUpButton"
                      id="signUpButton"
                      className="flex rounded-full border border-secondary gap-1 hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-bg_color_primary"
                    >
                      <span className="w-max hidden md:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="var(--icon-color-brand-primary)"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M16 19h6" />
                          <path d="M19 16v6" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                        </svg>
                      </span>
                      <span className="text-xxs text-text_brand_secondary md:text-text_color_primary1 font-lato md:font-semibold md:text-xs xs:text-xs">
                        {languageValue(valueByLanguage, LanguageKey.REGISTER)}
                      </span>
                    </button>
                  )}
                </div>
                {Settings.language && (
                  <button
                    onClick={() => setShowLanguageModal(true)}
                    className="relative overflow-hidden hidden lg:flex items-center ml-2 text-text_color_primary2 justify-center text-xs py-2 px-2 rounded-full bg-bg_color_secondary border border-border_color_primary capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 mr-0.5"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    {language}
                    <svg
                      fill="currentColor"
                      width={16}
                      height={16}
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 330 330"
                      className="w-3 h-3 ml-2"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          id="XMLID_225_"
                          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        />
                      </g>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <HeaderBottomNavItem />
          </div>
        </div>
        <MobileLeftDrawer
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
        />
      </header>
    </>
  );
};

export default Header;
