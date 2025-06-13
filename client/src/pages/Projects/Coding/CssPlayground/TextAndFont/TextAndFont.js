/* Author: Lucas Vincent Johanningmeier */

import { useState } from "react";

import styles from "./TextAndFont.module.css";

import ControlFontSize from "./controls/ControlFontSize";
import ControlFontWeight from "./controls/ControlFontWeight";
import ControlFontFamily from "./controls/ControlFontFamily";
import ControlTextAlign from "./controls/ControlTextAlign";
import ControlColor from "./controls/ControlColor";

const defaultStyle = {
  fontSize: "20px",
  fontWeight: "normal",
  fontFamily: "Arial",
  textAlign: "left",
  color: "#000000",
};

export default function TextAndFont() {
  console.log("TextAndFont()");

  // state hooks
  const [styleState, setStyleState] = useState(defaultStyle);

  // handlers
  const handleChange = (property, value, unit = "") => {
    setStyleState((prev) => ({
      ...prev,
      [property]: value + unit,
    }));
  };

  return (
    <>
      <div className={styles.textAndFont}>
        <h1>CSS-Playground</h1>
        <hr />
        <h3>Text & Font</h3>

        <div className={styles["textAndFont-wrapper"]}>
          <div>
            {/* Font Size */}
            <ControlFontSize
              value={styleState.fontSize}
              onChange={handleChange}
            />

            {/* Font Weight */}
            <ControlFontWeight
              value={styleState.fontWeight}
              onChange={handleChange}
            />

            {/* Font Family */}
            <ControlFontFamily
              value={styleState.fontFamily}
              onChange={handleChange}
            />

            {/* Text Align */}
            <ControlTextAlign
              value={styleState.textAlign}
              onChange={handleChange}
            />

            {/* Color */}
            <ControlColor value={styleState.color} onChange={handleChange} />
          </div>

          {/* Preview */}
          <div
            style={styleState}
            contentEditable
            className={styles["textAndFont-preview"]}
          >
            "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt."
          </div>
        </div>
      </div>
    </>
  );
}
