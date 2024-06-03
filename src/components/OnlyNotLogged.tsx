import React from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../ hooks";

const OnlyNotLogged: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const currentUser = useCurrentUser();

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default OnlyNotLogged;
