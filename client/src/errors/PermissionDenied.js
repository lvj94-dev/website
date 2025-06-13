/* Author: Lucas Vincent Johanningmeier */

// Error handling
import AppError from "./AppError";

/**
 * @class PermissionDeniedError
 * @extends AppError
 *
 * @description
 * Represents an error thrown when a user lacks sufficient privileges to perform an action.
 *
 * @param {string} [message="Permission denied"]
 *
 * @property {string} name
 */
export default class PermissionDeniedError extends AppError {
  constructor(message = "Permission denied") {
    super(message, "PermissionDeniedError");
  }
}
