/* Author: Lucas Vincent Johanningmeier */

import { useState } from "react";

export default function TreeNode({ node, prefix, isLast, onFileSelect }) {
  const [isOpen, setIsOpen] = useState(true);

  const connector = isLast ? "└── " : "├── ";
  const newPrefix = prefix + (isLast ? "    " : "│   ");

  return (
    <>
      <div>
        <div>
          {prefix}
          {connector}
          {node.type === "directory" ? (
            <span
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {node.name}
            </span>
          ) : (
            <button
              onClick={() => {
                if (typeof onFileSelect === "function") {
                  onFileSelect(node.path);
                } else {
                  console.warn("onFileSelect is not a function", onFileSelect);
                }
              }}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                fontFamily: "inherit",
                fontSize: "inherit",
                cursor: "pointer",
                color: "inherit",
              }}
            >
              {node.name}
            </button>
          )}
        </div>

        {isOpen &&
          node.children?.map((child, i) => (
            <TreeNode
              key={child.path || child.name}
              node={child}
              prefix={newPrefix}
              isLast={i === node.children.length - 1}
              onFileSelect={onFileSelect}
            />
          ))}
      </div>
    </>
  );
}
