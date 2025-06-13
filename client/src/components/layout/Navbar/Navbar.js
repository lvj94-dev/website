/* Author: Lucas Vincent Johanningmeier */

// React
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// Context
import { AuthContext } from "@/context/AuthContext";

// Hooks
import useCollectionUrl from "@/hooks/useCollectionUrl";

// Error handling
import ErrorBoundary from "@/components/common/ErrorBoundary";
import useSafeValue from "@/hooks/useSafeValue";

// Styling
import styles from "./Navbar.module.scss";

/**
 * @component
 * @function Navbar
 *
 * @description
 * Main navigation bar with route links and account-management.
 * - Home
 * - Projects
 * - Components
 * - Blog
 * - Login / MyAccount
 *
 * @property {objet} auth - Auth object from context.
 * @property {string|null} token - Auth token, if user is logged in.
 * @property {string} currentPage - URL of the current page.
 *
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const auth = useContext(AuthContext);
  const { currentPage: rawPage } = useCollectionUrl();

  const token = useSafeValue(auth?.token, null, {
    isRequired: false,
    label: "auth token",
  });

  const currentPage = useSafeValue(rawPage, "Unknown page", {
    isRequired: true,
    label: "currentPage",
  });

  return (
    <ErrorBoundary fallback={<p>Navbar failed to load.</p>}>
      <div className={styles.navbar}>
        <nav>
          {/* HOME */}
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>

          {/* PROJECTS */}
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Projects
          </NavLink>

          {/* COMPONENTS */}
          <NavLink
            to="/components"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Components
          </NavLink>

          {/* BLOG */}
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Blog
          </NavLink>

          <div className={styles.spaceElement} />

          <div>{currentPage}</div>

          <div className={styles.spaceElement} />

          {/* LOGIN */}
          {token ? (
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              My Account
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </ErrorBoundary>
  );
}
