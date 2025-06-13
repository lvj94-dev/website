/* Author: Lucas Vincent Johanningmeier */

/**
 * @class AppError
 * @extends Error
 *
 * @description
 * Base application error class that extends the native JavaScript 'Error'.
 *
 * @param {string} message
 * @param {string} [name="AppError"]
 *
 * @property {string} name
 */
export default class AppError extends Error {
  constructor(message, name = "AppError") {
    super(message);
    this.name = name;
  }
}
