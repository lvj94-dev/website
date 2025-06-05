/* Author: Lucas Vincent Johanningmeier */

import Projects from "../pages/Projects/Projects";

import CssPlayground from "@/pages/Projects/Coding/CssPlayground/CssPlayground";
import Games from "@/pages/Projects/Games/Games";
import Maths from "@/pages/Projects/Maths/Maths";
import SourceCode from "@/pages/Projects/Coding/SourceCode/SourceCode";

export const routesProjects = [
  {
    path: "projects",
    label: "Projects",
    protected: false,
    element: <Projects />,
    children: [
      // CSS-Playground
      {
        path: "css-playground",
        label: "CSS-Playground",
        protected: false,
        element: <CssPlayground />,
      },
      // GAMES
      { path: "games", label: "Games", protected: false, element: <Games /> },
      // Maths
      { path: "maths", label: "Maths", protected: false, element: <Maths /> },
      // SourceCode
      {
        path: "sourcecode",
        label: "SourceCode",
        protected: false,
        element: <SourceCode />,
      },
    ],
  },
];
