
import { Navigate, Outlet } from "react-router-dom";

const TeacherPrivateRoute = () => {
  const userTeacher = localStorage.getItem("userTeacher");
  return userTeacher ? <Outlet /> : <Navigate to="/notallowed" />;
};

export default TeacherPrivateRoute;