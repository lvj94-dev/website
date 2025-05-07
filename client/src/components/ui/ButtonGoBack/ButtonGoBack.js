/* Author: Lucas Vincent Johanningmeier */

import styles from "./ButtonGoBack.module.scss";

import useCollectionUrl from "@/hooks/useCollectionUrl";

export default function ButtonGoBack() {
  console.log("ButtonGoBack()");

  const { handleGoBack } = useCollectionUrl();

  return (
    <>
      <div className={styles.buttonGoBack}>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </>
  );
}
