/* Author: Lucas Vincent Johanningmeier */

import { useState, useEffect } from "react";

import useLayoutMainMetrics from "@/hooks/useLayoutMainMetrics";

import useSafeValue from "@/hooks/useSafeValue";
import ErrorBoundary from "@/components/common/ErrorBoundary";

import styles from "./LayoutMain.module.scss";

export default function LayoutMain({ components, selectedKey, children }) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    if (selectedKey && components[selectedKey]) {
      setSelectedComponent(components[selectedKey]);
    }
  }, [selectedKey, components]);

  const { ref: rawRef, height: rawHeight } = useLayoutMainMetrics();

  const ref = useSafeValue(rawRef, null, {
    isRequired: true,
    label: "layoutMain.ref",
  });

  const height = useSafeValue(rawHeight, 0, {
    isRequired: false,
    label: "layoutMain.height",
  });

  /*const components = {
    a: <div>A</div>,
    b: <div>B</div>,
  };*/

  const handleLoad = (key) => {
    const component = components[key];
    setSelectedComponent(() => components[key]);
  };

  return (
    <>
      <div className={styles.layoutMain}>
        <section className={styles.sectionOne}>
          {/*  <button onClick={() => handleLoad("a")}>Load A</button>
          <button onClick={() => handleLoad("b")}>Load B</button>*/}
          {/*{Object.keys(components).map((key) => (
            <button key={key} onClick={() => handleLoad(key)}>
              Load {key}
            </button>
          ))}*/}
          {children}
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
