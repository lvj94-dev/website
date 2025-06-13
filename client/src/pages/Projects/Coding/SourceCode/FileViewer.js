/* Author: Lucas Vincent Johanningmeier */

// React
import { useEffect, useState } from "react";

// Third-party
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * @component
 * @function FileViewer
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function FileViewer({ filePath }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!filePath) {
      return;
    }

    fetch(`/api/files/content?path=${encodeURIComponent(filePath)}`)
      .then((res) => res.text())
      .then(setContent)
      .catch(console.error);
  }, [filePath]);

  const getLanguage = (filename) => {
    if (filename.endsWith(".js")) return "javascript";
    if (filename.endsWith(".ts")) return "typescript";
    if (filename.endsWith(".json")) return "json";
    if (filename.endsWith(".html")) return "html";
    if (filename.endsWith(".css")) return "css";
    if (filename.endsWith(".scss")) return "scss";
    if (filename.endsWith(".md")) return "markdown";
  };

  const language = getLanguage(filePath || "");

  return (
    <>
      <div>
        {filePath ? (
          <>
            <h4>{filePath}</h4>
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              showLineNumbers
              wrapLongLines
            >
              {content}
            </SyntaxHighlighter>
          </>
        ) : (
          <p>Select a file to view its contents.</p>
        )}
      </div>
    </>
  );
}

// [TODO]
