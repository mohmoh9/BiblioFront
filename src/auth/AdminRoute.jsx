import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../auth/authService";

export default function AdminRoute({ children }) {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
}
