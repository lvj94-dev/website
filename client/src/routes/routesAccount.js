/* Author: Lucas Vincent Johanningmeier */

import Account from "@/pages/Account/Account";
import { routesAccountSettings } from "./routesAccountSettings";

export const routesAccount = [
  {
    path: "/account",
    label: "Account",
    protected: true,
    element: <Account />,
    children: [...routesAccountSettings],
  },
];
