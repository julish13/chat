import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '@store/context/auth-context.js';

const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const { isAuthenticated } = context;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
