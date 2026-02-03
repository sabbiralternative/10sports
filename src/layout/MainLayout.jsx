import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import LeftDeskSidebar from "../components/shared/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../components/shared/RightDeskSidebar/RightDeskSidebar";
import Footer from "../components/shared/Footer/Footer";
import { hideSidebarRoutes } from "../static/hideSidebarRoutes";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/modals/Banner/Banner";
import BuildVersion from "../components/modals/BuildVersion/BuildVersion";
import { Settings } from "../api";

const MainLayout = () => {
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const { group, showNotification, showBanner, showAppPopUp, showAPKModal } =
    useSelector((state) => state.global);
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, group]);

  useEffect(() => {
    const newVersion = Settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  return (
    <div className="w-dvw app-bg h-screen  flex flex-col">
      {showBuildVersion && !showAPKModal && (
        <BuildVersion
          build_version={Settings?.build_version}
          setShowBuildVersion={setShowBuildVersion}
        />
      )}
      {showBanner && <Banner />}
      {!location.pathname.includes("/casino/") && <Header />}

      <div
        ref={ref}
        className={`flex-1 overflow-y-auto show-scrollbar scroll-auto flex flex-col h-full ${
          location.pathname.includes("/casino/")
            ? "pt-0"
            : showNotification && showAppPopUp
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
