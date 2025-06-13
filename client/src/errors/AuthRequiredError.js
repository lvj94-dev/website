/* Author: Lucas Vincent Johanningmeier */

// Error handling
import AppError from "./AppError";

/**
 * @class AuthRequiredError
 * @extends AppError
 *
 * @description
 * Represents an error thrown when authentication is required but missing.
 *
 * @param {string} [message="Login required"]
 *
 * @property {string} name
 */
export default class AuthRequiredError extends AppError {
  constructor(message = "Login required") {
    super(message, "AuthRequiredError");
  }
}
