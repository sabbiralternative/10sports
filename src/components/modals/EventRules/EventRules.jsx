import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const EventRules = ({ setShowRules }) => {
  const [tab, setTab] = useState(null);
  const rulesRef = useRef();
  useCloseModalClickOutside(rulesRef, () => {
    setShowRules(false);
  });

  const handleToggleTab = (t) => {
    if (t === tab) {
      setTab(null);
    } else {
      setTab(t);
    }
  };
  return (
    <div
      id="popup-modal"
      className="z-[1000] absolute top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-[100dvh] min-h-[100dvh]     items-center justify-center bg-bg_color_popUpParentBg"
    >
      <div
        ref={rulesRef}
        className="z-2 popUpBoxShadow popUpOpenAnimation  absolute   bg-bg_color_primary w-[90%] h-[60%] max-w-[500px] flex  justify-center overflow-y-auto bg-bg_color_primary p-2 xs:p-5 
           rounded-md
           "
      >
        <div
          onClick={() => setShowRules(false)}
          className="transition-all mb-2 ease-in-out duration-200 hover:scale-105 absolute top-2 right-2"
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
        </div>
        <div className=" bg-bg_color_primary overflow-y-auto no-scrollbar">
          <div className=" h-full overflow-auto">
            <div className="flex p-3 justify-center flex-col text-text_color_primary1  border-b ">
              <div
                onClick={() => handleToggleTab(1)}
                className="flex items-center gap-2 text-xl "
              >
                <span className="ml-2 transform-all ease-in-out  duration-500 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_3039_16413" fill="white">
                      <path d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM2.08392 15C2.08392 22.1334 7.86664 27.9161 15 27.9161C22.1334 27.9161 27.9161 22.1334 27.9161 15C27.9161 7.86664 22.1334 2.08392 15 2.08392C7.86664 2.08392 2.08392 7.86664 2.08392 15Z"></path>
                    </mask>
                    <path
                      d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM2.08392 15C2.08392 22.1334 7.86664 27.9161 15 27.9161C22.1334 27.9161 27.9161 22.1334 27.9161 15C27.9161 7.86664 22.1334 2.08392 15 2.08392C7.86664 2.08392 2.08392 7.86664 2.08392 15Z"
                      fill="var(--icon-color-primary)"
                      stroke="var(--icon-color-primary)"
                      strokeWidth="2"
                      mask="url(#path-1-inside-1_3039_16413)"
                    ></path>
                    <path
                      d="M15.7071 9.29289C15.3166 8.90237 14.6834 8.90237 14.2929 9.29289L7.92893 15.6569C7.53841 16.0474 7.53841 16.6805 7.92893 17.0711C8.31946 17.4616 8.95262 17.4616 9.34315 17.0711L15 11.4142L20.6569 17.0711C21.0474 17.4616 21.6805 17.4616 22.0711 17.0711C22.4616 16.6805 22.4616 16.0474 22.0711 15.6569L15.7071 9.29289ZM16 11V10H14V11H16Z"
                      fill="var(--icon-color-primary)"
                    ></path>
                  </svg>
                </span>
                General Rules
              </div>
              <div
                className="w-full font-lato text-sm px-4 overflow-hidden text-justify text-text_color_primary1  duration-500 ease-in-out"
                style={{ height: tab === 1 ? "auto" : "0px" }}
              >
                <div>
                  <div>
                    <div>➢ General</div>
                    <div></div>
                    <div>
                      If a ball is not bowled during a competition, series or
                      match then all bets will be void except for those on any
                      market that has been unconditionally determined (e.g. in
                      the Completed Match market).
                    </div>
                    <div></div>
                    <div>
                      If a match is shortened by weather, all bets will be
                      settled according to the official result (including for
                      limited overs matches, the result determined by the
                      Duckworth Lewis method).
                    </div>
                    <div></div>
                    <div>
                      In the event of a match being decided by a bowl-off or
                      toss of the coin, all bets will be void except for those
                      on markets that have been unconditionally determined.
                    </div>
                    <div></div>
                    <div>➢ Test matches</div>
                    <div></div>
                    <div>
                      If a match starts but is later abandoned for any reason
                      other than weather (which may include but is not limited
                      to: dangerous or unplayable wicket or outfield; pitch
                      vandalism; strike or boycott; crowd protests/violence;
                      stadium damage; acts of terrorism; and acts of God), It
                      reserves the right to void all bets, except for those on
                      markets that have been unconditionally determined.
                    </div>
                    <div></div>
                    <div>
                      If the match is not scheduled to be completed within five
                      days after the original scheduled completion date, then
                      all bets on markets for this event will be void, except
                      for bets on any markets that have been unconditionally
                      determined.
                    </div>
                    <div></div>
                    <div>➢ Limited Over matches</div>
                    <div></div>
                    <div>
                      If a match is declared No Result, bets will be void on all
                      markets for the event except for those markets which have
                      been unconditionally determined or where the minimum
                      number of overs have been bowled as laid out in the market
                      specific information.
                    </div>
                    <div></div>
                    <div>
                      In the event of a new toss taking place on a scheduled
                      reserve day for a limited over match all bets that were
                      placed after 30 minutes before the original scheduled
                      start of play on the first day will be made void. This
                      rule relates to all markets except those that have been
                      unconditionally determined (e.g. in the win the toss and
                      toss combination markets).
                    </div>
                    <div></div>
                    <div>➢ Super Over rule</div>
                    <div></div>
                    <div>
                      Which team will win this Super Over? This market will be
                      suspended on site and activated once Betfair are aware a
                      Super Over is to be played. The market will be turned
                      in-play at the start of the Super Over. This market will
                      not be actively managed therefore it is the responsibility
                      of all customers to manage their positions. This market
                      will be settled based on the number of runs scored by each
                      team in the initial Super Over. For the avoidance of
                      doubt, if scores are tied at the completion of both
                      innings in the Super Over then the market will be settled
                      as a Dead Heat except in cases where more than one Super
                      Over is played, where it will be settled on the winner of
                      the final over. Any tie breaker that may be used to
                      determine a winner including but not limited to higher
                      number of boundaries, higher number of sixes, losing fewer
                      wickets, coin toss etc. do not count for the purposes of
                      this market.
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-3 justify-center flex-col text-text_color_primary1  border-b ">
              <div
                onClick={() => handleToggleTab(2)}
                className="flex items-center gap-2 text-xl "
              >
                <span className="ml-2 transform-all ease-in-out  duration-500 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_3039_16413" fill="white">
                      <path d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM2.08392 15C2.08392 22.1334 7.86664 27.9161 15 27.9161C22.1334 27.9161 27.9161 22.1334 27.9161 15C27.9161 7.86664 22.1334 2.08392 15 2.08392C7.86664 2.08392 2.08392 7.86664 2.08392 15Z"></path>
                    </mask>
                    <path
                      d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM2.08392 15C2.08392 22.1334 7.86664 27.9161 15 27.9161C22.1334 27.9161 27.9161 22.1334 27.9161 15C27.9161 7.86664 22.1334 2.08392 15 2.08392C7.86664 2.08392 2.08392 7.86664 2.08392 15Z"
                      fill="var(--icon-color-primary)"
                      stroke="var(--icon-color-primary)"
                      strokeWidth="2"
                      mask="url(#path-1-inside-1_3039_16413)"
                    ></path>
                    <path
                      d="M15.7071 9.29289C15.3166 8.90237 14.6834 8.90237 14.2929 9.29289L7.92893 15.6569C7.53841 16.0474 7.53841 16.6805 7.92893 17.0711C8.31946 17.4616 8.95262 17.4616 9.34315 17.0711L15 11.4142L20.6569 17.0711C21.0474 17.4616 21.6805 17.4616 22.0711 17.0711C22.4616 16.6805 22.4616 16.0474 22.0711 15.6569L15.7071 9.29289ZM16 11V10H14V11H16Z"
                      fill="var(--icon-color-primary)"
                    ></path>
                  </svg>
                </span>
                Fancy rules
              </div>
              <div
                className="w-full font-lato text-sm px-4 overflow-hidden text-justify text-text_color_primary1  duration-500 ease-in-out"
                style={{ height: tab === 2 ? "auto" : "0px" }}
              >
                <div>
                  <div className='\"rules-content\"'>
                    <ol id='\"fancyBetRules\"' name='\"fancyBetRules\"'>
                      <li>
                        Once all session/fancy bets are completed and settled
                        there will be no reversal even if the Match is Tied or
                        is Abandoned.
                      </li>
                      <li>
                        Advance Session or Player Runs and all Fancy Bets are
                        only valid for 20/50 overs full match each side. (Please
                        Note this condition is applied only in case of Advance
                        Fancy Bets only).
                      </li>
                      <li>
                        All advance fancy bets market will be suspended 60 mins
                        prior to match and will be settled.
                      </li>
                      <li>
                        Under the rules of Session/Fancy Bets if a market gets
                        Suspended for any reason whatsoever and does not resume
                        then all previous Bets will remain Valid and become
                        HAAR/JEET bets.
                      </li>
                      <li>
                        Incomplete Session/Fancy Bet will be cancelled but
                        Complete Session will be settled.
                      </li>
                      <li>
                        In the case of Running Match getting Cancelled/ No
                        Result/ Abandoned but the session is complete it will
                        still be settled. Rest of the fancies will be voided.
                      </li>
                      <li>
                        If a player gets Retired Hurt and one ball is completed
                        after you place your bets then all the betting till then
                        is and will remain valid.
                      </li>
                      <li>
                        In Boundry win fancy, only if 2nd inning wins. Result
                        will be declared as win if winning run was scored by
                        boundry.
                      </li>
                      <li>
                        Should a Technical Glitch in Software occur, we will not
                        be held responsible for any losses.
                      </li>
                      <li>
                        Should there be a power failure or a problem with the
                        Internet connection at our end and session/fancy market
                        does not get suspended then our decision on the outcome
                        is final.
                      </li>
                      <li>
                        All decisions relating to settlement of wrong market
                        being offered will be taken by management. Management
                        will consider all actual facts and decision taken will
                        be full in final.
                      </li>
                      <li>
                        Any bets which are deemed of being suspicious, including
                        bets which have been placed from the stadium or from a
                        source at the stadium maybe voided at anytime. The
                        decision of whether to void the particular bet in
                        question or to void the entire market will remain at the
                        discretion of Company. The final decision of whether
                        bets are suspicious will be taken by Company and that
                        decision will be full and final.
                      </li>
                      <li>
                        Any sort of cheating bet , any sort of Matching (Passing
                        of funds), Court Siding (Ghaobaazi on commentary),
                        Sharpening, Commission making is not allowed in Company,
                        If any company User is caught in any of such act then
                        all the funds belonging that account would be seized and
                        confiscated. No argument or claim in that context would
                        be entertained and the decision made by company
                        management will stand as final authority.
                      </li>
                      <li>
                        Fluke hunting/Seeking is prohibited in Company , All the
                        fluke bets will be reversed. Cricket commentary is just
                        an additional feature and facility for company user but
                        company is not responsible for any delay or mistake in
                        commentary.
                      </li>
                      <li>
                        Valid for only 1st inning.
                        <ul>
                          <li>
                            • Highest Inning Run :- This fancy is valid only for
                            first inning of the match.• Lowest Inning Run :-
                            This fancy is valid only for first inning of the
                            match.
                          </li>
                        </ul>
                      </li>
                      <li>
                        If any fancy value gets passed, we will settle that
                        market after that match gets over. For example :- If any
                        market value is ( 22-24 ) and incase the result is 23
                        than that market will be continued, but if the result is
                        24 or above then we will settle that market. This rule
                        is for the following market.
                        <ul>
                          <li>
                            • Total Sixes In Single Match• Total Fours In Single
                            Match• Highest Inning Run• Highest Over Run In
                            Single Match• Highest Individual Score By Batsman•
                            Highest Individual Wickets By Bowler
                          </li>
                        </ul>
                      </li>
                      <li>
                        If any fancy value gets passed, we will settle that
                        market after that match gets over. For example :- If any
                        market value is ( 22-24 ) and incase the result is 23
                        than that market will be continued, but if the result is
                        22 or below then we will settle that market. This rule
                        is for the following market.
                        <ul>
                          <li>
                            • Lowest Inning Run• Fastest Fifty• Fastest Century
                          </li>
                        </ul>
                      </li>
                      <li>
                        If any case wrong rate has been given in fancy ,that
                        particular bets will be cancelled (Wrong Commentary).
                      </li>
                      <li>
                        In case customer make bets in wrong fancy we are not
                        liable to delete, no changes will be made and bets will
                        be considered as confirm bet.
                      </li>
                      <li>
                        Dot Ball Market Rules
                        <ul>
                          <li>
                            Wides Ball - Not CountNo Ball - Not CountLeg Bye -
                            Not Count as A Dot BallBye Run - Not Count as A Dot
                            BallRun Out - On 1st Run Count as A Dot BallRun Out
                            - On 2nd n 3rd Run Not Count as a Dot BallOut -
                            Catch Out, Bowled, Stumped n LBW Count as A Dot Ball
                          </li>
                        </ul>
                      </li>
                      <li>
                        Bookmaker Rules
                        <ul>
                          <li>
                            • Due to any reason any team will be getting
                            advantage or disadvantage we are not concerned.• We
                            will simply compare both teams 25 overs score higher
                            score team will be declared winner in ODI.• We will
                            simply compare both teams 10 overs higher score team
                            will be declared winner in T20 matches.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Penalty Runs - Any Penalty Runs Awarded in the Match (In
                        Any Running Fancy or ADV Fancy) Will Not be Counted
                        While Settling in our Exchange.
                      </li>
                      <li>
                        LIVE STREAMING OF ALL VIRTUAL CRICKET MATCHES IS
                        AVAILABLE HERE
                        https://www.youtube.com/channel/UCd837ZyyiO5KAPDXibynq_Q/featured
                      </li>
                      <li>
                        CHECK SCORE OF VIRTUAL CRICKET ON
                        https://sportcenter.sir.sportradar.com/simulated-reality/cricket
                      </li>
                      <li>
                        Comparison Market
                        <ul>
                          <li>
                            In Comparison Market We Dont Consider Tie or Equal
                            Runs on Both the Innings While Settling . Second
                            Batting Team Must need to Surpass 1st Battings team
                            Total to win otherwise on Equal Score or Below We
                            declare 1st Batting Team as Winner .
                          </li>
                        </ul>
                      </li>
                      <li>
                        Player Boundaries Fancy:- We will only consider Direct
                        Fours and Sixes hit by BAT.
                      </li>
                      <li>
                        BOWLER RUN SESSION RULE :-
                        <ul>
                          <li>
                            IF BOWLER BOWL 1.1 OVER,THEN VALID ( FOR BOWLER 2
                            OVER RUNS SESSION )IF BOWLER BOWL 2.1 OVER,THEN
                            VALID ( FOR BOWLER 3 OVER RUNS SESSION )IF BOWLER
                            BOWL 3.1 OVER,THEN VALID ( FOR BOWLER 4 OVER RUNS
                            SESSION )IF BOWLER BOWL 4.1 OVER,THEN VALID ( FOR
                            BOWLER 5 OVER RUNS SESSION )IF BOWLER BOWL 9.1
                            OVER,THEN VALID ( FOR BOWLER 10 OVER RUNS SESSION )
                          </li>
                        </ul>
                      </li>
                      <li>
                        Total Match Playing Over ADV :- We Will Settle this
                        Market after Whole Match gets Completed
                        <ul>
                          <li>
                            Criteria :- We Will Count Only Round- Off Over For
                            Both the Innings While Settling (For Ex :- If 1st
                            Batting team gets all out at 17.3 , 18.4 or 19.5 we
                            Will Count Such Overs as 17, 18 and 19 Respectively
                            and if Match gets Ended at 17.2 , 18.3 or 19.3 Overs
                            then we will Count that as 17 , 18 and 19 Over
                            Respectively... and this Will Remain Same For Both
                            the Innings ..In Case Of Rain or if Over gets
                            Reduced then this Market will get Voided
                          </li>
                        </ul>
                      </li>
                      <li>
                        3 WKT OR MORE BY BOWLER IN MATCH ADV :-
                        <ul>
                          <li>
                            We Will Settle this Market after Whole Match gets
                            Completed .In Case Of Rain or if Over Gets Reduced
                            then this Market Will get Voided
                          </li>
                        </ul>
                      </li>
                      <li>
                        KHADDA :-
                        <ul>
                          <li>
                            ADV Khadda Fancy is Valid Only for First Innings of
                            the MatchIn Case of Rain or If Over Gets Reduced
                            then this Market Will get VoidedIncomplete Session
                            Bet will be Cancelled but Complete Session Will be
                            Settled
                          </li>
                        </ul>
                      </li>
                      <li>
                        LOTTERY :-
                        <ul>
                          <li>
                            In Case of Rain or If Over Gets Reduced then this
                            Market Will get VoidedIncomplete Session Bet will be
                            Cancelled but Complete Session Will be
                            SettledCriteria :- We will Only Count Last Digit of
                            Sessions Total while settling ..For Example if in 6
                            Overs Market the Score is 37 ...so we will Settle
                            the Market for 6 Over Lottery @ 7
                          </li>
                        </ul>
                      </li>
                      <li>
                        Any cricket event which is being held behind closed
                        doors in that if any players found to be taking
                        advantage of groundline in fancy bets in such cases bets
                        can be voided after the market ends . Company decision
                        to be final .
                      </li>
                      <li>
                        IPL 2021 RULES :-
                        <ul>
                          <li>
                            If Over Reduced in Match, we will not count the
                            actual scores of the Over Reduced Matches instead we
                            will count the Market’s Average Scores.If Match is
                            Abandoned, we will not count the actual scores of
                            the Abandoned Matches instead we will count the
                            Market’s Average Scores.NOTE: -. These rules are for
                            the following Markets of ENTIRE IPL 2021 60 Matches:
                            -Total Match 1st Over Run :- Average 6 Runs will be
                            given if the match is abandoned or over reduced, But
                            If 1st Over is Completed then it will not be counted
                            as Average Score instead we will count the Actual
                            Score if Over is Reduced after completion of 1st
                            Over.Total Fours: - Average 26 Fours will be given
                            if the match is abandoned or over reduced.Total
                            Sixes: - Average 13 Sixes will be given if the match
                            is abandoned or over reduced.Total Wide: - Average 8
                            Wide’s will be given if the match is abandoned or
                            over reduced.Total Extras: - Average 14 Extras will
                            be given if the match is abandoned or over
                            reduced.Total No Ball: - Average 1 No Ball will be
                            given if the match is abandoned or over
                            reduced.Total Duck: - Average 1 Duck will be given
                            if the match is abandoned or over reduced.Total
                            Fifties: - Average 2 Fifties will be given if the
                            match is abandoned or over reduced.Total Century:
                            -Average 0 Century will be given if the match is
                            abandoned or over reduced.Total Run Out: - Average 1
                            Run Out will be given if the match is abandoned or
                            over reduced.Total Wickets: - Average 12 Wickets
                            will be given if the match is abandoned or over
                            reduced.Total Caught out: - Average 8 Caught Out
                            will be given if the match is abandoned or over
                            reduced.Total Maiden Over: - Average 0 Maiden Over
                            will be given if the match is abandoned or over
                            reduced.Total LBW: - Average 1 LBW will be given if
                            the match is abandoned or over reduced.Total Bowled:
                            - Average 2 Bowled will be given if the match is
                            abandoned or over reduced.• In case IPL Matches Gets
                            Stopped or Interrupted Due to COVID-19 or Any ACT OF
                            GOD Reasons, Under 45 Matches then All IPL 2021
                            Tournament Fancy Markets will be Voided, But if 45
                            or Above Matches are Being Played then we will
                            Settle all the Fancy Markets and Also If there are
                            NON Played Matches Above 45 then we will settle the
                            markets as per our Markets Average.* If IPL 2021
                            gets stopped due to “Covid-19” or Any “Act of God”
                            reason then We will wait till 45 days from the day
                            IPL gets stopped , and if IPL Matches gets Resumed
                            before 45th day then we will continue as Usual Score
                            Countation but if IPL 2021 does not resumes until
                            45th day then we will settle the markets according
                            to our above mentioned Markets Averages and In case
                            of Void, We will Void the under 45 matches on 45th
                            day from the day IPL 2021 stopped.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Session Odd-Even Rule:-
                        <ul>
                          <li>
                            We Will Settle the Session ODD-EVEN Market only if
                            the Over is Completed, But If that Over is Not
                            Completed then we will Void that “Session Total Odd”
                            Market.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Company reserves the right to void any bets (only
                        winning bets) of any event at any point of the match if
                        the company believes there is any cheating/wrong doing
                        in that particular event by the players (either
                        batsman/bowler)
                      </li>
                    </ol>
                    <ol id='\"electionRules\"'>
                      <li>
                        Election result declared by Election Commission of India
                        will be valid in our Exchange.
                      </li>
                      <li>
                        Accidental issues in Election will Not Be counted in our
                        Exchange.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRules;
