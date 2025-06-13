/* Author: Lucas Vincent Johanningmeier */

// Hooks
import useCollectionUrl from "@/hooks/useCollectionUrl";

// Error handling
import useSafeValue from "@/hooks/useSafeValue";

// Styling
import styles from "./ButtonGoBack.module.scss";

/**
 * @component
 * @function ButtonGoBack
 *
 * @description
 * Button component that navigates back to the previous page.
 *
 * @property {Function} handleGoBack
 *
 * @returns {JSX.Element}
 */
export default function ButtonGoBack() {
  const { handleGoBack: rawGoBack } = useCollectionUrl();

  const handleGoBack = useSafeValue(rawGoBack, () => {}, {
    isRequired: true,
    label: "handleGoBack",
  });

  return (
    <>
      <div className={styles.buttonGoBack}>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </>
  );
}

/**
 * NOTES
 * // better handled at parent level ??
 */
