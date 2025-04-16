import { Link } from "react-router-dom";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";
import Login from "../../modals/Login/Login";
import Registration from "../../modals/Registration/Registration";
import ForgotPassword from "../../modals/ForgotPassword/ForgotPassword";
import HeaderBottomNavItem from "./HeaderBottomNavItem";
import MobileLeftDrawer from "./MobileLeftDrawer";
import { useEffect, useState } from "react";
import moment from "moment";
import Language from "../../modals/Language/Language";
import SearchBox from "./SearchBox";
import AfterLogin from "./AfterLogin";
import RightDrawer from "./RightDrawer";
import BeforeLogin from "./BeforeLogin";
import Referral from "../../modals/Referral/Referral";

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const [showReferral, setShowReferral] = useState(false);
  const [time, setTime] = useState();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const {
    showLoginModal,
    showRegisterModal,
    showForgotPasswordModal,
    showLanguageModal,
  } = useSelector((state) => state.global);
  const { logo } = useLogo();
  const dispatch = useDispatch();

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
      {showReferral && <Referral setShowReferral={setShowReferral} />}
      {showLanguageModal && <Language />}
      {showLoginModal && <Login />}
      {showRegisterModal && <Registration />}
      {showForgotPasswordModal && <ForgotPassword />}
      <header
        id="10sports-header"
        title="10sports-header"
        className="w-full h-max fixed top-0  z-[100]"
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
                    onClick={() => dispatch(setGroup(0))}
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

              {/* Before login */}
              {!token ? (
                <BeforeLogin />
              ) : (
                <AfterLogin setShowRightDrawer={setShowRightDrawer} />
              )}
            </div>

            <HeaderBottomNavItem />
          </div>
        </div>
        <MobileLeftDrawer
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
        />
        <RightDrawer
          setShowReferral={setShowReferral}
          showRightDrawer={showRightDrawer}
          setShowRightDrawer={setShowRightDrawer}
        />
      </header>
    </>
  );
};

export default Header;
