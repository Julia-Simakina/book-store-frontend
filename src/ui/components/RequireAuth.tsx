import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const currentUser = useCurrentUser();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
