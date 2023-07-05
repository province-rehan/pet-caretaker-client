import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UseAdmin from "../../hooks/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Spinner />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
