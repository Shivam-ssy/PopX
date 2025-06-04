import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children, requireAuth }) => {
  const currentUserId = localStorage.getItem('currentUserId');

  if (requireAuth && !currentUserId) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && currentUserId) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default AuthGuard;
