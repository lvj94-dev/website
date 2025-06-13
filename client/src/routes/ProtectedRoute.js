/* Author: Lucas Vincent Johanningmeier */

// React
import { useContext } from "react";
import { Navigate } from "react-router-dom";

// Context
import { AuthContext } from "../context/AuthContext";

/**
 * @component
 * @function ProtectedRoutes
 *
 * @description
 * A wrapper component that restricts access to routes based on authentication state.
 * It redirects unauthenticated users to the login page.
 *
 * @returns {React.ReactNode}
 */
export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
