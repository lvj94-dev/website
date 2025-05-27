/* Author: Lucas Vincent Johanningmeier */

import AppError from "./AppError";

export default class PermissionDeniedError extends AppError {
  constructor(message = "Permission denied") {
    super(message, "PermissionDeniedError");
  }
}
