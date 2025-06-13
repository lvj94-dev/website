/* Author: Lucas Vincent Johanningmeier */

// Error handling
import AppError from "./AppError";

/**
 * @class FormValidationError
 * @extends AppError
 *
 * @description
 * Represents an error thrown when form input fails validation.
 *
 * @param {string} [message="Invalid form input"]
 *
 * @property {string} name
 */
export default class FormValidationError extends AppError {
  constructor(message = "Invalid form input") {
    super(message, "FormValidationError");
  }
}
