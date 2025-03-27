import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import LeftDeskSidebar from "../components/shared/LeftDeskSidebar/LeftDeskSidebar";
import WhatsApp from "../components/shared/WhatsApp/WhatsApp";
import RightDeskSidebar from "../components/shared/RightDeskSidebar/RightDeskSidebar";
import Footer from "../components/shared/Footer/Footer";
import { hideSidebarRoutes } from "../static/hideSidebarRoutes";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="w-dvw app-bg h-[100dvh] overflow-x-hidden no-scrollbar flex flex-col">
      <WhatsApp />
      <Header />
      <div className="flex-1 overflow-y-auto show-scrollbar scroll-smooth flex flex-col h-full">
        <main
          className={`flex items-start h-max justify-start w-full ${
            hideSidebarRoutes?.includes(location.pathname)
              ? ""
              : "lg:px-12 xl:px-20 xlg:px-24"
          } `}
        >
          {!hideSidebarRoutes?.includes(location.pathname) && (
            <LeftDeskSidebar />
          )}
          <Outlet />
          {!hideSidebarRoutes?.includes(location.pathname) && (
            <RightDeskSidebar />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
