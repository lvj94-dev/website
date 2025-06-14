/* Author: Lucas Vincent Johanningmeier */

// Node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Third-party
import ignore from "ignore";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../../../");

const gitignorePath = path.join(projectRoot, ".gitignore");
const ig = ignore();

if (fs.existsSync(gitignorePath)) {
  ig.add(fs.readFileSync(gitignorePath, "utf-8"));
}

/**
 * @function getFileTree
 *
 * @description
 * Recursively builds a tree structure of files and directories,
 * respecting '.gitignore' exclusions. (!)
 *
 * @param {string} dir
 *
 * @returns {Array<Object>} File tree with nodes containing 'type', 'name', and optionally 'children' or 'path'.
 */
function getFileTree(dir) {
  const result = [];

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(projectRoot, fullPath);

    if (ig.ignores(relativePath)) {
      continue;
    }

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      result.push({
        type: "directory",
        name: file,
        children: getFileTree(fullPath),
      });
    } else {
      result.push({
        type: "file",
        name: file,
        path: relativePath,
      });
    }
  }

  return result;
}

/**
 * @function resolveSafePath
 *
 * @description
 * Resolves a given relative file path within the project root.
 *
 * @param {string} [relativePath=""]
 *
 * @returns {{ safePath: string, projectRoot: string }}
 */
function resolveSafePath(relativePath) {
  const safePath = path.join(projectRoot, relativePath || "");

  if (!safePath.startsWith(projectRoot)) {
    throw new Error("Invalid file path");
  }

  return { safePath, projectRoot };
}

export { getFileTree, resolveSafePath };
