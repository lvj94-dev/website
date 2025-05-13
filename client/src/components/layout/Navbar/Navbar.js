/* Author: Lucas Vincent Johanningmeier */

import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { AuthContext } from "@/context/AuthContext";

import useCollectionUrl from "@/hooks/useCollectionUrl";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  console.log("Navbar()");

  const { token } = useContext(AuthContext);
  const { currentPage } = useCollectionUrl();

  return (
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
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            My Account
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
}
