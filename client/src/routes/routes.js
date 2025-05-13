/* Author: Lucas Vincent Johanningmeier */

import { Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";

import { routesHome } from "./routesHome";
import { routesProjects } from "./routesProjects";
import { routesComponents } from "./routesComponents";
import { routesBlog } from "./routesBlog";
import { routesAccount } from "./routesAccount";
import { routesLogin } from "./routesLogin";
import { routesContact } from "./routesContact";

import NotFound from "@/pages/NotFound/NotFound";

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
      ...routesAccount,
      ...routesLogin,
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
