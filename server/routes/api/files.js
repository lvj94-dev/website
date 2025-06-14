/* Author: Lucas Vincent Johanningmeier */

// Express
import express from "express";

// Node
import fs from "fs";

// Types
/** @typedef {import("../../../types/server-types.js").ExpressHandler} ExpressHandler */

// Utilities
import { getFileTree, resolveSafePath } from "../../src/utils/fileUtils.js";

// Error handling
import {
  ValidationError,
  NotFoundError,
  HttpError,
} from "../../src/errors/index.js";

const router = express.Router();

/**
 * @route GET /api/files/tree
 * @function getFileTree~
 * @type {ExpressHandler}
 *
 * @description
 * Returns a JSON-representation of the file tree rooted at the project directory.
 */
router.get("/tree", async (req, res, next) => {
  try {
    const tree = getFileTree(resolveSafePath("").projectRoot);
    res.json(tree);
  } catch (err) {
    next(new HttpError("Failed to read the file tree.")); // 500
  }
});

// GET /api/files/content - get
/**
 * @route GET /api/files/content
 * @function getFileContent~
 * @type {ExpressHandler}
 *
 * @description
 * Returns the content of a specified file.
 */
router.get("/content", async (req, res, next) => {
  try {
    const { path: relativePath } = req.query;

    if (!relativePath) {
      return next(new ValidationError("Missing 'path' query paramter.")); // 400
    }

    const { safePath } = resolveSafePath(relativePath);

    if (!fs.existsSync(safePath)) {
      return next(new NotFoundError("File does not exist.")); // 404
    }

    const stat = fs.statSync(safePath);
    if (stat.isDirectory()) {
      return next(new ValidationError("Path is a directory, not a file.")); // 400
    }

    const content = fs.readFileSync(safePath, "utf-8");
    res.send(content);
  } catch (err) {
    if (err.message === "Invalid file path") {
      return next(new ValidationError(err.message)); // 400
    }
    next(new HttpError("Could not read file content.")); // 500
  }
});

export default router;
