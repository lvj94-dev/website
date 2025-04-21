/* Author: Lucas Vincent Johanningmeier */

import Projects from "../pages/Projects/Projects";

import CssPlayground from "../pages/Projects/CssPlayground/CssPlayground";
import Games from "../pages/Projects/Games/Games";
import Maths from "../pages/Projects/Maths/Maths";

export const routesProjects = [
  {
    path: "/projects",
    label: "Projects",
    protected: false,
    element: <Projects />,
    children: [
      {
        path: "css-playground",
        label: "CSS-Playground",
        protected: false,
        element: <CssPlayground />,
      },
      { path: "games", label: "Games", protected: false, element: <Games /> },
      { path: "maths", label: "Maths", protected: false, element: <Maths /> },
    ],
  },
];
