import { useEffect } from "react";
import { useSettingsMutation } from "../hooks/settings";
import { useSelector } from "react-redux";

const SettingsLayout = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const { mutate, isSuccess } = useSettingsMutation();

  useEffect(() => {
    mutate();
  }, [token, mutate]);

  if (!isSuccess) {
    return null;
  }

  return children;
};

export default SettingsLayout;
