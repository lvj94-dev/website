/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../BoxModel.module.css";

/**
 * @component
 * @function ControlHeight
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlHeight({ value, onChange }) {
  return (
    <>
      <div className={styles.controlHeight}>
        <label>
          Height
          <input
            type="range"
            min="10"
            max="400"
            value={parseInt(value)}
            onChange={(e) => onChange("height", e.target.value, "px")}
          />
        </label>

        <span>{value}</span>
      </div>
    </>
  );
}
