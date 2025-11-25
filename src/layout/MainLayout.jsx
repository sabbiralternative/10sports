import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import LeftDeskSidebar from "../components/shared/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../components/shared/RightDeskSidebar/RightDeskSidebar";
import Footer from "../components/shared/Footer/Footer";
import { hideSidebarRoutes } from "../static/hideSidebarRoutes";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/modals/Banner/Banner";

const MainLayout = () => {
  const { group, showNotification, showBanner, showAppPopUp } = useSelector(
    (state) => state.global
  );
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

  return (
    <div className="w-dvw app-bg h-screen  flex flex-col">
      {showBanner && <Banner />}

      <Header />
      <div
        ref={ref}
        className={`flex-1 overflow-y-auto show-scrollbar scroll-auto flex flex-col h-full ${
          showNotification && showAppPopUp
            ? "pt-[165px] lg:pt-[155px]"
            : !showNotification && showAppPopUp
            ? "pt-[140px] lg:pt-[130px]"
            : showNotification && !showAppPopUp
            ? "pt-[120px] lg:pt-[155px]"
            : "pt-[100px] lg:pt-[128px]"
        }`}
      >
        <main
          className={`flex items-start h-max justify-start w-full ${
            hideSidebarRoutes?.includes(location.pathname) ||
            location.pathname.startsWith("/casino")
              ? ""
              : "lg:px-12 xl:px-20 xlg:px-24"
          } `}
        >
          {!hideSidebarRoutes?.includes(location.pathname) &&
          !location.pathname.startsWith("/casino") ? (
            <LeftDeskSidebar />
          ) : null}
          <Outlet />
          {!hideSidebarRoutes?.includes(location.pathname) &&
          !location.pathname.startsWith("/casino") ? (
            <RightDeskSidebar />
          ) : null}
        </main>
        {location.pathname === "/" && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
