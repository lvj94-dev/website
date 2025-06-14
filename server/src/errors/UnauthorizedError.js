/* Author: Lucas Vincent Johanningmeier */

// Error handling
import HttpError from "./HttpError.js";

/**
 * @class UnauthoriezdError
 * @extends HttpError
 *
 * @description
 * 401 Unauthorized - Thwon when a client fails authentication.
 */
export default class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}
