/* Author: Lucas Vincent Johanningmeier */

import { Outlet, useLocation, matchPath } from "react-router-dom";

import { useState, useEffect } from "react";

import MapLinks from "@/components/ui/MapLinks/MapLinks";

import { projectsLinks } from "@/data/links-projects";

import styles from "./Projects.module.scss";

import LayoutMain from "@/components/layout/LayoutMain/LayoutMain";

export default function Projects() {
  const allProjectsLinks = [...projectsLinks];
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    const active = projectsLinks.find(({ path }) => {
      return matchPath(
        { path: `/projects/${path}/*`, end: false },
        location.pathname
      );
    });
    setSelectedKey(active?.key || null);
  }, [location]);

  const components = Object.fromEntries(
    projectsLinks.map(({ key, component }) => [key, component])
  );

  const navLinks = projectsLinks.map(({ path, label }) => ({
    to: `/projects/${path}`,
    label,
  }));

  return (
    <>
      <div className={styles.projects}>
        <LayoutMain selectedKey={selectedKey}>
          <MapLinks
            className={styles.mapLinksProjects}
            buttonClassName={styles.buttonProjects}
            source={navLinks}
            onSelect={setSelectedKey}
          />
          <Outlet />
        </LayoutMain>
      </div>
    </>
  );
}
