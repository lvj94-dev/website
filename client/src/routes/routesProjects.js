/* Author: Lucas Vincent Johanningmeier */

import React from "react";

import Projects from "../pages/Projects/Projects";
import { projectsLinks } from "@/data/links-projects";

const projectChildren = projectsLinks.map(({ path, component, label }) => ({
  path,
  label,
  protected: false,
  element: React.createElement(component),
}));

export const routesProjects = [
  {
    path: "projects",
    label: "Projects",
    protected: false,
    element: <Projects />,
    children: projectChildren,
  },
];
