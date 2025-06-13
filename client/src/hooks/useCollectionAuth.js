/* Author: Lucas Vincent Johanningmeier */

// React
import { useContext } from "react";

// Context
import { AuthContext } from "@/context/AuthContext";

// Error handling
import { AppError } from "@/errors/index";

/**
 * @function useAuth
 *
 * @description
 * Custom hook to access the authentication context.
 *
 * @returns {{ token: string|null, setToken: Function, logout: Function}}
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new AppError(
      "useAuth must be used within an AuthProvider",
      "AuthContextError"
    );
  }

  return context;
}
