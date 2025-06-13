/* Author: Lucas Vincent Johanningmeier */

// React
import { Navigate } from "react-router-dom";

// Components
import Layout from "../components/layout/Layout/Layout";

// Routes "navbar"
import { routesHome } from "./routesHome";
import { routesProjects } from "./routesProjects";
import { routesComponents } from "./routesComponents";
import { routesBlog } from "./routesBlog";
import { routesLogin } from "./routesLogin";
import { routesAccount } from "./routesAccount";

// Routes "api" / "services"
import { routesSignup } from "./routesSignup";
import { routesContact } from "./routesContact";

// Routes (else)
import NotFound from "@/pages/NotFound/NotFound";

/**
 * @typedef {Object} RouteEntry
 * @property {string} path - URL path of the route.
 * @property {string} label - Name for the route.
 * @property {boolean} protected - Whether the route requires authentication.
 * @property {JSX.Element} element - The component to render for this route.
 * @property {RouteEntry[]} [children] - Optional nested routes.
 */

/**
 * @constant
 * @name routes
 *
 * @description
 * Master route configuration. (Frontend)
 *
 * @type {RouteEntry[]}
 */
export const routes = [
  {
    path: "/",
    label: "/",
    protected: false,
    element: <Layout />,
    children: [
      // navbar
      ...routesHome,
      ...routesProjects,
      ...routesComponents,
      ...routesBlog,
      ...routesLogin,
      ...routesAccount,
      // api, services
      ...routesSignup,
      ...routesContact,
      {
        path: "404",
        label: "Not Found",
        protected: false,
        element: <NotFound />,
      },
      {
        path: "*",
        label: "Wildcard",
        protected: false,
        element: <Navigate to="/404" replace />,
      },
    ],
  },
];
