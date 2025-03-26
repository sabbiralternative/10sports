const OpenBets = () => {
  return (
    <div title="Open Bets" className="hidden sm:block">
      <div className=" flex items-start justify-start flex-col w-full px-2 py-1">
        <div
          id="unmatched_0"
          className=" w-full flex items-center justify-between bg-bg_brand_secondary transition-all ease-in-out my-1 py-1 rounded-[6px] origin-center active:opacity-95"
        >
          <div className="head pl-2">
            <span className=" text-text_color_primary2 font-lato-bold">
              Unmatched Bets
            </span>
          </div>
          <div className=" cursor-pointer mr-2 transform transition-transform ease-in-out flex items-center justify-center w-max origin-center  active:scale-90 active:opacity-85">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              viewBox="0 0 512 512"
              height={16}
              width={16}
              fill="var(--icon-color-secondary)"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
            </svg>
          </div>
        </div>
        <div className="BetSections w-full origin-top scaleVerticalOpen" />
        <div
          id="matched_1"
          className=" w-full flex items-center justify-between bg-bg_brand_secondary transition-all ease-in-out my-1 py-1 rounded-[6px] origin-center active:opacity-95"
        >
          <div className="head pl-2">
            <span className=" text-text_color_primary2 font-lato-bold">
              Matched Bets
            </span>
          </div>
          <div className=" cursor-pointer mr-2 transform transition-transform ease-in-out flex items-center justify-center w-max origin-center  active:scale-90 active:opacity-85">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              viewBox="0 0 512 512"
              height={16}
              width={16}
              fill="var(--icon-color-secondary)"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
            </svg>
          </div>
        </div>
        <div className="BetSections w-full origin-top scaleVerticalOpen" />
      </div>
    </div>
  );
};

export default OpenBets;
