import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OpenBet = () => {
  const [showBets, setShowBets] = useState(true);
  const { eventId } = useParams();
  const { data } = useCurrentBets(eventId);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showLogin = () => {
    dispatch(setShowLoginModal(true));
  };

  console.log(data);
  return (
    <>
      {token ? (
        <div className=" flex flex-col w-full  gap-1 text-text_color_primary1">
          <div className="w-full origin-top scaleVerticalOpen" />
          <div
            onClick={() => setShowBets((prev) => !prev)}
            id="matched_1"
            className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_text_brand_primary rounded "
          >
            <span className=" text-text_color_primary2 text-xs">
              Matched Bets
            </span>
            <div className=" flex items-center justify-center autoAnimate ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                transform={`${showBets ? "rotate(180)" : ""}`}
                viewBox="0 0 512 512"
                height={12}
                width={12}
                fill="var(--icon-color-secondary)"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
          </div>
          <div className="w-full origin-top scaleVerticalOpen">
            <div className="flex flex-col gap-1 w-full">
              {showBets &&
                data?.map((bet) => (
                  <div
                    key={bet?.betId}
                    className=" bg-bg_color_primary rounded-md divide-y divide-divide_color_primary1 w-full shadow "
                  >
                    <div id="eventHeader" className="font-semibold   px-3 py-2">
                      <div
                        className={`font-medium underline capitalize text-sm  ${
                          bet?.betType === "Back"
                            ? "text-text_color_changeAnimationBack"
                            : "text-text_color_changeAnimationLay"
                        }`}
                      >
                        {bet?.title}
                      </div>
                    </div>
                    <div className="px-3 py-2 text-text_color_primary1  uppercase font-lato flex flex-col">
                      <span className=" font-semibold text-xs ">
                        {bet?.marketName}
                      </span>
                      <span className=" font-normal text-xs">
                        {bet?.nation}
                      </span>
                    </div>
                    <div
                      id="tiem_Date_of_order_0_1743688800000"
                      className=" text-xs px-3 py-2 text-center bg-bg_color_tertiary1 font-lato font-normal rounded-b-md text-text_color_primary1"
                    >
                      PLACED - {bet?.placeDate}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <h4 className="text-sm font-lato text-center py-4 text-text_color_primary1">
          Please login to see your open bets.{" "}
          <button
            onClick={showLogin}
            className="bg-bg_text_brand_primary bg-clip-text text-transparent cursor-pointer hover:underline"
          >
            Login
          </button>
        </h4>
      )}
    </>
  );
};

export default OpenBet;
