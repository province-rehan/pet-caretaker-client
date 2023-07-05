import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UsePetReceiver from "../../hooks/UsePetReceiver";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";

const PetReceiverRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isReceiver, isReceiverLoading] = UsePetReceiver(user?.email);
  const location = useLocation();

  if (loading || isReceiverLoading) {
    return <Spinner />;
  }
  if (user && isReceiver) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PetReceiverRoute;
