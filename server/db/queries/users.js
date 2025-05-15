/* Author: Lucas Vincent Johanningmeier */

// createUser()
export function createUser(db, { username, password }) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;

    db.run(sql, [username, password], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, username });
      }
    });
  });
}

// getAllUsers()
export function getAllUsers(db) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT id, username, created_at FROM users`, [], (err, rows) => {
      if (err) {
        reject(err);
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
