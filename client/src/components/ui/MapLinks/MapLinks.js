/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

import useSafeValue from "@/hooks/useSafeValue";

export default function MapLinks({ source }) {
  const safeSource = useSafeValue(source, [], {
    isRequired: true,
    label: "MapLinks source",
  });

  return (
    <>
      <nav>
        {safeSource.map(({ to, label }) => (
          <span key={to}>
            <Link to={to}>{label}</Link>
          </span>
        ))}
      </nav>
    </>
  );
}
