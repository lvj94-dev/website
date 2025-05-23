/* Author: Lucas Vincent Johanningmeier */

import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";

import styles from "./Login.module.css";

export default function Login() {
  console.log("Login()");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);

      navigate("/account");
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
          {/* Link "sign-up" */}
          <div className={styles.signupLink}>
            Don't have an account yet? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </>
  );
}
