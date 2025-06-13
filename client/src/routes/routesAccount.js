/* Author: Lucas Vincent Johanningmeier */

// Components
import Account from "@/pages/Account/Account";

// Routes
import { routesAccountSettings } from "./routesAccountSettings";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesAccount = [
  {
    path: "/account",
    label: "Account",
    protected: true,
    element: <Account />,
    children: [...routesAccountSettings],
  },
];
