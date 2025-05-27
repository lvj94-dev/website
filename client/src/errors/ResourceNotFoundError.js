/* Author: Lucas Vincent Johanningmeier */

import AppError from "./AppError";

export default class ResourceNotFoundError extends AppError {
  constructor(message = "Requested resource not found") {
    super(message, "ResourceNotFoundError");
  }
}
