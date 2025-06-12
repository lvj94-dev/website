/* Author: Lucas Vincent Johanningmeier */

// React
import { NavLink } from "react-router-dom";

// Assets
import { FaInstagram, FaLinkedin } from "react-icons/fa";

// Error handling
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Styling
import styles from "./Footer.module.scss";

/**
 * @component
 * @function Footer
 *
 * @description
 * Displays the site footer with external social links and a contact route.
 */
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
