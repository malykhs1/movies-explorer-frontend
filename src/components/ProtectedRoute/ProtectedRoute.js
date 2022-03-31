import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({loggedIn}) => {
  const isAuth = loggedIn;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};