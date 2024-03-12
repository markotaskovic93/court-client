import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/auth-provider";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
