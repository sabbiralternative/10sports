import { useLanguage } from "../../../context/LanguageProvider";
import { useDispatch } from "react-redux";
import {
  setShowLanguageModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import { Settings } from "../../../api";

const BeforeLogin = ({ showMobileSearch, setShowMobileSearch }) => {
  const { language, valueByLanguage } = useLanguage();
  const dispatch = useDispatch();

  const showLogin = () => {
    dispatch(setShowLoginModal(true));
  };
  const showRegister = () => {
    dispatch(setShowRegisterModal(true));
  };

  const getWhatsAppId = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div
      className={`flex items-center justify-end w-full lg:w-fit ${
        showMobileSearch ? "hidden" : ""
      }`}
    >
      <div
        onClick={() => setShowMobileSearch(true)}
        id="mobileSearchIcon"
        className="lg:hidden mr-[2px] flex items-center justify-center"
      >
        <span className="bg-none border-none shadow-none px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M23.7068 22.2929L16.8818 15.468C18.2038 13.835 18.9998 11.76 18.9998 9.50008C18.9998 4.26213 14.7378 0.000152588 9.49988 0.000152588C4.26193 0.000152588 0 4.26208 0 9.50003C0 14.738 4.26197 19 9.49992 19C11.7599 19 13.8349 18.204 15.4678 16.882L22.2928 23.7069C22.4878 23.9019 22.7438 23.9999 22.9998 23.9999C23.2558 23.9999 23.5118 23.9019 23.7068 23.7069C24.0978 23.3159 24.0978 22.6839 23.7068 22.2929ZM9.49992 17C5.36395 17 2 13.636 2 9.50003C2 5.36405 5.36395 2.0001 9.49992 2.0001C13.6359 2.0001 16.9998 5.36405 16.9998 9.50003C16.9998 13.636 13.6359 17 9.49992 17Z"
              fill="var(--bg-active-primary)"
            />
          </svg>
        </span>
      </div>

      <div className="w-max hidden items-center justify-center gap-1 rounded-full lg:flex">
        <button
          onClick={showLogin}
          title="loginButton"
          id="loginButton"
          className="relative flex rounded-full gap-1   hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-bg_brand_secondary"
        >
          <span className="w-max text-text_color_primary2 hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--text-primary)"
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
          <span className="text-xxs text-primary  font-normal font-lato md:font-semibold md:text-xs xs:text-xs">
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
                stroke="var(--bg-active-primary)"
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
        {Settings.registration_whatsapp && Settings?.whatsapplink && (
          <button
            onClick={() => getWhatsAppId(Settings?.whatsapplink)}
            title="loginButton"
            id="loginButton"
            className="relative flex rounded-full gap-1   hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-bg_brand_secondary"
          >
            <span className="w-max text-text_color_primary2 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="var(--text-primary)"
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
            <span className="text-xxs text-primary  font-normal font-lato md:font-semibold md:text-xs xs:text-xs">
              Get ID
            </span>
          </button>
        )}
      </div>
      <div className="w-max flex items-center gap-1 justify-center  rounded lg:hidden">
        <button
          onClick={showLogin}
          id="loginButton"
          className="flex  hover:opacity-100 w-max font-extrabold items-center justify-center  bg-bg_color_LoginBtnBgColor rounded-md px-2.5 py-1.5"
        >
          <span className=" text-x text-primary font-lato md:font-semibold xs:text-xs  md:text-sm font-[800]">
            Log In
          </span>
        </button>
        {Settings.registration && (
          <button
            onClick={showRegister}
            title="signUpButton"
            id="signUpButton"
            className="flex hover:opacity-100 w-max font-extrabold items-center justify-center   bg-bg_color_SignUpBtnBgColor rounded-md px-2.5 py-1.5 
                    false
                    "
          >
            <span className=" text-x   bg-bg_color_signUpTextColor bg-clip-text text-transparent  font-lato md:font-semibold xs:text-xs  md:text-sm font-[800]">
              Sign Up
            </span>
          </button>
        )}
        {Settings.registration_whatsapp && Settings?.whatsapplink && (
          <button
            onClick={() => getWhatsAppId(Settings?.whatsapplink)}
            id="loginButton"
            className="flex  hover:opacity-100 w-max font-extrabold items-center justify-center  bg-bg_color_LoginBtnBgColor rounded-md px-2.5 py-1.5"
          >
            <span className=" text-x text-primary font-lato md:font-semibold xs:text-xs  md:text-sm font-[800]">
              Get ID
            </span>
          </button>
        )}
      </div>
      {Settings.language && (
        <button
          onClick={() => dispatch(setShowLanguageModal(true))}
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
  );
};

export default BeforeLogin;
