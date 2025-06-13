/* Author: Lucas Vincent Johanningmeier */

// React
import { useState, useEffect } from "react";

// Styling
import styles from "./DevDashboard.module.scss";

/**
 * @component
 * @function DevDashboard
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
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
