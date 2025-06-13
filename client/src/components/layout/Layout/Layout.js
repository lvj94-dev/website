/* Author: Lucas Vincent Johanningmeier */

// React
import { Outlet } from "react-router-dom";

// Hooks
import useLayoutMetrics from "@/hooks/useLayoutMetrics";

// UI Components
import Navbar from "@/components/layout/Navbar/Navbar";
import Pathbar from "@/components/layout/Pathbar/Pathbar";
import Footer from "@/components/layout/Footer/Footer";

// Error handling
import ErrorBoundary from "@/components/common/ErrorBoundary";
import useSafeValue from "@/hooks/useSafeValue";

// Styling
import styles from "./Layout.module.scss";

/**
 * @component
 * @function Layout
 *
 * @description
 * Renders the main layout.
 * - header: Navbar, Pathbar
 * - main: Outlet
 * - footer: Footer
 *
 * @property {RefObject<HTMLElement>} ref - Tracks layout size via ResizeObserver
 *
 * @returns {JSX.Element}
 */
export default function Layout() {
  const { ref: rawRef } = useLayoutMetrics();

  const ref = useSafeValue(rawRef, null, {
    isRequired: true,
    label: "layout.ref",
  });

  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles["layout-navbar"]}>
            <ErrorBoundary fallback={<p>Navigation failed to load.</p>}>
              <Navbar />
            </ErrorBoundary>
          </div>
          <div className={styles["layout-pathbar"]}>
            <ErrorBoundary fallback={<p>Pathbar failed to load.</p>}>
              <Pathbar />
            </ErrorBoundary>
          </div>
        </header>

        <main ref={ref} className={styles.main}>
          <ErrorBoundary fallback={<p>Main failed to load.</p>}>
            <Outlet />
          </ErrorBoundary>
        </main>

        <footer className={styles["layout-footer"]}>
          {/*<Footer />*/}
          <ErrorBoundary fallback={<p>Footer failed to load.</p>}>
            <Footer />
          </ErrorBoundary>
        </footer>
      </div>
    </>
  );
}
