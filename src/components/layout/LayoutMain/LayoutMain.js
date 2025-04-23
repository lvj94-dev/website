/* Author: Lucas Vincent Johanningmeier */

import { useState } from "react";

import useLayoutMainMetrics from "@/hooks/useLayoutMainMetrics";

import styles from "./LayoutMain.module.scss";

export default function LayoutMain() {
  console.log("LayoutMain()");

  const [selectedComponent, setSelectedComponent] = useState(null);
  const { ref, height } = useLayoutMainMetrics();

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
          {selectedComponent ?? <p>No component loaded.</p>}
        </section>

        <section className={styles.sectionThree}>Third section</section>
      </div>
    </>
  );
}
