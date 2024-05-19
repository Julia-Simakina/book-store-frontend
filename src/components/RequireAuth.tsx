import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const myUser = useAppSelector(state => state.user.currentUser);
  const location = useLocation();

  if (!myUser) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
