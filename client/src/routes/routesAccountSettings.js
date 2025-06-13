/* Author: Lucas Vincent Johanningmeier */

// Components
import AccountSettings from "@/pages/AccountSettings/AccountSettings";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesAccountSettings = [
  {
    path: "/account/settings",
    label: "AccountSettings",
    protected: true,
    element: <AccountSettings />,
  },
];
