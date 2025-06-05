/* Author: Lucas Vincent Johanningmeier */

import { Outlet } from "react-router-dom";

import styles from "./CssPlayground.module.css";

export default function CssPlayground() {
  return (
    <>
      <div className={styles.cssPlayground}>
        CSS-Playground
        <Outlet />
      </div>
    </>
  );
}
