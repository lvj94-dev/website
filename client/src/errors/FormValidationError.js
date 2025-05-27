/* Author: Lucas Vincent Johanningmeier */

import AppError from "./AppError";

export default class FormValidationError extends AppError {
  constructor(message = "Invalid form input") {
    super(message, "FormValidationError");
  }
}
