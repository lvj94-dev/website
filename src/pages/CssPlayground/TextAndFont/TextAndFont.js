/* Author: Lucas Vincent Johanningmeier */

import React, { useState } from "react";

import styles from "./TextAndFont.module.css";

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
            <label>
              Font Size
              <input
                type="range"
                min="10"
                max="100"
                value={parseInt(styleState.fontSize)}
                onChange={(e) => handleChange("fontSize", e.target.value, "px")}
              />
              <span>{styleState.fontSize}</span>
            </label>

            {/* Font Weight */}
            <label>
              Font Weight
              <select
                value={styleState.fontWeight}
                onChange={(e) => handleChange("fontWeight", e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="lighter">Lighter</option>
                <option value="bolder">Bolder</option>
                <option value="100">100</option>
                <option value="900">900</option>
              </select>
            </label>

            {/* Font Family */}
            <label>
              Font Family
              <select
                value={styleState.fontFamily}
                onChange={(e) => handleChange("fontFamily", e.target.value)}
              >
                <option value="Arial">Arial</option>
                <option value="'Times New Roman'">Times New Roman</option>
              </select>
            </label>

            {/* Text Align */}
            <label>
              <select
                value={styleState.textAlign}
                onChange={(e) => handleChange("textAlign", e.target.value)}
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
              </select>
            </label>

            {/* Color */}
            <label>
              Color
              <input
                type="color"
                value={styleState.color}
                onChange={(e) => handleChange("color", e.target.value)}
              />
            </label>
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
