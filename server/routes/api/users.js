/* Author: Lucas Vincent Johanningmeier */

import express from "express";
import bcrypt from "bcrypt";

import db from "../../db/database.js";
import { createUser, getAllUsers } from "../../db/queries/users.js";

import { ValidationError, HttpError } from "../../src/errors/index.js";

const router = express.Router();

// POST /api/users - createUser()
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new ValidationError("Username and password are required.")); // 400
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(db, { username, password: hashedPassword });

    res.status(201).json(user);
  } catch (err) {
    if (err.message.includes("UNIQUE constriant failed")) {
      return next(new ValidationError("Username already exists.")); // 400
    }
    next(new HttpError()); // 500
  }
});

// GET /api/users - getAllUsers()
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers(db);
    res.json(users);
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
