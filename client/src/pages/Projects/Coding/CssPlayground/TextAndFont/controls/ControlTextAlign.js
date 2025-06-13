/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../TextAndFont.module.css";

/**
 * @component
 * @function ControlTextAlign
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlTextAlign({ value, onChange }) {
  return (
    <>
      <div className={styles.controlTextAlign}>
        <label>
          Text Align
          <select
            value={value}
            onChange={(e) => onChange("textAlign", e.target.value)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </label>
      </div>
    </>
  );
}
