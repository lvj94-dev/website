/* Author: Lucas Vincent Johanningmeier */

// React
import { Outlet } from "react-router-dom";

// UI Components
import Navbar from "@/components/layout/Navbar/Navbar";
import Pathbar from "@/components/layout/Pathbar/Pathbar";
import Footer from "@/components/layout/Footer/Footer";

// Error handling
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Styling
import styles from "./Layout.module.scss";
import useLayoutMainMetrics from "@/hooks/useLayoutMainMetrics";
import useSafeValue from "@/hooks/useSafeValue";

/**
 * @component
 * @function Layout
 *
 * @description
 * Renders the main layout.
 * - header: Navbar, Pathbar
 * - main: Outlet
 * - footer: Footer
 */
export default function Layout() {
  const { ref: rawRef, height: rawHeight } = useLayoutMainMetrics();

  const ref = useSafeValue(rawRef, null, {
    isRequired: true,
    label: "layoutMain.ref",
  });

  /*const height = useSafeValue(rawHeight, 0, {
    isRequired: false,
    label: "layoutMain.height",
  });*/

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
