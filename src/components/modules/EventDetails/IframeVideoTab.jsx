import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useVideoMutation } from "../../../redux/features/events/events";
import { Settings } from "../../../api";

const IframeVideoTab = ({
  score,
  tab,
  setTab,
  setIframe,
  betType,
  setBetType,
}) => {
  console.log(score);
  const [sportsVideo] = useVideoMutation();
  const { eventId, eventTypeId } = useParams();
  const handleToggle = (t) => {
    if (tab === t) {
      setTab("");
    } else {
      setTab(t);
    }
  };

  const handleGetVideo = async () => {
    handleToggle("video");
    const payload = {
      eventTypeId: eventTypeId,
      eventId: eventId,
      type: "video",
      casinoCurrency: Settings.casinoCurrency,
    };
    const res = await sportsVideo(payload).unwrap();
    if (res?.success) {
      setIframe(res?.result?.url);
    }
  };

  useEffect(() => {
    if (betType === "video") {
      if (!score?.hasVideo) {
        setBetType("");
      }
    }
    if (betType === "tracker") {
      if (!score?.tracker) {
        setBetType("");
      }
    }
  }, [eventId, eventTypeId, score, betType, setBetType]);

  return (
    <div>
      {(score && score?.hasVideo) || score?.tracker ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
            height: "40px",
          }}
        >
          {score && score?.hasVideo && (
            <div
              onClick={handleGetVideo}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                height: "100%",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <span> Video</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5C2 3.34315 3.34315 2 5 2H11C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5Z"
                  fill="#FF4E4E"
                ></path>
                <path
                  d="M6 5.49419C6 5.09507 6.45258 4.86116 6.78195 5.09004L10.388 7.59585C10.6707 7.79224 10.6707 8.20776 10.388 8.40415L6.78195 10.91C6.45258 11.1388 6 10.9049 6 10.5058V5.49419Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          )}
          {score && score?.tracker && (
            <div
              onClick={() => {
                handleToggle("tracker");
                setIframe(score?.tracker);
              }}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                height: "100%",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <span> Tracker</span>
              <svg
                data-cy="ic-tracker-simple"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "currentcolor",
                  color: "rgb(242, 201, 76)",
                  width: "auto",
                  height: "14px",
                }}
              >
                <path
                  opacity="1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5C8 5.51252 7.80722 5.98001 7.49022 6.33391L9.34156 9.11092C9.54775 9.03906 9.76931 9 10 9C10.2307 9 10.4523 9.03907 10.6585 9.11095L12.5098 6.33398C12.1928 5.98007 12 5.51255 12 5C12 3.89543 12.8954 3 14 3C15.1046 3 16 3.89543 16 5C16 6.10457 15.1046 7 14 7C13.7693 7 13.5478 6.96095 13.3416 6.8891L11.4903 9.66613C11.8072 10.02 12 10.4875 12 11C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11C8 10.4875 8.19279 10.02 8.5098 9.66606L6.65847 6.88907C6.45227 6.96094 6.2307 7 6 7C5.76933 7 5.54779 6.96095 5.34161 6.8891L3.49026 9.66613C3.80724 10.02 4 10.4875 4 11C4 12.1046 3.10457 13 2 13C0.895431 13 0 12.1046 0 11C0 9.89543 0.895431 9 2 9C2.23072 9 2.45232 9.03907 2.65853 9.11095L4.50984 6.33398C4.1928 5.98007 4 5.51255 4 5Z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default IframeVideoTab;
