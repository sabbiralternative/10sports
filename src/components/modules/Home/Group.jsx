import filterInPlay from "../../../utils/filterInPlay";
import filterUpcoming from "../../../utils/filterUpcoming";
import SingleGroup from "./SingleGroup";

const Group = ({ data }) => {
  let inPlay = [];
  let upComing = [];
  if (data) {
    inPlay = filterInPlay(data);
    upComing = filterUpcoming(data);
  }

  return (
    <div className="w-full">
      {inPlay?.length > 0 && (
        <SingleGroup data={data} filterData={inPlay} title="In Play" />
      )}
      {upComing?.length > 0 && (
        <SingleGroup
          margin={true}
          data={data}
          filterData={upComing}
          title="Upcoming Events"
        />
      )}
      {inPlay?.length === 0 && upComing?.length === 0 && (
        <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
          No event available right now!
        </div>
      )}{" "}
    </div>
  );
};

export default Group;
