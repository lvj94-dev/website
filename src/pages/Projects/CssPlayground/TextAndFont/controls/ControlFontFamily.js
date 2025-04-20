/* Author: Lucas Vincent Johanningmeier */

import styles from "../TextAndFont.module.css";

export default function ControlFontFamily({ value, onChange }) {
  console.log("ControlFontFamily()");

  return (
    <>
      <div className={styles.controlFontFamily}>
        <label>
          Font Family
          <select
            value={value}
            onChange={(e) => onChange("fontFamily", e.target.value)}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </label>
      </div>
    </>
  );
}
