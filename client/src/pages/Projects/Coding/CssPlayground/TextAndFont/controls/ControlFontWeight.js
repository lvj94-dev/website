/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../TextAndFont.module.css";

/**
 * @component
 * @function ControlFontWeight
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlFontWeight({ value, onChange }) {
  return (
    <>
      <div className={styles.controlFontWeight}>
        <label>
          Font Weight
          <select
            value={value}
            onChange={(e) => onChange("fontWeight", e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Lighter</option>
            <option value="bolder">Bolder</option>
            <option value="100">100</option>
            <option value="900">900</option>
          </select>
        </label>
      </div>
    </>
  );
}
