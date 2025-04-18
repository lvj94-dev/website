/* Author: Lucas Vincent Johanningmeier */

import styles from "./controls.module.css";

export default function ControlMargin({ value, onChange }) {
  console.log("ControlMargin()");

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
