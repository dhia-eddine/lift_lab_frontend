import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component }: { component: React.ComponentType }) => {
  const accessToken = localStorage.getItem("access_token");

  // Check for access token and render the component or navigate
  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return component;
};

export default ProtectedRoute;
