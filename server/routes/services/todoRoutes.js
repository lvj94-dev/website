/* Author: Lucas Vincent Johanningmeier */

// Express
import express from "express";

// Controllers
import { getTodos } from "../../src/controllers/todoController.js";

const router = express.Router();

router.get("/todos", getTodos);

export default router;
