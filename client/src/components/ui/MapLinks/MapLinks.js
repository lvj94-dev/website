/* Author: Lucas Vincent Johanningmeier */

// React
import { useNavigate } from "react-router-dom";

// Error handling
import useSafeValue from "@/hooks/useSafeValue";

// Styling
import styles from "./MapLinks.module.scss";

/**
 * @component
 * @function MapLinks
 *
 * @description
 * Renders a list of navigable link buttons.
 *
 * @param {object} props
 * @property {Array<{ to: string, label: string, key?: string }>} props.source - List of links to render.
 * @property {(key: string) => void} [props.onSelect] - Optional callback invoked when a link is selected.
 * @property {boolean} [props.disableNavigation=false] - If true, disables link navigation and renders static buttons. // [TODO]
 * @property {Function} navigate - Router navigation function.
 *
 * @returns {JSX.Element}
 */
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

/**
 * NOTES
 * - MapLinks({ source, onSelect, disableNavigation })
 *   ==
 *   function MapLinks(props) {
 *     const { source, onSelect, disableNavigation } = props;
 *   }
 *
 * - square brackets are used to indicate that a parameter or property is optional
 */
