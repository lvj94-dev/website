/* Author: Lucas Vincent Johanningmeier */

// React
import { useMemo } from "react";

/**
 * @typedef {Object} SafeValueGuard
 * @property {boolean} [isRequired=false]
 * @property {string} {label="value"}
 * @property {{msg: string} => void} [onError=console.warn]
 */

/**
 * @function useSafeValue
 *
 * @description
 * Custom hook that ensures a value is not null or undefined.
 *
 * @returns {*} Either the original value or the fallback.
 */
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

    if (onError) {
      onError(message);
    }

    return typeof fallback === "function" ? fallback() : fallback;
  }, [value, fallback, isRequired, label, onError]);
}
