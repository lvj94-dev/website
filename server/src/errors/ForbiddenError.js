/* Author: Lucas Vincent Johanningmeier */

// Error handling
import HttpError from "./HttpError.js";

/**
 * @class ForbiddenError
 * @extends HttpError
 *
 * @description
 * 403 Forbidden error - Thrown when a client is authenticated but not authorized to access a specific resource.
 */
export default class ForbiddenError extends HttpError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}
