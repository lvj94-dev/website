/* Author: Lucas Vincent Johanningmeier */

// Error handling
import { ServiceError } from "../src/errors/index.js";

/**
 * @function initializeDb
 */
export default function initializeDb(db) {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `,
      (err) => {
        if (err) {
          const error = new ServiceError(
            "Failed to initialize tables",
            "sqlite",
            502,
            err
          );
          process.exit(1);
        } else {
          console.log("Tables initialized");
        }
      }
    );
  });
}
