/* Author: Lucas Vincent Johanningmeier */

import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";

import { AppError } from "@/errors/index";

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
