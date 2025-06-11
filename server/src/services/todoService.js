/* Author: Lucas Vincent Johanningmeier */

import fs from "fs";
import path from "path";

import { getFileTree } from "../utils/fileUtils.js";

const REGEX_TODO = /\/\/.*\[TODO\].*|\/\*[\s\S]*?\[TODO\][\s\S]*?\*\//g;

const projectRoot = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "../../../"
);

function flattenFiles(tree) {
  const files = [];

  for (const node of tree) {
    if (node.type === "file" && /\.(js|jsx|ts|tsx)$/.test(node.name)) {
      files.push(path.join(projectRoot, node.path));
    } else if (node.type === "directory") {
      files.push(...flattenFiles(node.children));
    }
  }

  return files;
}

export function collectTodos() {
  const tree = getFileTree(projectRoot);
  const files = flattenFiles(tree);
  const todos = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const matches = content.match(REGEX_TODO);

    if (matches) {
      for (const comment of matches) {
        todos.push({
          file: path.relative(projectRoot, file),
          comment: comment.trim(),
        });
      }
    }
  }

  return todos;
}
