/* Author: Lucas Vincent Johanningmeier */

import HttpError from "./HttpError.js";

export default class NotFoundError extends HttpError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}
