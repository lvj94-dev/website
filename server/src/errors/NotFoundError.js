/* Author: Lucas Vincent Johanningmeier */

// Error handling
import HttpError from "./HttpError.js";

/**
 * @class NotFoundError
 * @extends HttpError
 *
 * @description
 * 404 Not Found - Thrown when a requested resource cannot be located.
 */
export default class NotFoundError extends HttpError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}
