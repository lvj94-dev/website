/* Author: Lucas Vincent Johanningmeier */

import { Outlet } from "react-router-dom";

export default function CssPlayground() {
  return (
    <div>
      <h1>CSS-Playground</h1>
      <hr />
      <h3>Text & Font</h3>
      <hr />
      <Outlet />
    </div>
  );
}
