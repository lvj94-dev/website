/* Author: Lucas Vincent Johanningmeier */

import { useEffect, useState } from "react";

import TreeNode from "./TreeNode";

import sortFileTree from "@/utils/sortFileTree";

import styles from "./SourceCode.module.scss";

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
