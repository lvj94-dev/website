/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

export default function MapLinks({ source }) {
  console.log("MapLinks()");

  return (
    <>
      <div>
        {source.map(({ to, label }) => (
          <span key={to}>
            <Link to={to}>{label}</Link>
          </span>
        ))}
      </div>
    </>
  );
}
