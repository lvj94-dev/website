/* Author: Lucas Vincent Johanningmeier */

// Styling
import styles from "./Components.module.css";

/**
 * @component
 * @function Components
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function Components() {
  return (
    <>
      <div className={styles.components}>
        {/*<LayoutMain />*/}
        <h1>Roadmap</h1>
        <ol>
          <li>Add JSDoc to all js-files</li>
          <ul>
            <li>_ErrorBoundary.js</li>
          </ul>
        </ol>
      </div>
    </>
  );
}
