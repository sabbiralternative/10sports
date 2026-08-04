import { useState } from "react";
import { useGroupQuery } from "../../../redux/features/events/events";
// import filterUpcoming from "../../../utils/filterUpcoming";
import SingleGroup from "./SingleGroup";
import { FilterLiveVirtual } from "../../../utils/filter-live-virtual";

const UpcomingCricketEvent = () => {
  const { data } = useGroupQuery({ sportsType: 4 });
  const [liveVirtual, setLiveVirtual] = useState([]);
  const groupedUpcoming = FilterLiveVirtual(liveVirtual, 4, data, 0);
  // let upComing = [];
  // if (data) {
  //   upComing = filterUpcoming(data);
  // }

  return (
    <div className="w-full">
      {groupedUpcoming?.length > 0 && (
        <SingleGroup
          margin={true}
          data={data}
          filterData={groupedUpcoming}
          title="Upcoming Events"
          defineGroup={4}
          setLiveVirtual={setLiveVirtual}
        />
      )}
    </div>
  );
};

export default UpcomingCricketEvent;
