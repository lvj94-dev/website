/* Author: Lucas Vincent Johanningmeier */

import styles from "./NotFound.module.scss";

export default function NotFound() {
  console.log("NotFound()");

  return (
    <>
      <div className={styles.notFound}>404 Not Found</div>
    </>
  );
}
