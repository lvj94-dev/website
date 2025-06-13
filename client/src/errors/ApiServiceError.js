/* Author: Lucas Vincent Johanningmeier */

// Error handling
import AppError from "./AppError";

/**
 * @class ApiServiceError
 * @extends AppError
 *
 * @description
 * Represents an error thrown by an API or service layer.
 *
 * @param {string} [message="A service error occured"]
 * @param {Error|null} [originalError=null]
 *
 * @property {Error} [originalError]
 */
export default class ApiServiceError extends AppError {
  constructor(message = "A service error occured", originalError = null) {
    super(message, "ApiServiceError");
    if (originalError) {
      this.originalError = originalError;
    }
  }
}
