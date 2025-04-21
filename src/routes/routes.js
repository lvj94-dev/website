/* Author: Lucas Vincent Johanningmeier */

// Components
import Layout from "../components/layout/Layout/Layout";

import { routesHome } from "./routesHome";
import { routesProjects } from "./routesProjects";
import { routesComponents } from "./routesComponents";
import { routesBlog } from "./routesBlog";
import { routesLogin } from "./routesLogin";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      ...routesHome,
      ...routesProjects,
      ...routesComponents,
      ...routesBlog,
      ...routesLogin,
    ],
  },
];
