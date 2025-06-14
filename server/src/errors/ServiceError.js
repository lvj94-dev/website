/* Author: Lucas Vincent Johanningmeier */

// Error handling
import HttpError from "./HttpError.js";

/**
 * @class ServiceError
 * @extends HttpError
 *
 * @description
 * 502 Bad Gateway - Triggered by a failed service call.
 */
export default class ServiceError extends HttpError {
  constructor(
    message = "Service error",
    service = "generic",
    status = 502,
    originalError = null
  ) {
    super(message, status);
    this.service = service;

    if (originalError) {
      this.originalError = originalError;
    }
  }
}
