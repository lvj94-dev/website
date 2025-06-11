/* Author: Lucas Vincent Johanningmeier */

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import useLayoutMainMetrics from "@/hooks/useLayoutMainMetrics";

import useSafeValue from "@/hooks/useSafeValue";
import ErrorBoundary from "@/components/common/ErrorBoundary";

import styles from "./LayoutMain.module.scss";

export default function LayoutMain({ children }) {
  const { ref: rawRef, height: rawHeight } = useLayoutMainMetrics();

  const ref = useSafeValue(rawRef, null, {
    isRequired: true,
    label: "layoutMain.ref",
  });

  const height = useSafeValue(rawHeight, 0, {
    isRequired: false,
    label: "layoutMain.height",
  });

  return (
    <>
      <div className={styles.layoutMain}>
        <section className={styles.sectionOne}>{children}</section>

        <section ref={ref} className={styles.sectionTwo}>
          <ErrorBoundary fallback={<p>Component failed to load.</p>}>
            <Outlet />
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
