/* Author: Lucas Vincent Johanningmeier */

// Coding
import SourceCode from "@/pages/Projects/Coding/SourceCode/SourceCode";
import CssPlaygroundBoxModel from "@/pages/Projects/Coding/CssPlayground/BoxModel/BoxModel";
import CssPlaygroundTextAndFont from "@/pages/Projects/Coding/CssPlayground/TextAndFont/TextAndFont";

// Games
//import GamesExample from "@/pages/Projects/Games/...";

// Maths
//import MathsExample from "@/pages/Projects/Maths/...";

export const projectsLinks = [
  {
    key: "coding-sourcecode",
    label: "Coding: SourceCode",
    component: <SourceCode />,
  },
  {
    key: "coding-css-playground-box-model",
    label: "Coding: CSS-Playground - Box-Model",
    component: <CssPlaygroundBoxModel />,
  },
  {
    key: "coding-css-playground-text-and-font",
    label: "Coding: CSS-Playground - Text & Font",
    component: <CssPlaygroundTextAndFont />,
  },
];
