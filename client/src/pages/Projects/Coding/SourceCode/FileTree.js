/* Author: Lucas Vincent Johanningmeier */

// React
import { useEffect, useState } from "react";

// Components
import TreeNode from "./TreeNode";

// Utilities
import sortFileTree from "@/utils/sortFileTree";

/**
 * @component
 * @function FileTree
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function FileTree({ onFileSelect }) {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    fetch("/api/files/tree")
      .then((res) => res.json())
      .then((data) => {
        const sorted = sortFileTree(data);
        setTree(sorted);
      })
      .catch(console.error);
  }, []);

  const renderTree = (nodes) => {
    return (
      <div style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
        {nodes.map((node, i) => (
          <TreeNode
            key={node.path || node.name}
            node={node}
            prefix=""
            isLast={i === nodes.length - 1}
            onFileSelect={onFileSelect}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div>
        <div>
          {tree.length > 0 ? renderTree(tree) : <p>Loading file tree...</p>}
        </div>
      </div>
    </>
  );
}

// [TODO]
