/* Author: Lucas Vincent Johanningmeier */

import styles from "../TextAndFont.module.css";

export default function ControlTextAlign({ value, onChange }) {
  console.log("ControlTextAlign()");

  return (
    <>
      <div className={styles.controlTextAlign}>
        <label>
          Text Align
          <select
            value={value}
            onChange={(e) => onChange("textAlign", e.target.value)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </label>
      </div>
    </>
  );
}
