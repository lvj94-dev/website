/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../TextAndFont.module.css";

/**
 * @component
 * @function ControlColor
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlColor({ value, onChange }) {
  return (
    <>
      <div className={styles.controlColor}>
        <label>
          Colour
          <input
            type="color"
            value={value}
            onChange={(e) => onChange("color", e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
