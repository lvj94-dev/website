/* Author: Lucas Vincent Johanningmeier */

import HttpError from "./HttpError.js";

export default class ValidationError extends HttpError {
  constructor(message = "Invalid input") {
    super(message, 400);
  }
}
