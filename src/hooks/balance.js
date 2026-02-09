import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../api";
import { logout } from "../redux/features/auth/authSlice";
import { useSettingsMutation } from "./settings";

export const useBalance = () => {
  const { mutate } = useSettingsMutation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  return useQuery({
    queryKey: ["balance", token],
    enabled: token ? true : false,
    queryFn: async () => {
      const res = await AxiosSecure.post(API.balance);

      if (res?.data?.success === false && token) {
        dispatch(logout());
        mutate();
      } else if (res?.data?.success && token) {
        const data = res.data?.result;
        return data;
      }
    },
  });
};

export default useBalance;
