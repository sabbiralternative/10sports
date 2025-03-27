/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import toast from "react-hot-toast";
import { API, Settings } from "../../api";
import { setShowLoginModal } from "../../redux/features/global/globalSlice";
import { AxiosSecure } from "../../lib/AxiosSecure";
import WarningCondition from "../../components/shared/WarningCondition/WarningCondition";

const AuraSlotLiveCasino = () => {
  const { wolfType } = useParams();
  const [showLeftDropdown, setShowLeftDropdown] = useState(false);
  const [showRightDropdown, setShowRightDropdown] = useState(false);
  const [gameList, setGameList] = useState("All");
  const [product, setProduct] = useState("All");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);

  const [data, setData] = useState({});
  const [warnMessage, setWarnMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* casino thumbnail for 3 tabs */
  useEffect(() => {
    const apiMapping = {
      liveCasinoWolf: API.liveCasinoWolf,
      slotWolf: API.slotsWolf,
      auraWolf: API.auraWolf,
    };
    const getGames = async () => {
      /* TODO */
      const res = await AxiosSecure.post(apiMapping[wolfType], {
        gameList,
        product,
        isHome: false,
      });

      if (res?.status === 200) {
        const result = res?.data;
        setData(result);
      }
    };
    getGames();
  }, [gameList, product, token, wolfType]);

  useEffect(() => {
    setGameList("All");
    setProduct("All");
  }, []);

  const handleAuraCasino = (code, name) => {
    if (token) {
      if (bonusToken) {
        return setWarnMessage("Bonus wallet is available only on sports.");
      } else {
        navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  const handleLiveSlotCasino = (id, name) => {
    if (token) {
      if (bonusToken) {
        return setWarnMessage("Bonus wallet is available only on sports.");
      }
      if (Settings.casinoCurrency !== "AED") {
        navigate(`/casino/${name.replace(/ /g, "")}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: name, gameId: id });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };
  useEffect(() => {
    if (warnMessage) {
      return toast.error(warnMessage);
    }
  }, [warnMessage]);

  return (
    <div
      className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%] page-body"
      style={{ minHeight: "calc(-110px + 100dvh)" }}
      _ngcontent-ng-c1965075897=""
    >
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      {wolfType !== "auraWolf" && (
        <div _ngcontent-ng-c1965075897="" className="filter-wrapper">
          <Dropdown
            showLeftDropdown={showLeftDropdown}
            setShowLeftDropdown={setShowLeftDropdown}
            data={data}
            showRightDropdown={showRightDropdown}
            setShowRightDropdown={setShowRightDropdown}
            setProduct={setProduct}
            setGameList={setGameList}
            product={product}
            gameList={gameList}
          />
        </div>
      )}

      <div className="pt-2.5">
        {wolfType !== "auraWolf" &&
        data &&
        data?.gameList &&
        Object?.values(data?.gameList !== null) &&
        data?.gameList !== null &&
        data?.gameList !== undefined ? (
          Object.keys(data.gameList)
            .filter((key) => data.gameList[key] !== null)
            ?.map((title, i) => {
              return (
                <div
                  key={i}
                  _ngcontent-ng-c1965075897=""
                  className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
                >
                  <div
                    _ngcontent-ng-c1965075897=""
                    className="game-play-heading"
                  >
                    <h2 _ngcontent-ng-c1965075897="">{title}</h2>
                  </div>
                  <div
                    _ngcontent-ng-c1965075897=""
                    className="game-type-list ng-star-inserted"
                  >
                    <ul
                      _ngcontent-ng-c1965075897=""
                      className="casino-container"
                    >
                      {Array.isArray(data.gameList[title])
                        ? data?.gameList[title]?.map((item, i) => {
                            return (
                              <>
                                <li
                                  onClick={() =>
                                    handleLiveSlotCasino(
                                      item?.game_id,
                                      item?.game_name
                                    )
                                  }
                                  key={i}
                                  _ngcontent-ng-c1965075897=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c1965075897=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c1965075897=""
                                      alt=""
                                      src={item?.url_thumb}
                                    />
                                  </a>

                                  <div
                                    _ngcontent-ng-c1965075897=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="company-type"
                                    >
                                      {item?.product}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="game-name"
                                    >
                                      {item?.game_name}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      {item?.text}
                                    </p>
                                  </div>
                                </li>
                              </>
                            );
                          })
                        : Object?.values(data?.gameList[title])?.map(
                            (item, i) => {
                              return (
                                <li
                                  onClick={() =>
                                    handleLiveSlotCasino(
                                      item?.game_id,
                                      item?.game_name
                                    )
                                  }
                                  key={i}
                                  _ngcontent-ng-c1965075897=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c1965075897=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c1965075897=""
                                      alt=""
                                      src={item?.url_thumb}
                                    />
                                  </a>

                                  <div
                                    _ngcontent-ng-c1965075897=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="company-type"
                                    >
                                      {item?.product}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="game-name"
                                    >
                                      {item?.game_name}
                                    </p>
                                    <p
                                      _ngcontent-ng-c1965075897=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      {item?.text}
                                    </p>
                                  </div>
                                </li>
                              );
                            }
                          )}
                    </ul>
                  </div>
                </div>
              );
            })
        ) : (
          <div
            _ngcontent-ng-c1965075897=""
            className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
          >
            {/* <div _ngcontent-ng-c1965075897="" className="game-play-heading">
                <h2 _ngcontent-ng-c1965075897="">{title}</h2>
              </div> */}
            <div
              _ngcontent-ng-c1965075897=""
              className="game-type-list ng-star-inserted"
            >
              <ul _ngcontent-ng-c1965075897="" className="casino-container">
                {data?.data?.map((item, i) => {
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
                      {/* <p _ngcontent-ng-c1965075897="" className="total-players">
                        <span
                          _ngcontent-ng-c1965075897=""
                          role="img"
                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                        >
                          group
                        </span>{" "}
                        {item?.active_players}
                      </p> */}
                      <div _ngcontent-ng-c1965075897="" className="game-detail">
                        {/* <p
                          _ngcontent-ng-c1965075897=""
                          className="company-type"
                        >
                          {item?.provider_name}
                        </p> */}
                        <p _ngcontent-ng-c1965075897="" className="game-name">
                          {item?.game_name}
                        </p>
                        {/* <p
                          _ngcontent-ng-c1965075897=""
                          className="coins-limit ng-star-inserted"
                        >
                          {item?.text}
                        </p> */}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuraSlotLiveCasino;
