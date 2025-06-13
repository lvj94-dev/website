/* Author: Lucas Vincent Johanningmeier */

// Components
import Components from "@/pages/Components/Components";

/**
 * @const
 * @type {import("./routes").RouteEntry}
 */
export const routesComponents = [
  {
    path: "/components",
    label: "Components",
    protected: false,
    element: <Components />,
  },
];
