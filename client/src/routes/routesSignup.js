/* Author: Lucas Vincent Johanningmeier */

// Components
import Signup from "@/pages/Signup/Signup";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesSignup = [
  {
    path: "/signup",
    label: "Signup",
    protected: false,
    element: <Signup />,
  },
];
