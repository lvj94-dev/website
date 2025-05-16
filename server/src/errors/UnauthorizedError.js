/* Author: Lucas Vincent Johanningmeier */

import HttpError from "./HttpError.js";

export default class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}
