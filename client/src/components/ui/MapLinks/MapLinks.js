/* Author: Lucas Vincent Johanningmeier */

import { useNavigate } from "react-router-dom";

import useSafeValue from "@/hooks/useSafeValue";

import styles from "./MapLinks.module.scss";

export default function MapLinks({
  source,
  onSelect,
  disableNavigation = false,
}) {
  const navigate = useNavigate();

  const safeSource = useSafeValue(source, [], {
    isRequired: true,
    label: "MapLinks source",
  });

  return (
    <div className={styles.mapLinks}>
      <nav>
        {safeSource.map(({ to, label, key }) => (
          <span key={to}>
            {disableNavigation ? (
              <span className={styles.buttonProject}>{label}</span>
            ) : (
              <button
                className={styles.buttonProject}
                onClick={() => {
                  if (onSelect) onSelect(key || to);
                  navigate(to);
                }}
              >
                {label}
              </button>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
