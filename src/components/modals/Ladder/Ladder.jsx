import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const Ladder = ({ ladderData, setLadderData, marketName }) => {
  const ref = useRef();

  useCloseModalClickOutside(ref, () => {
    setLadderData([]);
  });
  return (
    <div
      id="popup-modal"
      className="z-[1000] fixed top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-[100dvh] min-h-[100dvh]     items-center justify-center bg-bg_color_popUpParentBg"
    >
      <div
        ref={ref}
        className="z-2 popUpBoxShadow popUpOpenAnimation  absolute  min-w-[90%] sm:max-w-[400px] h-auto p-4 bg-bg_color_primary p-2 xs:p-5 
      rounded-md
      "
      >
        <div className="flex flex-col items-start justify-center gap-y-2">
          <div className=" text-text_color_primary1  font-lato font-semibold capitalize">
            {marketName}
          </div>
          <table className="w-full table-auto font-lato">
            <thead>
              <tr>
                <th className="text-center">Runs</th>
                <th className="text-center">P&amp;L</th>
              </tr>
            </thead>
            <tbody>
              {ladderData?.map((item, i) => (
                <tr key={i}>
                  <td className="text-center font-normal">
                    {" "}
                    {item?.start}-{item?.end}
                  </td>
                  <td
                    className={`text-center font-normal  ${
                      item?.exposure > 0
                        ? "text-text_color_success"
                        : "text-text_color_danger"
                    }`}
                  >
                    {item?.exposure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => setLadderData([])}
            type="button"
            className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-bg_brand_secondary px-2.5 py-1 rounded-md w-full flex items-center justify-center shadow-md 
            cursor-pointer
            "
          >
            <span className=" text-text_color_primary2 font-semibold fonn-lato text-base">
              OK
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ladder;
