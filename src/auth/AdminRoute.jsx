import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../auth/AuthService";

export default function AdminRoute({ children }) {
  const user = getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
}
