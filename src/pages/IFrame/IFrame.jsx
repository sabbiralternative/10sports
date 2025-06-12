import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userToken } from "../../redux/features/auth/authSlice";
import { API, Settings } from "../../api";
import { AxiosSecure } from "../../lib/AxiosSecure";
import Loader from "../../components/shared/Loader/Loader";

const IFrame = () => {
  const [loading, setLoading] = useState(false);
  const [iFrame, setIFrame] = useState("");
  const { gameId } = useParams();

  const token = useSelector(userToken);

  /* get iframe url */
  useEffect(() => {
    window.scrollTo(0, 0);
    const getCasinoVideo = async () => {
      setLoading(true);
      const payload = {
        gameId: gameId,
        isHome: false,
        mobileOnly: true,
        casinoCurrency: Settings.casinoCurrency,
      };

      try {
        setLoading(true);
        const res = await AxiosSecure.post(API.liveCasinoIframe, payload);
        const data = res?.data;

        setIFrame(data?.gameUrl);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error?.message);
      }
    };
    getCasinoVideo();
  }, [gameId, token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col transition-all  ease-in-out duration-100 pt-0 w-full">
      <div className="flex items-start justify-start w-full">
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-full"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="' bg-transparent w-full h-full">
            <div className="w-full flex h-[calc(100dvh-42px)] lg:h-[calc(100dvh-54px)]">
              <iframe
                src={iFrame}
                title="AVIATOR"
                className="w-full h-full flex-grow no-scrollbar"
                allowFullscreen={true}
              ></iframe>
            </div>
          </div>
          <div className="px-[6px]"></div>
          <div className="py-1 px-[6px]"></div>
        </div>
      </div>
    </div>
  );
};

export default IFrame;
