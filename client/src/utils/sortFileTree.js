/* Author: Lucas Vincent Johanningmeier */

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
