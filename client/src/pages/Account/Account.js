/* Author: Lucas Vincent Johanningmeier */

// React
import { Outlet, useNavigate } from "react-router-dom";

// Hooks
import { useAuth } from "@/hooks/useCollectionAuth";

// Styling
import styles from "./Account.module.scss";

/**
 * @component
 * @function Account
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
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
      <Outlet />
    </>
  );
}
