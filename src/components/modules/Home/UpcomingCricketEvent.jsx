import { useGroupQuery } from "../../../redux/features/events/events";
import filterUpcoming from "../../../utils/filterUpcoming";
import SingleGroup from "./SingleGroup";

const UpcomingCricketEvent = () => {
  const { data } = useGroupQuery({ sportsType: 4 });
  let upComing = [];
  if (data) {
    upComing = filterUpcoming(data);
  }

  return (
    <div className="w-full">
      {upComing?.length > 0 && (
        <SingleGroup
          margin={true}
          data={data}
          filterData={upComing}
          title="Upcoming Events"
          defineGroup={4}
        />
      )}
    </div>
  );
};

export default UpcomingCricketEvent;
