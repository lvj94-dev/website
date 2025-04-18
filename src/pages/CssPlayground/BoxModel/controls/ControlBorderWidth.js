/* Author: Lucas Vincent Johanningmeier */

import styles from "./controls.module.css";

export default function ControlBorderWidth({ value, onChange }) {
  console.log("ControlBorderWidth()");

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
