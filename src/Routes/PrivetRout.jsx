import React, { useContext } from "react";
import { AuthContext } from "../pages/Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return (
      <progress
        className="progress progress-secondary w-56"
        value="40"
        max="100"
      ></progress>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivetRout;
