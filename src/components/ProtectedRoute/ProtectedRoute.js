// import { Navigate, Outlet } from "react-router-dom";

// export const ProtectedRoute = ({ loggedIn }) => {
//   console.log(loggedIn)


//   if (loggedIn !== null) {
//     if (loggedIn) return (<Outlet />);
//     return (<Navigate to="/" replace />)
//   }
//   return null;
// }

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// export const ProtectedRoute = ({ isLoggedIn, children }) => {
//   if(!isLoggedIn) {
//     return <Navigate to='/' />
//   }
//   return children;
// };

// export default ProtectedRoute;


import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedInContext } from "../../context/IsLoggedInContext";

export const ProtectedRoute = () => {
  const loggedIn = React.useContext(isLoggedInContext);

  const isAuth = loggedIn;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
