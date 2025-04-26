const FootballScore = ({ score }) => {
  return (
    <div className=" w-full  bg-bg_color_secondary px-3">
      <div className=" w-full flex items-center flex-col justify-center gap-y-1">
        <div className=" w-full flex items-center justify-center gap-x-2">
          <span className=" w-full text-center text-sm text-text_color_primary1  font-semibold font-lato leading-5">
            {score?.timeStatus}
          </span>
          {/* <span className=" w-1/2 text-xs text-start text-text_color_primary1  font-semibold font-lato leading-5"></span> */}
        </div>
        <div className="flex items-start w-full justify-between ">
          <div
            title="Newcastle"
            className=" w-1/3 text-text_color_primary1  font-lato text-sm font-semibold leading-5"
          >
            {score?.player1}
          </div>
          <div className=" w-1/3 flex items-center justify-center gap-x-1 text-text_color_primary1">
            <div className="min-w-5 min-h-5 aspect-square bg-bg_brand_primary  text-center text-xs rounded-[4px] text-text_color_primary2 font-lato font-medium leading-4 flex items-center justify-center">
              <span>{score?.team1Score}</span>
            </div>
            {score?.team1Score && <div>:</div>}

            <div className="min-w-5 min-h-5 aspect-square bg-bg_brand_primary  text-center text-xs rounded-[4px] text-text_color_primary2 font-lato font-medium leading-4 flex items-center justify-center">
              <span> {score?.team2Score}</span>
            </div>
          </div>
          <div
            title="Western Sydney Wanderers"
            className=" w-1/3 text-text_color_primary1  font-lato text-sm font-semibold leading-5"
          >
            {score?.player2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballScore;
