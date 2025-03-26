import { Navigate } from "react-router-dom";
import { Settings } from "../api";
import { logout } from "../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  if (Settings.forceLogin) {
    if (!token) {
      dispatch(logout());
      return <Navigate to={"/login"}></Navigate>;
    }
  }
  return children;
};

export default PrivateRoute;
