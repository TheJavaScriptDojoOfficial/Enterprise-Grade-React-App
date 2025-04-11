import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  console.log('isAuthenticated', isAuthenticated);
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default AuthLayout;
