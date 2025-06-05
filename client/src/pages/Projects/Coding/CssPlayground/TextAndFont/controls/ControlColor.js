/* Author: Lucas Vincent Johanningmeier */

import styles from "../TextAndFont.module.css";

export default function ControlColor({ value, onChange }) {
  console.log("ControlColor()");

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
