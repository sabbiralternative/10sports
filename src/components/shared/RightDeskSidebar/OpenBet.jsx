import { useDispatch } from "react-redux";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const OpenBet = () => {
  const dispatch = useDispatch();
  const showLogin = () => {
    dispatch(setShowLoginModal(true));
  };
  return (
    <h4 className="text-sm font-lato text-center py-4 text-text_color_primary1">
      Please login to see your open bets.{" "}
      <button
        onClick={showLogin}
        className="bg-bg_text_brand_primary bg-clip-text text-transparent cursor-pointer hover:underline"
      >
        Login
      </button>
    </h4>
  );
};

export default OpenBet;
