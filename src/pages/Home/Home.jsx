import { useSelector } from "react-redux";
import Banner from "../../components/modules/Home/Banner";
import FAQ from "../../components/modules/Home/FAQ";
import GameProvider from "../../components/modules/Home/GameProvider";
import PopularGames from "../../components/modules/Home/PopularGames";
import TrendingCasino from "../../components/modules/Home/TrendingCasino";

import Group from "../../components/modules/Home/Group";
import { useGroupQuery } from "../../redux/features/events/events";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import IndianCardGames from "../../components/modules/Home/IndianCardGames";
import InPlay from "../../components/modules/Home/InPlay";
import UpcomingCricketEvent from "../../components/modules/Home/UpcomingCricketEvent";

const Home = () => {
  const { data: lotusLobby } = useLotusHomeLobby();
  const { group } = useSelector((state) => state.global);

  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    }
  );

  return (
    <div className="w-full  h-max  lg:w-[54%] lg:pt-2">
      <div
        id="home"
        className="pb-2 pt-1.5 flex flex-col items-start justify-start gap-y-[15px]"
      >
        {!group && (
          <>
            <Banner />

            <TrendingCasino trendingGames={lotusLobby?.trendingGames} />
          </>
        )}
        {group ? <Group data={data} /> : <InPlay />}

        {/* <InPlay /> */}
        {!group && (
          <>
            <GameProvider casinoProviders={lotusLobby?.casinoProviders} />
            <IndianCardGames />
            <UpcomingCricketEvent />
            <PopularGames popularGames={lotusLobby?.popularGames} />
          </>
        )}
      </div>
      {!group && <FAQ />}
    </div>
  );
};

export default Home;
