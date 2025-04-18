/* Author: Lucas Vincent Johanningmeier */

import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";

import navButtonLinks from "./navButtonLinks.json";

export default function Homepage() {
  console.log("Homepage()");

  return (
    <>
      <div className={styles.homepage}>
        <h1>Homepage</h1>

        <hr />
        <h3>Information</h3>
        <hr />
        <h3>Projects</h3>
        <p />

        <div>
          {navButtonLinks.map(({ to, label }) => (
            <div key={to}>
              <Link to={to}>{label}</Link>
            </div>
          ))}
        </div>

        <hr />
        <h3>TODO</h3>
        <ul>
          <li>Show basic information about my and my project</li>
          <li style={{ visibility: "hidden" }} />
          <li>(P) Show source-code</li>
          <li>(P) Include "Return"-button // go back to the previous page</li>
          <li>
            idea: why not externalize default-values for various sites (i.e. for
            the controls)
          </li>
        </ul>
      </div>
    </>
  );
}
