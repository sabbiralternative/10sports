import { useSelector } from "react-redux";
// import filterInPlay from "../../../utils/filterInPlay";
// import filterUpcoming from "../../../utils/filterUpcoming";
import SingleGroup from "./SingleGroup";
import { useState } from "react";
import { FilterLiveVirtual } from "../../../utils/filter-live-virtual";

const Group = ({ data }) => {
  const { group } = useSelector((state) => state.global);

  const [liveVirtualInPlay, setLiveVirtualInPlay] = useState([]);
  const [liveVirtualUpcoming, setLiveVirtualUpcoming] = useState([]);
  // let inPlay = [];
  // let upComing = [];
  // if (data) {
  //   inPlay = filterInPlay(data);
  //   upComing = filterUpcoming(data);
  // }
  const groupedUpcoming = FilterLiveVirtual(
    liveVirtualUpcoming,
    group,
    data,
    0,
  );
  const groupedInPlay = FilterLiveVirtual(liveVirtualInPlay, group, data, 1);

  return (
    <div className="w-full">
      <SingleGroup
        data={data}
        filterData={groupedInPlay}
        title="IN_PLAY"
        setLiveVirtual={setLiveVirtualInPlay}
      />
      {groupedInPlay?.length === 0 && (
        <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
          No inplay event available right now!
        </div>
      )}{" "}
      <SingleGroup
        margin={true}
        data={data}
        filterData={groupedUpcoming}
        title="UPCOMING"
        setLiveVirtual={setLiveVirtualUpcoming}
      />
      {groupedUpcoming?.length === 0 && (
        <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
          No upcoming event available right now!
        </div>
      )}{" "}
    </div>
  );
};

export default Group;
