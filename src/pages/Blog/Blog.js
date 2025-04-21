/* Author: Lucas Vincent Johanningmeier */

import styles from "./Blog.module.scss";

export default function Blog() {
  console.log("Blog()");

  return (
    <>
      <div className={styles.blog}>
        <h1>Blog</h1>
      </div>
    </>
  );
}
