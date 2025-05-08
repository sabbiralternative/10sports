const TennisScore = ({ score }) => {
  return (
    <div className="w-full  bg-bg_color_secondary px-3">
      <div className="flex flex-col items-center justify-center my-[4px] w-full gap-y-[5px]">
        <div className="flex justify-between items-center h-full w-full">
          <span className="text-sm sm:text-base md:text-[18px] w-[60%] truncate font-semibold leading-5 font-lato text-text_color_primary1">
            {score?.player1}
          </span>
          <span className="flex h-full items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <circle
                cx="4"
                cy="4"
                r="4"
                fill={score?.service == 1 ? "var(--bg-active-primary)" : ""}
              ></circle>
            </svg>
            <span className="min-w-6 min-h-6 shadow-md text-xs bg-bg_color_quaternary mr-2 text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center">
              {score?.team1Score}
            </span>
            <div className="flex items-center justify-center gap-x-2">
              {score?.set1?.map((set, i) => (
                <span
                  key={i}
                  className="min-w-6 min-h-6 shadow-lg text-xs bg-bg_color_quaternary text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center"
                >
                  {set}
                </span>
              ))}
            </div>
          </span>
        </div>
        <div className="flex justify-between items-center h-full w-full">
          <span className="text-sm sm:text-base md:text-[18px] w-[60%] truncate font-semibold leading-5 font-lato text-text_color_primary1">
            {score?.player2}
          </span>
          <span className="flex h-full items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <circle
                cx="4"
                cy="4"
                r="4"
                fill={score?.service == 2 ? "var(--bg-active-primary)" : ""}
              ></circle>
            </svg>
            <span className="min-w-6 min-h-6 shadow-md text-xs bg-bg_color_quaternary mr-2 text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center">
              {score?.team2Score}
            </span>
            <div className="flex items-center justify-center gap-x-2">
              {score?.set2?.map((set, i) => (
                <span
                  key={i}
                  className="min-w-6 min-h-6 shadow-lg text-xs bg-bg_color_quaternary text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center"
                >
                  {set}
                </span>
              ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TennisScore;
