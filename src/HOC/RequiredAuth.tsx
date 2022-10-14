import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const RequiredAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { isLogin } = useAuth();  

  if (!isLogin) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <>{children}</>;
};
