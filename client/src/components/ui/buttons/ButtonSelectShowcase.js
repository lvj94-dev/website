/* Author: Lucas Vincent Johanningmeier */

import styles from "./ButtonSelectShowcase.module.scss";

export default function ButtonSelectShowcase({ label, Component }) {
  return (
    <>
      <button type="button">{label}</button>
    </>
  );
}

/**
 * NOTES
 * - [TODO] Correct the component (!)
 * // better handled at parent level ??
 */
