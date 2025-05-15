/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import db from "../../db/database.js";
import { createUser, getAllUsers } from "../../db/queries/users.js";

const router = express.Router();

// createUser()
router.post("/users", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password!" });
  }

  try {
    const user = await createUser(db, { username, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// getAllUsers()
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers(db);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
