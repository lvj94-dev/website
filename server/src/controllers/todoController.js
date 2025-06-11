/* Author: Lucas Vincent Johanningmeier */

import { collectTodos } from "@/services/todoService";

export function getTodos(req, res) {
  try {
    const todos = collectTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to collect TODOs" });
  }
}
