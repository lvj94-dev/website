/* Author: Lucas Vincent Johanningmeier */

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { AuthContext } from "@/context/AuthContext";

import styles from "./Signup.module.scss";

export default function SignUp() {
  console.log(`SignUp()`);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users", {
        username,
        password,
      });

      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);

      navigate("/account");
    } catch (err) {
      alert(`Signup failed: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <>
      <div className={styles.signup}>
        <form onSubmit={handleSignup}>
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

          {/* confirm password */}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />

          {/* Button "submit" */}
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}
