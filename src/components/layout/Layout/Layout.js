/* Author: Lucas Vincent Johanningmeier */

import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/Navbar/Navbar";
import Pathbar from "@/components/layout/Pathbar/Pathbar";

import styles from "./Layout.module.scss";

export default function Layout() {
  console.log("Layout()");

  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles["layout-navbar"]}>
            <Navbar />
          </div>
          <div className={styles["layout-pathbar"]}>
            <Pathbar />
          </div>
        </header>

        <main className={styles.main}>
          <Outlet />
        </main>

        <footer className={styles["layout-footer"]}>
          {/*<Footer />*/}
          <div>Footer</div>
        </footer>
      </div>
    </>
  );
}
