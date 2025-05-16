/* Author: Lucas Vincent Johanningmeier */

import HttpError from "./HttpError.js";

export default class ForbiddenError extends HttpError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}
