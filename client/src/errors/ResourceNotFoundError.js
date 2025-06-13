/* Author: Lucas Vincent Johanningmeier */

// Error handling
import AppError from "./AppError";

/**
 * @class ResourceNotFoundError
 * @extends AppError
 *
 * @description
 * Represents an error thwon when a requested resource cannot be found.
 *
 * @param {string} [message="Requested resource not found"]
 *
 * @property {string} name
 */
export default class ResourceNotFoundError extends AppError {
  constructor(message = "Requested resource not found") {
    super(message, "ResourceNotFoundError");
  }
}
