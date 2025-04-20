/* Author: Lucas Vincent Johanningmeier */

import { useState } from "react";

// TODO: chose 1. the same styling or 2. a separate one for each subpage
import styles from "./BoxModel.module.css";

import ControlWidth from "./controls/ControlWidth";
import ControlHeight from "./controls/ControlHeight";
import ControlPadding from "./controls/ControlPadding";
import ControlMargin from "./controls/ControlMargin";
import ControlBorderWidth from "./controls/ControlBorderWidth";

import VerticalLine from "../../../components/ui/VerticalLine/VerticalLine";

const defaultStyle = {
  width: "50px",
  height: "50px",
  padding: "10px",
  margin: "10px",
  border: "1px solid black",
  boxSizing: "border-box",
};

export default function BoxModel() {
  console.log("BoxModel()");

  const [styleState, setStyleState] = useState(defaultStyle);

  const handleChange = (property, value, unit = "") => {
    setStyleState((prev) => ({
      ...prev,
      [property]: value + unit,
    }));
  };

  return (
    <>
      <div className={styles.boxModel}>
        <h1>CSS-Playground</h1>
        <hr />
        <h3>Box-Model</h3>

        <div className={styles["boxModel-wrapper"]}>
          <div>
            {/* Width */}
            <ControlWidth value={styleState.width} onChange={handleChange} />

            {/* Height */}
            <ControlHeight value={styleState.height} onChange={handleChange} />

            {/* Padding */}
            <ControlPadding
              value={styleState.padding}
              onChange={handleChange}
            />

            {/* Margin */}
            <ControlMargin value={styleState.margin} onChange={handleChange} />

            {/* Border Width */}
            <ControlBorderWidth
              value={styleState.borderWidth}
              onChange={handleChange}
            />
          </div>

          <VerticalLine />

          {/* Preview */}
          <div className={styles["boxModel-preview"]}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} style={styleState}>
                Box {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
