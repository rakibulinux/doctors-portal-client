import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-3xl text-center">Loading</h1>;
  }
  if (!user) {
    <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoutes;
