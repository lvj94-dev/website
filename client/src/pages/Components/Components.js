/* Author: Lucas Vincent Johanningmeier */

import LayoutMain from "../../components/layout/LayoutMain/LayoutMain";
import styles from "./Components.module.css";

export default function Components() {
  console.log("Components()");

  return (
    <>
      <div className={styles.components}>
        <LayoutMain />
      </div>
    </>
  );
}
