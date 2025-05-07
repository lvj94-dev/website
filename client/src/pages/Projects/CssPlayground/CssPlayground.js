/* Author: Lucas Vincent Johanningmeier */

import { Outlet } from "react-router-dom";

import styles from "./CssPlayground.module.css";

export default function CssPlayground() {
  console.log("CssPlayground()");

  return (
    <>
      <div className={styles.cssPlayground}>
        <Outlet />
      </div>
    </>
  );
}
