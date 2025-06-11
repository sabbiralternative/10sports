const OriginalCrashIFrame = ({
  openAnimation,
  closeAnimation,
  setIFrame,
  closeModal,
  iFrame,
  gameTitle,
  showGame,
}) => {
  return (
    <div
      className={`origin-bottom-right max-w-screen-xsm w-[90%] h-[85%] fixed bottom-0 right-0 z-[9999] font-lato  overflow-hidden  bg-[var(--app-bg)] rounded-t-xl shadow-passwordRulesBox overflow-y-auto no-scrollbar flex-col flex ${
        !showGame ? "hidden" : ""
      }  ${openAnimation ? "popUpOpenAnimation1" : ""} ${
        closeAnimation ? "popUpOpenAnimation2" : ""
      }`}
    >
      <div className="flex items-center justify-between px-2 border-b border-[var(--bg-active-primary)] bg-[var(--app-bg)] sticky top-0 z-[100]">
        <div className="flex max-w-[80%] items-center justify-start py-2  ">
          <button
            onClick={() => setIFrame(false)}
            className="relative overflow-hidden  text-[var(--bg-active-primary)] flex items-center gap-x-2"
            type="button"
          >
            <div className="size-6 cursor-pointer rounded-sm flex items-center transition-all duration-300 ease-in-out justify-center  active:scale-[120%] active:opacity-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={12}
                viewBox="0 0 7 12"
                fill="currentColor"
              >
                <path
                  d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold uppercase">{gameTitle}</span>
          </button>
        </div>
        <svg
          onClick={closeModal}
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--bg-active-primary)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer  size-6 rounded-full p-1"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 9l4 0l0 -4" />
          <path d="M3 3l6 6" />
          <path d="M5 15l4 0l0 4" />
          <path d="M3 21l6 -6" />
          <path d="M19 9l-4 0l0 -4" />
          <path d="M15 9l6 -6" />
          <path d="M19 15l-4 0l0 4" />
          <path d="M15 15l6 6" />
        </svg>
      </div>
      <div className=" flex-1 w-full overflow-hidden h-[calc(100%-41px)]">
        <iframe
          src={iFrame}
          title="Limbo"
          className="w-[143%] h-[143%] scale-[70%] origin-top-left flex-grow no-scrollbar"
          allowFullScreen
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default OriginalCrashIFrame;
