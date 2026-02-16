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
      casino_currency: Settings.casino_currency,
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
    <div className="">
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
              className="hidden lg:flex"
              onClick={handleGetVideo}
              style={{
                flex: 1,

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
        </div>
      ) : null}
    </div>
  );
};

export default IframeVideoTab;
