/* Author: Lucas Vincent Johanningmeier */

import React from "react";

import Projects from "../pages/Projects/Projects";
import { linksProjectsCoding } from "@/data/links-projects-coding";

const allProjectsLinks = [...linksProjectsCoding];

const projectChildren = allProjectsLinks.map(({ path, component, label }) => ({
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
