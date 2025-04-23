/* eslint-disable react/no-unknown-property */

const ScoreCard = ({ match_odds }) => {
  return (
    <>
      <div
        style={{ marginTop: "10px" }}
        _ngcontent-ng-c942213636=""
        className="live-match-screen ng-star-inserted hidden lg:block"
      >
        {match_odds?.[0]?.score?.map((team, i) => {
          return (
            <div
              key={i}
              _ngcontent-ng-c3799324686=""
              class="live-score-section ng-star-inserted"
            >
              <div _ngcontent-ng-c3799324686="" class="score-wrap">
                <span _ngcontent-ng-c3799324686="" class="bowling-team">
                  <span class="small" _ngcontent-ng-c3799324686="">
                    {team?.team1Name}: {team?.team1Score}
                  </span>

                  <span class="small" _ngcontent-ng-c3799324686=""></span>
                </span>

                <span _ngcontent-ng-c3799324686="" class="batting-team">
                  <span class="small" _ngcontent-ng-c3799324686="">
                    {team?.team2Name}: {team?.team2Score}
                  </span>
                </span>
              </div>

              <div
                _ngcontent-ng-c3799324686=""
                class="score-overlay ng-star-inserted"
                style={{
                  height: `${team?.commentary ? "20px" : "1px"}`,
                  fontSize: `${team?.commentary ? "12px" : "0px"}`,
                  fontWeight: "600",
                  padding: "2px",
                }}
              >
                {team?.commentary}
              </div>
              <div
                _ngcontent-ng-c3799324686=""
                class="last-balls-record multiple-overs"
              >
                <div _ngcontent-ng-c3799324686="" class="previous-over">
                  <span _ngcontent-ng-c3799324686="" class="mat-label">
                    Recent Over
                  </span>
                  <ul _ngcontent-ng-c3799324686="">
                    {team?.recent?.map((run, i) => (
                      <li
                        key={i}
                        _ngcontent-ng-c3799324686=""
                        class="ng-star-inserted"
                      >
                        <p
                          className={`_${run > 0 ? "4" : ""}`}
                          _ngcontent-ng-c3799324686=""
                        >
                          {run}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <span _ngcontent-ng-c3799324686="" class="batting-team">
                  <span
                    style={{ color: "black", fontSize: "12px" }}
                    class="small"
                    _ngcontent-ng-c3799324686=""
                  >
                    {team?.target}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScoreCard;
