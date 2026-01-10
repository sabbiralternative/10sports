import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import images from "../../../assets/images";

const BuildVersion = ({ build_version, setShowBuildVersion }) => {
  const modalRef = useRef();
  useCloseModalClickOutside(modalRef, () => {
    closeModal();
  });

  const closeModal = () => {
    localStorage.setItem("build_version", build_version);
    setShowBuildVersion(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 overflow-hidden flex h-[100dvh] w-dvw items-center justify-center bg-bg_color_popUpParentBg overflow-y-hidden z-[10000]">
      <div
        ref={modalRef}
        className="relative w-[90%]  sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px] rounded-[20px]   bg-bg_color_LoginPopUpBg popUpOpenAnimation  "
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 active:scale-95 transition-all duration-300 z-50"
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

        <div className="promo-card font-lato">
          <header className="promo-header">
            <div className="header-content">
              <img
                src={images.warning}
                className="size-10"
                alt="install_android"
              />

              <h1 style={{ marginLeft: "10px" }} className="main-title">
                New version available !
              </h1>
            </div>
          </header>

          <main className="promo-body">
            <p className="intro-text" style={{ padding: "10px 0px" }}>
              Please update to the new version to experience latest feature 🚀
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <a
                onClick={closeModal}
                style={{ width: "100%", background: "rgb(230 230 230)" }}
                className="download-button text-primary"
              >
                <span>Cancel</span>
              </a>
              <a
                onClick={closeModal}
                style={{ width: "100%" }}
                className="download-button text-primary"
              >
                <span>Update</span>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BuildVersion;
