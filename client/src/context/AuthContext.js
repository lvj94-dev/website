/* Author: Lucas Vincent Johanningmeier */

// React
import { createContext, useState, useEffect } from "react";

// Error handling
import useSafeValue from "@/hooks/useSafeValue";

/**
 * @typedef {Object} AuthContextValue
 * @property {string|null} token - Stored authentication token from localStorage.
 * @property {(token: string|null) => void} setToken - State setter for updating the auth token.
 * @property {() => void} logout - Clears the auth token from state and localStorage
 */
export const AuthContext = createContext();

/**
 * @component
 * @function AuthProvider
 *
 * @description
 * Provides authentication state and actions to child components via context.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Components that consume the auth context.
 *
 * @returns {JSX.Element}
 */
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("token");
    } catch (err) {
      console.warn("Failed to load token from localStorage:", err);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.error("Auth token sync error:", err);
    }
  }, [token]);

  const logout = () => {
    setToken(null);
  };

  const safeChildren = useSafeValue(children, null, {
    isRequired: true,
    label: "AuthProvider children",
  });

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {safeChildren}
    </AuthContext.Provider>
  );
}
