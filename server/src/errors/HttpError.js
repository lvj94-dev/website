/* Author: Lucas Vincent Johanningmeier */

/**
 * @class HttpError
 * @extends Error
 *
 * @description
 * A generic error class for HTTP exceptions.
 */
export default class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
