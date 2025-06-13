/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "../BoxModel.module.css";

/**
 * @component
 * @function ControlBorderWidth
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function ControlBorderWidth({ value, onChange }) {
  return (
    <>
      <div className={styles.controlBorderWidth}>
        <label>
          Border Width
          <input
            type="range"
            min="1"
            max="20"
            value={parseInt(value)}
            onChange={(e) =>
              onChange("border", e.target.value, "px solid black")
            }
          />
        </label>

        <span>{value}</span>
      </div>
    </>
  );
}
