/* Author: Lucas Vincent Johanningmeier */

import AppError from "./AppError";

export default class ApiServiceError extends AppError {
  constructor(message = "A service error occured", originalError = null) {
    super(message, "ApiServiceError");
    if (originalError) {
      this.originalError = originalError;
    }
  }
}
