/* Author: Lucas Vincent Johanningmeier */

// Components
import Login from "@/pages/Login/Login";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesLogin = [
  {
    path: "/login",
    label: "Login",
    protected: false,
    element: <Login />,
  },
];
