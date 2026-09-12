import { useRef, useState } from "react";
import { useLogo } from "../../../context/ApiProvider";
import { useDispatch } from "react-redux";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/global/globalSlice";
import { Settings } from "../../../api";
import GetOTP from "./GetOTP";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const [tab, setTab] = useState(
    Settings.registration_mobile ? "mobile" : "username",
  );
  const [showRegister, setShowRegister] = useState(false);
  const { logo } = useLogo();
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState("");
  const [OTP, setOTP] = useState({});

  const registerRef = useRef();
  useCloseModalClickOutside(registerRef, () => {
    closeModal();
  });

  const closeModal = () => {
    dispatch(setShowRegisterModal(false));
  };

  const showLogin = () => {
    closeModal();
    dispatch(setShowLoginModal(true));
  };
  return (
    <>
      {" "}
      {Settings.otp && !showRegister ? (
        <GetOTP
          mobileNo={mobile}
          setMobileNo={setMobile}
          setOrderId={setOTP}
          setShowRegister={setShowRegister}
          closeModal={closeModal}
          logo={logo}
          registerRef={registerRef}
          showLogin={showLogin}
          setUser={setUser}
          user={user}
          setTab={setTab}
          tab={tab}
        />
      ) : (
        <RegistrationForm
          showRegister={showRegister}
          setShowRegister={setShowRegister}
          showLogin={showLogin}
          registerRef={registerRef}
          OTP={OTP}
          mobile={mobile}
          setMobile={setMobile}
          setOTP={setOTP}
          user={user}
          tab={tab}
          setUserName={setUser}
        />
      )}
    </>
  );
};

export default Registration;
