/* Author: Lucas Vincent Johanningmeier */

// React
import React from "react";

// Components
import Projects from "../pages/Projects/Projects";

// Data
import { linksProjectsCoding } from "@/data/links-projects-coding";

const allProjectsLinks = [...linksProjectsCoding];

const projectChildren = allProjectsLinks.map(({ path, component, label }) => ({
  path,
  label,
  protected: false,
  element: React.createElement(component),
}));

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesProjects = [
  {
    path: "projects",
    label: "Projects",
    protected: false,
    element: <Projects />,
    children: projectChildren,
  },
];
