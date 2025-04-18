/* Author: Lucas Vincent Johanningmeier */

import React, { useState } from "react";

// TODO: chose 1. the same styling or 2. a separate one for each subpage
import styles from "./BoxModel.module.css";

const defaultStyle = {
  width: "50px",
  height: "50px",
  padding: "10px",
  margin: "10px",
  border: "1px solid black",
  boxSizing: "border-box",
};

// TODO: make it four boxes (!)
export default function BoxModel() {
  const [styleState, setStyleState] = useState(defaultStyle);

  const handleChange = (property, value, unit = "") => {
    setStyleState((prev) => ({
      ...prev,
      [property]: value + unit,
    }));
  };

  return (
    <div className={styles["boxModel-wrapper"]}>
      <div className={styles.boxModel}>
        {/* Width */}
        <label>
          Width
          <input
            type="range"
            min="10"
            max="400"
            value={parseInt(styleState.width)}
            onChange={(e) => handleChange("width", e.target.value, "px")}
          />
          <span>{styleState.width}</span>
        </label>

        {/* Height */}
        <label>
          Height
          <input
            type="range"
            min="10"
            max="400"
            value={parseInt(styleState.height)}
            onChange={(e) => handleChange("height", e.target.value, "px")}
          />
          <span>{styleState.height}</span>
        </label>

        {/* Padding */}
        <label>
          Padding
          <input
            type="range"
            min="0"
            max="50"
            value={parseInt(styleState.padding)}
            onChange={(e) => handleChange("padding", e.target.value, "px")}
          />
          <span>{styleState.padding}</span>
        </label>

        {/* Margin */}
        <label>
          Margin
          <input
            type="range"
            min="0"
            max="50"
            value={parseInt(styleState.margin)}
            onChange={(e) => handleChange("margin", e.target.value, "px")}
          />
          <span>{styleState.margin}</span>
        </label>

        {/* Border Width */}
        <label>
          Border Width
          <input
            type="range"
            min="1"
            max="20"
            value={parseInt(styleState.border)}
            onChange={(e) =>
              handleChange("border", e.target.value, "px solid black")
            }
          />
        </label>
      </div>

      {/* Preview */}
      <div className={styles["boxModel-preview"]}>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} style={styleState}>
            Box {num}
          </div>
        ))}
      </div>
    </div>
  );
}
