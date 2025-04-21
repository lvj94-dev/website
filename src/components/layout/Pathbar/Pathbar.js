/* Author: Lucas Vincent Johanningmeier */

import { useNavigate } from "react-router-dom";

import styles from "./Pathbar.module.css";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function Pathbar() {
  console.log("Pathbar()");

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.pathbar}>
        <button onClick={handleGoBack}>Go Back</button>
        <Breadcrumbs />
      </div>
    </>
  );
}
