/* Author: Lucas Vincent Johanningmeier */

import { Link, Outlet } from "react-router-dom";

import MapLinks from "../../components/ui/MapLinks/MapLinks";

import styles from "./Projects.module.css";

import linksProjectsCssPlayground from "../../data/links-projects-css-playground.json";
import linksProjectsMaths from "../../data/links-projects-maths.json";

export default function Projects() {
  console.log("Projects()");

  return (
    <>
      <div className={styles.projects}>
        <h1>Projects</h1>

        <nav>
          <Link to="css-playground">CSS-Playground</Link>
          <Link to="games">Games</Link>
          <Link to="maths">Maths</Link>
        </nav>

        <Outlet />
        {/*<h3>Maths</h3>
        <MapLinks source={linksProjectsMaths} />
        <h3>CSS-Playground</h3>
        <MapLinks source={linksProjectsCssPlayground} />*/}
      </div>
    </>
  );
}
