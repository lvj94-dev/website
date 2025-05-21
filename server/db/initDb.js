/* Author: Lucas Vincent Johanningmeier */

import { ServiceError } from "../src/errors/index.js";

export default function initializeDb(db) {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `),
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
      };
  });
}
