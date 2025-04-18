/* Author: Lucas Vincent Johanningmeier */

import styles from "../TextAndFont.module.css";

export default function ControlFontSize({ value, onChange }) {
  console.log("ControlFontSize()");

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
