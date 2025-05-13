/* Author: Lucas Vincent Johanningmeier */

import Account from "@/pages/Account/Account";

export const routesAccount = [
  {
    path: "/account",
    label: "Account",
    protected: true,
    element: <Account />,
  },
];
