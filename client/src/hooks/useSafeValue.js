/* Author: Lucas Vincent Johanningmeier */

import { useMemo } from "react";

export default function useSafeValue(value, fallback, options = {}) {
  const {
    isRequired = false,
    label = "value",
    onError = console.warn,
  } = options;

  return useMemo(() => {
    if (value !== null && value !== undefined) {
      return value;
    }

    if (!isRequired) {
      const message = `Missing required ${label}`;
      onError ? onError(message) : console.warn(message);
    }

    return fallback;
  }, [value, fallback, isRequired, label, onError]);
}
