/* Author: Lucas Vincent Johanningmeier */

import useSafeValue from "@/hooks/useSafeValue";
import styles from "./ButtonGoBack.module.scss";

import useCollectionUrl from "@/hooks/useCollectionUrl";

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
