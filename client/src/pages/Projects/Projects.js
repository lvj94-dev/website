/* Author: Lucas Vincent Johanningmeier */

import { Link, Outlet } from "react-router-dom";

import MapLinks from "@/components/ui/MapLinks/MapLinks";

import styles from "./Projects.module.css";

import linksProjectsCoding from "@/data/links-projects-coding.json";
import linksProjectsGames from "@/data/links-projects-games.json";
import linksProjectsMaths from "@/data/links-projects-maths.json";

export default function Projects() {
  const allProjectsLinks = [
    ...linksProjectsCoding,
    ...linksProjectsGames,
    ...linksProjectsMaths,
  ];

  return (
    <>
      <div className={styles.projects}>
        <h1>Projects</h1>

        {/*<nav>
          <Link to="css-playground">CSS-Playground</Link>
          <Link to="games">Games</Link>
          <Link to="maths">Maths</Link>
          <Link to="sourcecode">SourceCode</Link>
        </nav>*/}

        <div className={styles.sectionOne}>
          <MapLinks links={allProjectsLinks} />
        </div>

        <div className={styles.sectionTwo}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
