/* Author: Lucas Vincent Johanningmeier */

// Components
import Contact from "@/pages/Contact/Contact";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesContact = [
  {
    path: "/contact",
    label: "Contact",
    protected: false,
    element: <Contact />,
  },
];
