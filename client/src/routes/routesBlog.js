/* Author: Lucas Vincent Johanningmeier */

import Blog from "@/pages/Blog/Blog";

export const routesBlog = [
  {
    path: "/blog",
    label: "Blog",
    protected: false,
    element: <Blog />,
  },
];
