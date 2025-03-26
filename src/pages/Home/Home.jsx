import { useSelector } from "react-redux";
import Banner from "../../components/modules/Home/Banner";
import FAQ from "../../components/modules/Home/FAQ";
import GameProvider from "../../components/modules/Home/GameProvider";
import IndianCardGame from "../../components/modules/Home/IndianCardGame";
import InPlay from "../../components/modules/Home/InPlay";
import TrendingCasino from "../../components/modules/Home/TrendingCasino";
import UpcomingEvents from "../../components/modules/Home/UpcomingEvents";
import Group from "../../components/modules/Home/Group";
import { useGroupQuery } from "../../redux/features/events/events";

const Home = () => {
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
            <TrendingCasino />
          </>
        )}
        <Group data={data} />
        {/* <InPlay /> */}
        {!group && (
          <>
            <GameProvider />
            <IndianCardGame />
            <UpcomingEvents />
          </>
        )}
      </div>
      {!group && <FAQ />}
    </div>
  );
};

export default Home;
