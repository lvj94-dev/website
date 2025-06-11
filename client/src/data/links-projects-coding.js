/* Author: Lucas Vincent Johanningmeier */

// Coding
import SourceCode from "@/pages/Projects/Coding/SourceCode/SourceCode";
import CssPlaygroundBoxModel from "@/pages/Projects/Coding/CssPlayground/BoxModel/BoxModel";
import CssPlaygroundTextAndFont from "@/pages/Projects/Coding/CssPlayground/TextAndFont/TextAndFont";
import DevDashboard from "@/pages/Projects/Coding/DevDashboard/DevDashboard";

export const projectsLinksCoding = [
  {
    key: "coding-sourcecode",
    label: "Coding: SourceCode",
    component: SourceCode,
    path: "coding/sourcecode",
  },
  {
    key: "coding-css-playground-box-model",
    label: "Coding: CSS-Playground - Box-Model",
    component: CssPlaygroundBoxModel,
    path: "coding/css-playground/box-model",
  },
  {
    key: "coding-css-playground-text-and-font",
    label: "Coding: CSS-Playground - Text & Font",
    component: CssPlaygroundTextAndFont,
    path: "coding/css-playground/text-andfont",
  },
  {
    key: "coding-dev-dashboard",
    label: "Coding: DevDashboard",
    component: DevDashboard,
    path: "coding/dev-dashboard",
  },
];
