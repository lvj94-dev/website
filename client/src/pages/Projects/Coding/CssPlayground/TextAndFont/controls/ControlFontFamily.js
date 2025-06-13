/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../TextAndFont.module.css";

/**
 * @component
 * @function ControlFontFamily
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlFontFamily({ value, onChange }) {
  return (
    <>
      <div className={styles.controlFontFamily}>
        <label>
          Font Family
          <select
            value={value}
            onChange={(e) => onChange("fontFamily", e.target.value)}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </label>
      </div>
    </>
  );
}
