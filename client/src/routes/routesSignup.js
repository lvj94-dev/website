/* Author: Lucas Vincent Johanningmeier */

import Signup from "@/pages/Signup/Signup";

export const routesSignup = [
  {
    path: "/signup",
    label: "Signup",
    protected: false,
    element: <Signup />,
  },
];
