const Score = ({ score2, mobile }) => {
  return (
    <div
      style={{ marginTop: "2px" }}
      id="score-board"
      className="score-board  show mb-md-3 hidden lg:block"
    >
      <div className=" w-full  bg-bg_color_secondary px-0">
        <div className=" flex w-full justify-between items-center px-3.5 py-1 font-lato">
          <div className=" flex items-start justify-start w-max flex-col max-w-[70%]">
            <div className=" bg-bg_text_brand_primary text-transparent text-start bg-clip-text font-lato font-bold text-sm flex items-start justify-start w-full">
              <span className=" text-start">Bhimavaram Bulls</span>
            </div>
            <div className=" flex items-center justify-start gap-x-1">
              <span className="text-[18px] font-bold text-text_color_primary1 ">
                133/0
              </span>
              <div className=" flex items-center justify-center rounded-[4px] px-1.5 py-0.5 bg-bg_text_brand_primary">
                <span className=" text-[10px] font-[500] leading-4 text-primary">
                  Over 13.1{" "}
                </span>
              </div>
              <span className=" text-xs text-text_color_primary1 w-max" />
            </div>
          </div>
          <div className=" flex flex-col gap-y-[3px] text-end max-w-[60%] text-text_color_primary1 ">
            <span className="text-lg bg-bg_text_brand_secondary text-transparent  bg-clip-text font-bold leading-6 text-lg">
              1
            </span>
            <div className=" text-x font-semibold text-end leading-3">
              <span className="text-text_color_primary1 ">CRR : 10.15</span>
            </div>
          </div>
        </div>
        <div className=" px-[11px] relative bg-bg_color_primary w-full shadow-md">
          <div className=" w-full flex items-center py-1 justify-start overflow-scroll no-scrollbar gap-x-2">
            <div
              title="Current Over"
              className=" flex py-1 items-center justify-start gap-x-[7px]"
            >
              <span className=" w-max min-w-11 text-xs font-medium text-text_color_primary">
                Over 14
              </span>
              <div className=" flex items-center justify-start gap-x-[11px]">
                <div className="flex items-center justify-start gap-x-[11px]">
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>1</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>&nbsp;</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>&nbsp;</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>&nbsp;</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>&nbsp;</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>&nbsp;</span>
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center text-xs gap-x-0.5 font-medium leading-4 border-r border-border_color_primary pr-3 text-text_color_primary">
              <span>=</span>
              <span>1</span>
            </div>
            <div
              title="Last Over"
              className=" py-1 flex items-center justify-start gap-x-[7px]"
            >
              <span className=" w-max min-w-11 text-xs font-medium text-text_color_primary">
                Over 13
              </span>
              <div className=" flex items-center justify-start gap-x-[11px]">
                <div className="flex items-center justify-start gap-x-[11px]">
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_wd text-text_color_cr_wd border-border_color_cr_wd ">
                    <span>wd</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>1</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>6</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>6</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>0</span>
                  </span>
                  <span className="text-xs font-medium min-w-5 min-h-5 aspect-square flex items-center justify-center shadow-md rounded-full p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ">
                    <span>0</span>
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center text-xs gap-x-0.5 font-medium leading-4 border-r border-border_color_primary pr-5 text-text_color_primary">
              <span>=</span>
              <span>18</span>
            </div>
          </div>
          <div className=" absolute z-1 top-1/2 -translate-y-1/2 right-2">
            <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  min-w-5 min-h-5 flex items-center justify-center rounded-[4px] bg-bg_color_quaternary 
      cursor-pointer
      "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.4998 10L6.6665 6.16667L7.83317 5L12.8332 10L7.83317 15L6.6665 13.8333L10.4998 10Z"
                  fill="var(--bg-active-primary)"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="sc_cw-main-container">
        {/* Header */}
        {!mobile && (
          <div className="sc_cw-header">
            <div
              className="sc_cw-team-info-desktop"
              style={{ width: "100%!important", fontWeight: 200 }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                }}
              >
                {/* First left team name */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span style={{ fontWeight: 500, fontSize: "16px" }}>
                    {score2?.team_name}
                  </span>
                  <span style={{ fontWeight: 500, fontSize: "16px" }}>
                    {score2?.team_runs}
                  </span>
                  <span style={{ fontWeight: 100, fontSize: "12px" }}>
                    {score2?.team_overs}
                  </span>
                </div>
                {/* Second right team name */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span style={{ fontWeight: 500, fontSize: "16px" }}>
                    {score2?.team_name2}
                  </span>
                  <span style={{ fontWeight: 500, fontSize: "16px" }}>
                    {score2?.team_runs2}
                  </span>
                  <span style={{ fontWeight: 100, fontSize: "12px" }}>
                    {score2?.team_overs2}
                  </span>
                </div>
              </div>
              {/* Crr, rrr, pship, last wicket */}
              <div
                className="sc_cw-other-info"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  overflowX: "auto",
                  fontSize: "10px",
                }}
              >
                {score2?.crr && (
                  <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <span style={{ fontWeight: 600 }}>CRR: </span> {score2?.crr}
                  </div>
                )}

                {score2?.rrr !== null && score2?.rrr != 0 && (
                  <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <span style={{ fontWeight: 600 }}>RRR: </span> {score2?.rrr}
                  </div>
                )}
                {score2?.partnership_runs || score2?.partnership_balls ? (
                  <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <span style={{ fontWeight: 600 }}>PSHIP: </span>{" "}
                    {score2?.partnership_runs} ({score2?.partnership_balls})
                  </div>
                ) : null}

                {score2?.last_wicket && (
                  <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <span style={{ fontWeight: 600 }}>LAST WKT:</span>{" "}
                    {score2?.last_wicket}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Over */}
        <div
          className="sc_cw-overs-info"
          style={{
            width: "100%!important",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <div
            className
            style={{
              marginLeft: "5px!important",
              marginRight: "5px!important",
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              overflowX: "auto",
              fontSize: "10px",
            }}
          >
            <div className="sc_cw-over">
              <span
                style={{
                  border: score2?.recent_overs?.[0]?.title
                    ? ".25px solid #000000"
                    : "none",
                  borderRadius: "2px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                {score2?.recent_overs?.[0]?.title}
              </span>
              {score2?.recent_overs?.[0]?.balls?.map((ball, i) => (
                <div key={i} className="sc_cw-ball">
                  {ball}
                </div>
              ))}
            </div>
            <div className="sc_cw-over">
              <span
                style={{
                  border: score2?.recent_overs?.[1]?.title
                    ? ".25px solid #000000"
                    : "none",
                  borderRadius: "2px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                {score2?.recent_overs?.[1]?.title}
              </span>
              {score2?.recent_overs?.[1]?.balls?.map((ball, i) => (
                <div key={i} className="sc_cw-ball">
                  {ball}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* status 1 2 */}
        {score2?.status || score2?.status2 ? (
          <div
            className="sc_cw-other-info"
            style={{
              display: "flex",
              justifyContent: "space-between",
              overflowX: "auto",
              fontSize: "10px",
            }}
          >
            <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              <span style={{ fontWeight: 600 }}> </span> {score2?.status}
            </div>

            <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              <span style={{ fontWeight: 600 }}></span> {score2?.status2}
            </div>
          </div>
        ) : null}

        <div style={{ overflowX: "auto", width: "100%" }}>
          {/* Batsmen */}
          <div
            className="sc_cw-table-container"
            style={{
              minWidth: "100%",
              width: "max-content",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className=" sc_cw-table-row sc_cw-desktop-row"
              style={{
                backgroundColor: "#cbcbcb",
                color: "#000000",
                paddingTop: "2px",
                paddingBottom: "2px",
                fontWeight: 600,
                fontSize: "10px",
              }}
            >
              <div
                style={{
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                }}
              >
                Batsmen{" "}
              </div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>R</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>B</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>4s</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>6s</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>SR</div>
            </div>
            {score2?.batsmen?.map((batMen, i) => (
              <div
                key={i}
                className="sc_cw-table-row sc_cw-desktop-row"
                style={{
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  fontSize: "10px",
                }}
              >
                <div
                  style={{
                    minWidth: "95px!important",
                    whiteSpace: "nowrap",
                    textAlign: "left!important",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    fontSize: "10px",
                  }}
                >
                  {batMen?.strike == 1 && (
                    <svg
                      style={{ height: "100%" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      id="Layer_2"
                      data-name="Layer 2"
                      viewBox="0 0 475 474.99"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              ".cls-1{fill:#003a61}.cls-2{fill:#00a9e4}.cls-3{fill:#00eacf}.cls-4{fill:#fed853}",
                          }}
                        />
                      </defs>
                      <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                          <path
                            className="cls-1"
                            d="M364.1,191.58l-80.68-80.68c-3.78-3.78-9.9-3.78-13.68,0L15.21,365.43c-20.27,20.27-20.28,53.15,0,73.43l20.93,20.93c20.27,20.27,53.15,20.27,73.43,0l254.54-254.54c3.78-3.78,3.78-9.9,0-13.68ZM98.25,448.48c-14,14-36.79,14.01-50.8,0l-20.93-20.93c-14.01-14.01-14-36.8,0-50.8l250.06-250.06,71.73,71.73-250.06,250.06Z"
                          />
                          <path
                            className="cls-4"
                            d="M348.31,198.41l-250.06,250.06c-14,14-36.79,14.01-50.8,0l-20.93-20.93c-14.01-14.01-14-36.8,0-50.8l250.06-250.06,71.73,71.73Z"
                          />
                          <path
                            className="cls-1"
                            d="M435.67,0l-143.68,143.68-70.9,107.91c-.93,1.41.74,3.09,2.15,2.16l108.08-70.75L475,39.33,435.67,0Z"
                          />
                          <g>
                            <rect
                              className="cls-3"
                              x="424.52"
                              y="26.77"
                              width="30.13"
                              height="19.91"
                              transform="translate(154.72 -300.08) rotate(45)"
                            />
                            <rect
                              className="cls-2"
                              x="399.25"
                              y="52.05"
                              width="30.13"
                              height="19.91"
                              transform="translate(165.19 -274.8) rotate(45)"
                            />
                            <rect
                              className="cls-3"
                              x="373.97"
                              y="77.32"
                              width="30.13"
                              height="19.91"
                              transform="translate(175.66 -249.53) rotate(45)"
                            />
                            <rect
                              className="cls-2"
                              x="348.7"
                              y="102.6"
                              width="30.13"
                              height="19.91"
                              transform="translate(186.13 -224.25) rotate(45)"
                            />
                            <rect
                              className="cls-3"
                              x="323.42"
                              y="127.87"
                              width="30.13"
                              height="19.91"
                              transform="translate(196.6 -198.98) rotate(45)"
                            />
                          </g>
                          <polygon
                            className="cls-2"
                            points="323.61 173.71 258.69 216.21 301.28 151.38 323.61 173.71"
                          />
                        </g>
                      </g>
                    </svg>
                  )}
                  {batMen?.name}
                </div>
                <div style={{ minWidth: "40px!important", flex: "auto" }}>
                  {batMen?.runs}
                </div>
                <div style={{ minWidth: "40px!important", flex: "auto" }}>
                  {batMen?.balls}
                </div>
                <div style={{ minWidth: "40px!important", flex: "auto" }}>
                  {batMen?.four}
                </div>
                <div style={{ minWidth: "40px!important", flex: "auto" }}>
                  {batMen?.six}
                </div>
                <div style={{ minWidth: "40px!important", flex: "auto" }}>
                  {batMen?.sr}
                </div>
              </div>
            ))}
          </div>
          {/* Bowler */}
          <div
            className="sc_cw-table-container"
            style={{
              minWidth: "100%",
              width: "max-content",
              display: "flex",
              flexDirection: "column",
              fontSize: "10px",
            }}
          >
            <div
              className="sc_cw-table-row sc_cw-desktop-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "2px",
                paddingBottom: "2px",
                backgroundColor: "#cbcbcb",
                color: " #000000",
                fontWeight: 600,
                fontSize: "10px",
              }}
            >
              <div
                style={{
                  display: "flex!important",
                  alignItems: "center!important",
                  justifyContent: "left!important",
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                  height: "100%",
                }}
              >
                <span style={{}}>Bowler</span>
              </div>
              <div style={{ minWidth: "40px!important" }}>O</div>
              <div style={{ minWidth: "40px!important" }}>M</div>
              <div style={{ minWidth: "40px!important" }}>R</div>
              <div style={{ minWidth: "40px!important" }}>W</div>
              <div style={{ minWidth: "40px!important" }}>Eco</div>
            </div>

            <div
              className="sc_cw-table-row sc_cw-desktop-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "2px",
                paddingBottom: "2px",
                fontSize: "10px",
              }}
            >
              <div
                style={{
                  display: "flex!important",
                  alignItems: "center!important",
                  justifyContent: "left!important",
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                  height: "100%",
                  fontSize: "10px",
                }}
              >
                <span style={{ marginLeft: "5px" }}>
                  {score2?.bowler?.name}
                </span>
              </div>
              <div style={{ minWidth: "40px!important" }}>
                {score2?.bowler?.overs}
              </div>
              <div style={{ minWidth: "40px!important" }}>
                {score2?.bowler?.maidens}
              </div>
              <div style={{ minWidth: "40px!important" }}>
                {score2?.bowler?.runs}
              </div>
              <div style={{ minWidth: "40px!important" }}>
                {score2?.bowler?.wickets}
              </div>
              <div style={{ minWidth: "40px!important" }}>
                {score2?.bowler?.eco}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
