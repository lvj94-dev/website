/* Author: Lucas Vincent Johanningmeier */

import styles from "../BoxModel.module.css";

export default function ControlWidth({ value, onChange }) {
  console.log("ControlWidth()");

  return (
    <>
      <div className={styles.controlWidth}>
        <label>
          Width
          <input
            type="range"
            min="10"
            max="400"
            value={parseInt(value)}
            onChange={(e) => onChange("width", e.target.value, "px")}
          />
        </label>

        <span>{value}</span>
      </div>
    </>
  );
}
