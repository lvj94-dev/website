/* Author: Lucas Vincent Johanningmeier */

import { useState, useEffect } from "react";

import styles from "./DevDashboard.module.scss";

export default function DevDashboard() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className={styles.devDashboard}>
        Project TODOs
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <div>{todo.file}</div>
              <div>{todo.comment}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// [TODO]
