/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  console.log("Navbar()");

  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>

        <div className={styles.dropdown}>
          <span className={styles["dropdown-btn"]}>CSS-Playground</span>
          <div className={styles["dropdown-content"]}>
            <Link to="/css-playground/text-and-font">Text & Font</Link>
            <Link to="/css-playground/box-model">Box-Model</Link>
          </div>
        </div>

        <div className={styles.spaceElement} />
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
