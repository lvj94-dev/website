/* Author: Lucas Vincent Johanningmeier */

// React
import { useEffect, useRef, useState } from "react";

/**
 * @typedef LayoutMetrics
 * @property {React.RefObject<HTMLElement>} ref - Ref to the DOM element whose size is tracked.
 * @property {number} width - Current width of the referenced element.
 * @property {number} height - Current height of the referenced element.
 */

/**
 * @function useLayoutMetrics
 *
 * @description
 * Custom hook that tracks the width and height of the main area using 'ref' and 'ResizeObserver'.
 *
 * @returns {LayoutMetrics}
 */
export default function useLayoutMetrics() {
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
