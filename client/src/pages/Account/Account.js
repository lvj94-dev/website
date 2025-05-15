/* Author: Lucas Vincent Johanningmeier */

import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useCollectionAuth";

import styles from "./Account.module.scss";

export default function Account() {
  console.log(`Account()`);

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className={styles.account}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
