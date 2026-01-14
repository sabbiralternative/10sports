import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";

const Promotion = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/promotions")}
      className="w-full px-[6px] flex flex-col gap-y-2"
    >
      <div
        className="w-full min-h-[70px] max-h-full  shadow-sm  md:col-span-1 rounded-[10px] pl-[17px] overflow-hidden  bg-cover bg-center bg-no-repeat cursor-pointer active:scale-[0.97] md:hover:scale-[101%] transition-all duration-300 flex items-center"
        style={{
          backgroundImage: `url(${images.promotionBanner})`,
        }}
      >
        <h3 className="w-full text-text_color_primary2 font-bold text-[13px] tracking-[0.219px] leading-normal">
          Promotions &amp; Bonuses
        </h3>
      </div>
    </div>
  );
};

export default Promotion;
