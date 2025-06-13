/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../BoxModel.module.css";

/**
 * @component
 * @function ControlPadding
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlPadding({ value, onChange }) {
  return (
    <>
      <div className={styles.controlPadding}>
        <label>
          Padding
          <input
            type="range"
            min="0"
            max="50"
            value={parseInt(value)}
            onChange={(e) => onChange("padding", e.target.value, "px")}
          />
        </label>

        <span>{value}</span>
      </div>
    </>
  );
}
