import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const CheckAuth = ({ isAuth, user, children }) => {
  const location = useLocation();

  if (
    !isAuth &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/signup")
    )
  ) {
    return <Navigate to="auth/login" />;
  }

  if (
    isAuth &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/signup"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="auth/dashboard" />;
    } else {
      return <Navigate to="shop/home" />;
    }
  }

  if (
    isAuth &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (isAuth && user?.role === admin && location.pathname.includes("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <children/>
};

export default CheckAuth;
