/* Author: Lucas Vincent Johanningmeier */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ignore from "ignore";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../../../");

const gitignorePath = path.join(projectRoot, ".gitignore");
const ig = ignore();

if (fs.existsSync(gitignorePath)) {
  ig.add(fs.readFileSync(gitignorePath, "utf-8"));
}

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

function resolveSafePath(relativePath) {
  const safePath = path.join(projectRoot, relativePath || "");

  if (!safePath.startsWith(projectRoot)) {
    throw new Error("Invalid file path");
  }

  return { safePath, projectRoot };
}

export { getFileTree, resolveSafePath };
