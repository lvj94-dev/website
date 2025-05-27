/* Author: Lucas Vincent Johanningmeier */

import { useState } from "react";

import useLayoutMainMetrics from "@/hooks/useLayoutMainMetrics";

import useSafeValue from "@/hooks/useSafeValue";
import ErrorBoundary from "@/components/common/ErrorBoundary";

import styles from "./LayoutMain.module.scss";

export default function LayoutMain() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const { ref: rawRef, height: rawHeight } = useLayoutMainMetrics();

  const ref = useSafeValue(rawRef, null, {
    isRequired: true,
    label: "layoutMain.ref",
  });

  const height = useSafeValue(rawHeight, 0, {
    isRequired: false,
    label: "layoutMain.height",
  });

  const components = {
    a: <div>A</div>,
    b: <div>B</div>,
  };

  const handleLoad = (key) => {
    setSelectedComponent(() => components[key]);
  };

  return (
    <>
      <div className={styles.layoutMain}>
        <section className={styles.sectionOne}>
          <button onClick={() => handleLoad("a")}>Load A</button>
          <button onClick={() => handleLoad("b")}>Load B</button>
        </section>

        <section ref={ref} className={styles.sectionTwo}>
          <ErrorBoundary fallback={<p>Component failed to load.</p>}>
            {selectedComponent ?? <p>No component loaded.</p>}
          </ErrorBoundary>
        </section>

        <section className={styles.sectionThree}>Third section</section>
      </div>
    </>
  );
}

/**
 * NOTES
 * - when there are multiple elements included under one wrapper both elements will have the same size
 */
