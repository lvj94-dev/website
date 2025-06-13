/* Author: Lucas Vincent Johanningmeier */

// React
import { useRoutes } from "react-router-dom";

// Routes
import { routes as rawRoutes } from "./routes";
import ProtectedRoute from "../routes/ProtectedRoute";

/**
 * @function wrapProtectedRoutes
 *
 * @description
 * Wraps route elements that are marked as protected with the component <ProtectedRoute>
 * so that the user cannot access them.
 *
 * @param {Array<Objects>} routes - Array of route objects, each optionally with a 'protected' flag and nested 'children'.
 *
 * @returns {Array<Objects>}
 */
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

/**
 * @component
 * @function AppRoutes
 *
 * @description
 * Applies protection logic to any route marked as 'protected'.
 *
 * @returns {React.ReactElement||null}
 */
export default function AppRoutes() {
  const protectedRoutes = wrapProtectedRoutes(rawRoutes);
  return useRoutes(protectedRoutes);
}
