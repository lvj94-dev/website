/* Author: Lucas Vincent Johanningmeier */

/**
 * @typedef FileTreeNode
 * @property {string} name
 * @property {string} path
 * @property {'file' | 'directory'} type
 * @property {FileTreeNode[]} [children]
 */

/**
 * @function sortFileTree
 *
 * @description
 * Recursively sorts a file tree array. Directories are listed before files,
 * and names are sorted alphabetically within each type.
 *
 * @param {FileTreeNode[]} nodes - Array of file/directory nodes to sort.
 *
 * @returns {FileTreeNode[]} Sorted file tree.
 */
export default function sortFileTree(nodes) {
  if (!Array.isArray(nodes)) {
    return [];
  }

  return nodes
    .slice()
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "directory" ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    })
    .map((node) =>
      node.type === "directory"
        ? { ...node, children: sortFileTree(node.children) }
        : node
    );
}

// [TODO]
