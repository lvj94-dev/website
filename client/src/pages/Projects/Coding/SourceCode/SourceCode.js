/* Author: Lucas Vincent Johanningmeier */

// React
import { useState } from "react";

// Components
import FileTree from "./FileTree";
import FileViewer from "./FileViewer";

// Styling
import styles from "./SourceCode.module.scss";

/**
 * @component
 * @function SourceCode
 *
 * @description
 * [TODO]
 *
 * @returns {JSX.Element}
 */
export default function SourceCode() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <>
      <div className={styles.sourceCode}>
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
