/* Author: Lucas Vincent Johanningmeier */

import { createContext, useState, useEffect } from "react";

import useSafeValue from "@/hooks/useSafeValue";

export const AuthContext = createContext();

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
