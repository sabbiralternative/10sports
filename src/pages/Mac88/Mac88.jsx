/* eslint-disable react/no-unknown-property */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";
import useGetMac88 from "../../hooks/useGetMac88";

const Mac88 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { data } = useGetMac88();

  const handleAuraCasino = (code, name) => {
    if (token) {
      navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  return (
    <div className="w-full  h-max  lg:w-[54%] lg:pt-2">
      <div
        className="w-full md:mt-[0px] lg:overflow-auto  page-body"
        style={{ minHeight: "calc(-110px + 100dvh)" }}
        _ngcontent-ng-c1965075897=""
      >
        {" "}
        <div className="pt-2.5">
          <div
            _ngcontent-ng-c1965075897=""
            className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
          >
            <div
              _ngcontent-ng-c1965075897=""
              className="game-type-list ng-star-inserted"
            >
              <ul _ngcontent-ng-c1965075897="" className="casino-container">
                {data?.map((item, i) => {
                  return (
                    <li
                      onClick={() =>
                        handleAuraCasino(item?.game_id, item?.game_name)
                      }
                      key={i}
                      _ngcontent-ng-c1965075897=""
                      className="ng-star-inserted"
                    >
                      <a _ngcontent-ng-c1965075897="" className="active">
                        <img
                          _ngcontent-ng-c1965075897=""
                          alt=""
                          src={item?.img}
                        />
                      </a>

                      <div _ngcontent-ng-c1965075897="" className="game-detail">
                        <p _ngcontent-ng-c1965075897="" className="game-name">
                          {item?.game_name}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac88;
