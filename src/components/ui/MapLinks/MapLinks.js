/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

export default function MapLinks({ source }) {
  console.log("MapLinks()");

  return (
    <>
      <div>
        {source.map(({ to, label }) => (
          <div key={to}>
            <Link to={to}>{label}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
