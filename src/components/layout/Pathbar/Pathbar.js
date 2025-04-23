/* Author: Lucas Vincent Johanningmeier */

import styles from "./Pathbar.module.css";

import Breadcrumbs from "@/components/layout/Breadcrumbs/Breadcrumbs";
import ButtonGoBack from "@/components/ui/ButtonGoBack/ButtonGoBack";

export default function Pathbar() {
  console.log("Pathbar()");

  return (
    <>
      <div className={styles.pathbar}>
        <ButtonGoBack />
        <Breadcrumbs />
      </div>
    </>
  );
}
