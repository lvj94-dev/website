/* Author: Lucas Vincent Johanningmeier */

// React
import { Outlet } from "react-router-dom";

// Styling
import styles from "./CssPlayground.module.css";

/**
 * @component
 * @function CssPlayground
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
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
