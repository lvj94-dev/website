/* Author: Lucas Vincent Johanningmeier */

// Error handling
import { ServiceError } from "../../src/errors/index.js";

/**
 * @function createUser
 *
 * @description
 * Creates a new user in the database.
 *
 * @param {Object} db - The SQLite database connection object.
 * @param {Object} user - The user details.
 * @param {string} user.username
 * @param {string} user.password - The hashed password.
 *
 * @returns {Promise<Object>} Resolves with the newly created user's ID and username.
 */
export function createUser(db, { username, password }) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;

    db.run(sql, [username, password], function (err) {
      if (err) {
        return reject(
          new ServiceError("Failed to create user", "sqlite", 502, err)
        );
      } else {
        resolve({ id: this.lastID, username });
      }
    });
  });
}

/**
 * @function getAllUsers
 *
 * @description
 * Retrieves all users from the database.
 *
 * @param {Object} db - The SQLite database connection object.
 *
 * @returns {Promise<Array<Object>>} Resolves with a list of users with all attributes.
 */
export function getAllUsers(db) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT id, username, created_at FROM users`, [], (err, rows) => {
      if (err) {
        return reject(
          new ServiceError("Failed to fetch users", "sqlite", 502, err)
        );
      } else {
        resolve(rows);
      }
    });
  });
}

/**
 * NOTES
 * - (T) differentiate queries by number and variation of attributes
 *       // e.g. getAllUsers 1. w/ all attributes, 2. w/ only credentials
 */
