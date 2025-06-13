/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../BoxModel.module.css";

/**
 * @component
 * @function ControlWidth
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlWidth({ value, onChange }) {
  return (
    <>
      <div className={styles.controlWidth}>
        <label>
          Width
          <input
            type="range"
            min="10"
            max="400"
            value={parseInt(value)}
            onChange={(e) => onChange("width", e.target.value, "px")}
          />
        </label>

        <span>{value}</span>
      </div>
    </>
  );
}
