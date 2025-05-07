/* Author: Lucas Vincent Johanningmeier */

import Login from "@/pages/Login/Login";

export const routesLogin = [
  {
    path: "/login",
    label: "Login",
    protected: false,
    element: <Login />,
  },
];
