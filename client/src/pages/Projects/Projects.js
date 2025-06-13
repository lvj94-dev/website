/* Author: Lucas Vincent Johanningmeier */

// React
import { useState, useEffect } from "react";
import { Outlet, useLocation, matchPath } from "react-router-dom";

// UI Components
import MapLinks from "@/components/ui/MapLinks/MapLinks";

// Data
import { linksProjectsCoding } from "@/data/links-projects-coding";

// Styling
import styles from "./Projects.module.scss";

export default function Projects() {
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    const active = linksProjectsCoding.find(({ path }) => {
      return matchPath(
        { path: `/projects/${path}/*`, end: false },
        location.pathname
      );
    });
    setSelectedKey(active?.key || null);
  }, [location]);

  const navLinks = linksProjectsCoding.map(({ path, label }) => ({
    to: `/projects/${path}`,
    label,
  }));

  return (
    <>
      <div className={styles.projects}>
        <section selectedKey={selectedKey}>
          <MapLinks
            className={styles.mapLinksProjects}
            buttonClassName={styles.buttonProjects}
            source={navLinks}
            onSelect={setSelectedKey}
          />
          <Outlet />
        </section>
      </div>
    </>
  );
}
