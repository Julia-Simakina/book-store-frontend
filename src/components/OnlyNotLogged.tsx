import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/store";

const OnlyNotLogged: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const currentUser = useAppSelector((state) => state.main.currentUser);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default OnlyNotLogged;
