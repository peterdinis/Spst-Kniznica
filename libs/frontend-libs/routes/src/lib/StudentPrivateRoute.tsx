
import { Navigate, Outlet } from "react-router-dom";

const StudentPrivateRoute = () => {
  const userUsername = localStorage.getItem("userUsername");
  return userUsername ? <Outlet /> : <Navigate to="/notallowed" />;
};

export default StudentPrivateRoute;