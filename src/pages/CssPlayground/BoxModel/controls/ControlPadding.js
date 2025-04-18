/* Author: Lucas Vincent Johanningmeier */

import styles from "../BoxModel.module.css";

export default function ControlPadding({ value, onChange }) {
  console.log("ControlPadding()");

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
