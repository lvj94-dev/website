/* Author: Lucas Vincent Johanningmeier */

// Express
import express from "express";

// Types
/** @typedef {import("../../../types/server-types.js").ExpressHandler} ExpressHandler */

// Services
import { collectTodos } from "../../src/services/todoService.js";

const router = express.Router();

/**
 * @route GET /api/todos
 * @function getTodos~
 * @type {ExpressHandler}
 *
 * @description
 * Returns a list of todos as collected throughout the project in JSON format.
 */
router.get("/api/todos", (req, res, next) => {
  const todos = collectTodos();
  res.json(todos);
});

export default router;
