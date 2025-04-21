/* Author: Lucas Vincent Johanningmeier */

import { Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";

import { routesHome } from "./routesHome";
import { routesProjects } from "./routesProjects";
import { routesComponents } from "./routesComponents";
import { routesBlog } from "./routesBlog";
import { routesLogin } from "./routesLogin";

import NotFound from "../pages/NotFound/NotFound";

export const routes = [
  {
    path: "/",
    label: "/",
    protected: false,
    element: <Layout />,
    children: [
      ...routesHome,
      ...routesProjects,
      ...routesComponents,
      ...routesBlog,
      ...routesLogin,
      {
        path: "404",
        label: "Not Found",
        protected: false,
      },
      {
        path: "*",
        label: "wildcard",
        protected: false,
        element: <Navigate to="/404" replace />,
      },
    ],
  },
];
