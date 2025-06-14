/* Author: Lucas Vincent Johanningmeier */

// Third-party
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Database
import db from "../../db/database.js";

// Error handling
import { NotFoundError, UnauthorizedError } from "../errors/index.js";

/**
 * @function getUserByUsername
 *
 * @description
 * Retrieves a user record by username from the database.
 *
 * @param {string} username
 *
 * @returns {Error}
 */
const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE username = ?`;

    db.get(sql, [username], (err, row) => {
      if (err) {
        return reject(err);
      }
      if (!row) {
        return reject(new NotFoundError("User not found")); // 404
      }

      resolve(row);
    });
  });
};

/**
 * @function authenticateUser
 *
 * @description
 * Authenticates a user by veryfying credentials and issuing a JWT.
 *
 * @param {string} username
 * @param {string} password
 *
 * @returns {Promise<string} A signed JWT token if authentication is successful.
 */
export const authenticateUser = async (username, password) => {
  const user = await getUserByUsername(username);

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new UnauthorizedError("Invalid credentials"); // 401
  }

  return jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
