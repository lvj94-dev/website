/* Author: Lucas Vincent Johanningmeier */

// Express
import express from "express";

// Third-party
import bcrypt from "bcrypt";

// Databse
import db from "../../db/database.js";
import { createUser, getAllUsers } from "../../db/queries/users.js";

// Types
/** @typedef {import("../../../types/server-types.js").ExpressHandler} ExpressHandler */

// Error handling
import { ValidationError, HttpError } from "../../src/errors/index.js";

const router = express.Router();

/**
 * @route POST /api/users
 * @function createUser~
 * @type {ExpressHandler}
 *
 * @description
 * Creates a new user, requires 'username' and 'password'.
 *
 * @returns {void}
 */
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
/**
 * @route GET /api/users
 * @function getAlLUsers~
 *
 * @description
 * Returns a list of all registered users.
 *
 * @returns {void}
 */
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
