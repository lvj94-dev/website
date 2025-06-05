/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

import useSafeValue from "@/hooks/useSafeValue";

import styles from "./MapLinks.module.scss";

export default function MapLinks({ source, onSelect }) {
  const safeSource = useSafeValue(source, [], {
    isRequired: true,
    label: "MapLinks source",
  });

  return (
    <>
      <nav className={styles.buttonList}>
        {safeSource.map(({ to, label, key }) => (
          <span key={to}>
            {onSelect ? (
              <button
                className={styles.buttonProject}
                onClick={() => onSelect(key || to)}
              >
                {label}
              </button>
            ) : (
              <Link to={to}>{label}</Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
