/* Author: Lucas Vincent Johanningmeier */

import { useMemo } from "react";

export default function useSafeValue(value, fallback, options = {}) {
  const {
    isRequired = false,
    label = "value",
    onError = console.warn,
  } = options;

  return useMemo(() => {
    const isPresent = value !== null && value !== undefined;

    if (isPresent) {
      return value;
    }

    const message = `Missing required ${label}`;

    if (!isRequired) {
      const error = new Error(message);
      if (onError) {
        onError(error);
        throw error;
      }
    } else {
      if (onError) {
        onError(message);
      }
    }

    return typeof fallback === "function" ? fallback() : fallback;
  }, [value, fallback, isRequired, label, onError]);
}
