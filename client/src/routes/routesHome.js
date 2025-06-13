/* Author: Lucas Vincent Johanningmeier */

// Components
import Home from "@/pages/Home/Home";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesHome = [
  {
    path: "/home",
    label: "Home",
    protected: false,
    element: <Home />,
  },
];
