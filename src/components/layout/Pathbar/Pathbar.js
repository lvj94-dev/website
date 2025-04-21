/* Author: Lucas Vincent Johanningmeier */

import styles from "./Pathbar.module.css";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ButtonGoBack from "../../ui/ButtonGoBack/ButtonGoBack";

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
