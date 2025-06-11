/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { collectTodos } from "../../src/services/todoService.js";

const router = express.Router();

// GET
router.get("/api/todos", (req, res) => {
  const todos = collectTodos();
  res.json(todos);
});
