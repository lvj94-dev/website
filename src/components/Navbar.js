/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
        <Link to="/css-playground">CSS-Playground</Link>
      </nav>
    </div>
  );
}
