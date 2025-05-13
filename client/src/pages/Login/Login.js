/* Author: Lucas Vincent Johanningmeier */

import React, { useState } from "react";
import axios from "axios";

import styles from "./Login.module.css";

export default function Login({ setToken }) {
  console.log("Login()");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      console.log(`username: ${username}`);
      console.log(`password: ${password}`);
    } catch (err) {
      alert(`Login failed: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <>
      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          {/* username */}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          {/* password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {/* Button "submit" */}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
