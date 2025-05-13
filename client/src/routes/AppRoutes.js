/* Author: Lucas Vincent Johanningmeier */

import { useRoutes } from "react-router-dom";
import { routes as rawRoutes } from "./routes";

import ProtectedRoute from "../routes/ProtectedRoute";

const wrapProtectedRoutes = (routes) =>
  routes.map((route) => {
    const wrapped = {
      ...route,
      element: route.protected ? (
        <ProtectedRoute>{route.element}</ProtectedRoute>
      ) : (
        route.element
      ),
    };

    if (route.children) {
      wrapped.children = wrapProtectedRoutes(route.children);
    }

    return wrapped;
  });

export default function AppRoutes() {
  const protectedRoutes = wrapProtectedRoutes(rawRoutes);
  return useRoutes(protectedRoutes);
}
