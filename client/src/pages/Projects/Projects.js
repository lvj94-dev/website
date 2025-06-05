/* Author: Lucas Vincent Johanningmeier */

import { Link, Outlet } from "react-router-dom";

import { useState } from "react";

import MapLinks from "@/components/ui/MapLinks/MapLinks";

import { projectsLinks } from "@/data/links-projects";

import styles from "./Projects.module.css";

import LayoutMain from "@/components/layout/LayoutMain/LayoutMain";

export default function Projects() {
  const allProjectsLinks = [...projectsLinks];

  const [selectedKey, setSelectedKey] = useState(null);

  const selectedComponent = allProjectsLinks.find(
    (link) => link.key === selectedKey
  )?.component;

  return (
    <>
      <div className={styles.projects}>
        {/*<nav>
          <Link to="css-playground">CSS-Playground</Link>
          <Link to="games">Games</Link>
          <Link to="maths">Maths</Link>
          <Link to="sourcecode">SourceCode</Link>
        </nav>*/}

        {/*<div className={styles.sectionOne}>
          <MapLinks links={allProjectsLinks} />
        </div>

        <div className={styles.sectionTwo}>
          <Outlet />
        </div>*/}

        <LayoutMain
          components={{ [selectedKey]: selectedComponent }}
          selectedKey={selectedKey}
        >
          {/*<MapLinks
            links={allProjectsLinks.map(({ key, label }) => ({
              to: key,
              label,
            }))}
            onSelect={setSelectedKey}
          />*/}
          <MapLinks source={allProjectsLinks} onSelect={setSelectedKey} />
        </LayoutMain>
      </div>
    </>
  );
}
