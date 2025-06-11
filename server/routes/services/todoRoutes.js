/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { getTodos } from "../../src/controllers/todoController.js";

const router = express.Router();

router.get("/todos", getTodos);

export default router;
