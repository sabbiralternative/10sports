import { FaSpinner } from "react-icons/fa";

const ImageUploadMessage = ({ imageUploadMessage }) => {
  return (
    <div
      id="popup-modal"
      className="fixed bottom-0 left-0 right-0 top-0 overflow-hidden flex h-[100dvh] w-dvw items-center justify-center bg-bg_color_popUpParentBg overflow-y-hidden z-[10000]"
    >
      <div className="relative w-[90%]  sm:w-[85%] md:w-[70%] lg:w-[450px] max-w-[450px] rounded-[20px]   bg-bg_color_LoginPopUpBg popUpOpenAnimation">
        <div className="flex gap-10 items-start h-[95%] w-full overflow-auto pb-10">
          <div
            title="mobileLogin"
            className="flex flex-col items-center justify-center gap-y-4 w-full text-white mt-5"
          >
            <span> {imageUploadMessage}</span>
            <FaSpinner className="animate-spin" size={30} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadMessage;
