/* Author: Lucas Vincent Johanningmeier */

import { NavLink } from "react-router-dom";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.scss";

export default function Footer() {
  console.log("Footer()");

  return (
    <>
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
        </nav>
      </div>
    </>
  );
}
