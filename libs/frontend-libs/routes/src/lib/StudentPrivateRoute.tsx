
import { Navigate, Outlet } from "react-router-dom";

const StudentPrivateRoute = () => {
  const adminEmail = localStorage.getItem("adminEmail");
  return adminEmail ? <Outlet /> : <Navigate to="/notallowed" />;
};

export default StudentPrivateRoute;