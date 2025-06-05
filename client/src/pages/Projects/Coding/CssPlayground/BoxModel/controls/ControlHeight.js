/* Author: Lucas Vincent Johanningmeier */

import styles from "../BoxModel.module.css";

export default function ControlHeight({ value, onChange }) {
  console.log("ControlHeight()");

  return (
    <>
      <div className={styles.controlHeight}>
        <label>
          Height
          <input
            type="range"
            min="10"
            max="400"
            value={parseInt(value)}
            onChange={(e) => onChange("height", e.target.value, "px")}
          />
        </label>

        <span>{value}</span>
      </div>
    </>
  );
}
