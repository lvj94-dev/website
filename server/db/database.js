/* Author: Lucas Vincent Johanningmeier */

// Node
import path from "path";
import { fileURLToPath } from "url";

// Third-party
import sqlite3 from "sqlite3";

// Configuration
import initializeDb from "./initDb.js";

// Error handling
import { ServiceError } from "../src/errors/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    const dbError = new ServiceError(
      "Failed to connect to SQLite database",
      "sqlite",
      502,
      err
    );
    process.exit(1);
  } else {
    console.log("SQLite database connection established");
    initializeDb(db);
  }
});

export default db;

// [TODO]
