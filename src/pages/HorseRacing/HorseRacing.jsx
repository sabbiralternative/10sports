import HorseGreyhound from "../../components/modules/HorseGreyhound/HorseGreyhound";
import { useGroupQuery } from "../../redux/features/events/events";

const HorseRacing = () => {
  const { data } = useGroupQuery(
    { sportsType: 7 },
    {
      pollingInterval: 1000,
    }
  );
  return (
    <div
      className="w-full h-full
lg:w-[54%] lg:pt-2 horse-greyhound"
    >
      {" "}
      <HorseGreyhound data={data} title="Horse Racing" eventTypeId={7} />;
    </div>
  );
};

export default HorseRacing;
