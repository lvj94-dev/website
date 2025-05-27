/* Author: Lucas Vincent Johanningmeier */

import { NavLink } from "react-router-dom";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.scss";
import ErrorBoundary from "@/components/common/ErrorBoundary";

export default function Footer() {
  return (
    <ErrorBoundary fallback={<p>Footer unavailable</p>}>
      <div className={styles.footer}>
        <nav>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lucas-vincent-johanningmeier-46b033173/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/straight_outta_muenster/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          {/* CONTACT} */}
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </ErrorBoundary>
  );
}

/**
 * NOTES
 * - NO try-catch-block here (!)
 */
