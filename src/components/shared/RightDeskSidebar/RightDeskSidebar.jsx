const RightDeskSidebar = () => {
  return (
    <aside
      title="Menu 2"
      id="rightDeskSideBar"
      className="hidden lg:flex p-2 overflow-y-auto z-10 w-[26%] sticky top-0 h-[calc(100vh-110px)]"
    >
      <div className="flex p-2 overflow-x-hidden relative no-scrollbar border flex-col w-full rounded-lg bg-bg_color_primary border-border_color_primary">
        <div className="w-full flex flex-col gap-y-1 py-2">
          <div className="w-full flex items-center gap-1">
            <div className="flex gap-1 w-3/4 rounded-lg p-0.5 border border-border_color_primary">
              <button className="text-xs w-full capitalize whitespace-nowrap rounded p-2 bg-bg_color_primary text-text_color_primary1">
                Betslip
              </button>
              <button className="text-xs w-full capitalize whitespace-nowrap rounded p-2 bg-bg_brand_secondary text-text_color_primary2">
                Open Bets
              </button>
            </div>
          </div>
          <h4 className="text-sm font-lato text-center py-4 text-text_color_primary1">
            Please login to see your open bets.
            <span className="bg-bg_text_brand_primary bg-clip-text text-transparent cursor-pointer hover:underline">
              Login
            </span>
          </h4>
        </div>
      </div>
    </aside>
  );
};

export default RightDeskSidebar;
