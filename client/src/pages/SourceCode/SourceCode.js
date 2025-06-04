/* Author: Lucas Vincent Johanningmeier */

import { useState } from "react";

import FileTree from "./FileTree";
import FileViewer from "./FileViewer";

import styles from "./SourceCode.module.scss";

export default function SourceCode() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <>
      <div className="sourceCode">
        <div className={styles["sourceCode-left"]}>
          <FileTree onFileSelect={setSelectedFile} />
        </div>
        <div className={styles["sourceCode-right"]}>
          <FileViewer filePath={selectedFile} />
        </div>
      </div>
    </>
  );
}
