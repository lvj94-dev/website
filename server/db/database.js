/* Author: Lucas Vincent Johanningmeier */

import path from "path";
import { fileURLToPath } from "url";

import sqlite3 from "sqlite3";

import initializeDb from "./initDb.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err);
  } else {
    console.log("Connected to database successfully!");
    initializeDb(db);
  }
});

export default db;
