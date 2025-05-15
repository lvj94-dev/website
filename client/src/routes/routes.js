/* Author: Lucas Vincent Johanningmeier */

import { Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";

// navbar
import { routesHome } from "./routesHome";
import { routesProjects } from "./routesProjects";
import { routesComponents } from "./routesComponents";
import { routesBlog } from "./routesBlog";
import { routesAccount } from "./routesAccount";
import { routesLogin } from "./routesLogin";
// api
import { routesSignup } from "./routesSignup";
// services
import { routesContact } from "./routesContact";

import NotFound from "@/pages/NotFound/NotFound";

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
      ...routesAccount,
      ...routesLogin,
      ...routesSignup,
      // api
      // services
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
