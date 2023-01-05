import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoute = () => {
  const adminEmail = localStorage.getItem("adminEmail");
  return adminEmail ? <Outlet /> : <Navigate to="/notallowed" />;
};

export default AdminPrivateRoute;