/* Author: Lucas Vincent Johanningmeier */

import AccountSettings from "@/pages/AccountSettings/AccountSettings";

export const routesAccountSettings = [
  {
    path: "/account/settings",
    label: "AccountSettings",
    protected: true,
    element: <AccountSettings />,
  },
];
