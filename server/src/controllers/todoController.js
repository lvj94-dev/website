/* Author: Lucas Vincent Johanningmeier */

// Types
/** @typedef {import("../../../types/server-types.js").ExpressHandler} ExpressHandler */

// Services
import { collectTodos } from "@/services/todoService";

/**
 * @function getTodos
 * @type {ExpressHandler}
 *
 * @description
 * Handles a request to retrieve all TODO-items.
 */
export function getTodos(req, res, next) {
  try {
    const todos = collectTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to collect TODOs" });
  }
}
