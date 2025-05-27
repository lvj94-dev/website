/* Author: Lucas Vincent Johanningmeier */

import { useEffect, useRef, useState } from "react";

export default function useLayoutMainMetrics() {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // wait until the DOM-node is available
    if (!ref.current) return;

    const updateSize = () => {
      try {
        const { offsetWidth, offsetHeight } = ref.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });

        ref.current.style.setProperty("--element-width", `${offsetWidth}px`);
        ref.current.style.setProperty("--element-height", `${offsetHeight}px`);
      } catch (err) {
        console.error("Layout metrics update failed:", err);
      }
    };

    updateSize();

    if (typeof ResizeOberver !== "undefined") {
      const observer = new ResizeObserver(updateSize);
      observer.observe(ref.current);

      return () => observer.disconnect();
    } else {
      console.warn("ResizeObserver is not supported in this environment.");
    }
  }, []);

  return { ref, ...dimensions };
}
