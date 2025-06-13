/* Author: Lucas Vincent Johanningmeier */

// Components
import Breadcrumbs from "@/components/layout/Breadcrumbs/Breadcrumbs";
import ButtonGoBack from "@/components/ui/ButtonGoBack/ButtonGoBack";

// Error handling
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Styling
import styles from "./Pathbar.module.css";

/**
 * @component
 * @function Pathbar
 *
 * @description
 * Secondary navigation bar with breadcrumbs and "Go back"-button.
 *
 * @returns {JSX.Element}
 */
export default function Pathbar() {
  return (
    <>
      <div className={styles.pathbar}>
        <ErrorBoundary fallback={<p>ButtonGoBack failed to load.</p>}>
          <ButtonGoBack />
        </ErrorBoundary>

        <ErrorBoundary fallback={<p>Breadcrumbs failed to load.</p>}>
          <Breadcrumbs />
        </ErrorBoundary>
      </div>
    </>
  );
}
