/* Author: Lucas Vincent Johanningmeier */

// Components
import Blog from "@/pages/Blog/Blog";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesBlog = [
  {
    path: "/blog",
    label: "Blog",
    protected: true,
    element: <Blog />,
  },
];
