import { useDispatch, useSelector } from "react-redux";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MatchOddBookmaker from "../../components/modules/EventDetails/MatchOddBookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
// import Score from "../../components/modules/EventDetails/Score";
// import IframeVideoTab from "../../components/modules/EventDetails/IframeVideoTab";
// import Tracker from "../../components/modules/EventDetails/Tracker";
import HorseGreyhoundEventDetails from "../../components/modules/EventDetails/HorseGreyhoundEventDetails";
import DesktopEventHeader from "../../components/modules/EventDetails/DesktopEventHeader";
import MobileEventHeader from "../../components/modules/EventDetails/MobileEventHeader";
import ScoreCard from "../../components/modules/EventDetails/ScoreCard";
import TennisScore from "../../components/modules/EventDetails/TennisScore";
import SportsBook from "./SportsBook/SportsBook";
// import FootballScore from "../../components/modules/EventDetails/FootballScore";

const EventDetails = () => {
  // const [tab, setTab] = useState("");
  // const [iFrame, setIframe] = useState("");
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const match_odds = data?.result?.filter(
    (match_odd) =>
      match_odd.btype === "MATCH_ODDS" && match_odd?.visible == true
  );
  return (
    <div
      className="w-full h-full
     lg:w-[54%] lg:pt-2"
    >
      <div className="w-full h-full">
        <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
          <DesktopEventHeader data={data} />
          <div className="hidden lg:block">
            {eventTypeId == 2 && <TennisScore score={data?.score} />}
          </div>

          <MobileEventHeader score={data?.score} data={data} />

          <div className=" w-full text-selection-none pb-3 lg:pb-0">
            <div className=" px-2 font-helvetica-neue">
              {match_odds?.[0]?.score?.length > 0 && eventTypeId == 4 && (
                <ScoreCard match_odds={match_odds} />
              )}
              {/* {eventTypeId == 4 &&
                data?.result?.[0]?.score2?.length !== 0 &&
                !Array.isArray(data?.result?.[0]?.score2) && (
                  <Score mobile={false} score2={data?.result?.[0]?.score2} />
                )} */}
              {/* <IframeVideoTab
                iFrame={iFrame}
                setIframe={setIframe}
                tab={tab}
                setTab={setTab}
                score={data?.score}
                betType={tab}
                setBetType={setTab}
              /> */}
              {/* <Tracker score={data?.score} /> */}
              {data?.result?.length > 0 && (
                <MatchOddBookmaker data={data?.result} />
              )}
              {data?.result?.length > 0 && <Fancy data={data?.result} />}

              {eventTypeId == 7 || eventTypeId == 4339 ? (
                <HorseGreyhoundEventDetails data={data} />
              ) : null}
              {data && data?.sportsbook?.Result && (
                <SportsBook sportsBook={data?.sportsbook?.Result} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
