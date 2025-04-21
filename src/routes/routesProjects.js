/* Author: Lucas Vincent Johanningmeier */

import Projects from "../pages/Projects/Projects";

import CssPlayground from "../pages/Projects/CssPlayground/CssPlayground";
import Games from "../pages/Projects/Games/Games";
import Maths from "../pages/Projects/Maths/Maths";

export const routesProjects = [
  {
    path: "/projects",
    element: <Projects />,
    children: [
      { path: "css-playground", element: <CssPlayground /> },
      { path: "games", element: <Games /> },
      { path: "maths", element: <Maths /> },
    ],
  },
];
