/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../BoxModel.module.css";

/**
 * @component
 * @function ControlMargin
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlMargin({ value, onChange }) {
  return (
    <>
      <div className={styles.controlMargin}>
        <label>
          Margin
          <input
            type="range"
            min="0"
            max="50"
            value={parseInt(value)}
            onChange={(e) => onChange("margin", e.target.value, "px")}
          />
        </label>

        <span>{value}</span>
      </div>
    </>
  );
}
