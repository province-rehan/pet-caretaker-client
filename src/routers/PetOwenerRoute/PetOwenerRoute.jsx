import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UsePetOwener from "../../hooks/UsePetOwener";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";

const PetOwenerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isOwner, isOwnerLoading] = UsePetOwener(user?.email);
  const location = useLocation();

  if (loading || isOwnerLoading) {
    return <Spinner />;
  }
  if (user && isOwner) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PetOwenerRoute;
