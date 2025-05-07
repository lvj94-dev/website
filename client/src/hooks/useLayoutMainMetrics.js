/* Author: Lucas Vincent Johanningmeier */

import { useEffect, useRef, useState } from "react";

export default function useLayoutMainMetrics() {
  console.log("useLayoutMainMetrics()");

  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // wait until the DOM-node is available
    if (!ref.current) return;

    const updateSize = () => {
      const { offsetWidth, offsetHeight } = ref.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });

      ref.current.style.setProperty("--element-width", `${offsetWidth}px`);
      ref.current.style.setProperty("--element-height", `${offsetHeight}px`);
    };

    updateSize();

    if (typeof ResizeOberver !== "undefined") {
      const observer = new ResizeObserver(updateSize);
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  return { ref, ...dimensions };
}
