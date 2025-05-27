/* Author: Lucas Vincent Johanningmeier */

import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/Navbar/Navbar";
import Pathbar from "@/components/layout/Pathbar/Pathbar";
import Footer from "@/components/layout/Footer/Footer";

import ErrorBoundary from "@/components/common/ErrorBoundary";

import styles from "./Layout.module.scss";

export default function Layout() {
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

        <main className={styles.main}>
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
