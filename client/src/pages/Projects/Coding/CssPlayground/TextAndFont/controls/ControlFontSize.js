/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../TextAndFont.module.css";

/**
 * @component
 * @function ControlFontSize
 *
 * @description
 *
 * @returns {JSX.Element}
 */
export default function ControlFontSize({ value, onChange }) {
  return (
    <>
      <div className={styles.controlFontSize}>
        <label>
          Font Size
          <input
            type="range"
            min="10"
            max="100"
            value={parseInt(value)}
            onChange={(e) => onChange("fontSize", e.target.value, "px")}
          />
          <span>{value}</span>
        </label>
      </div>
    </>
  );
}
