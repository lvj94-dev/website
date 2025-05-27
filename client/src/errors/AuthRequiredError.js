/* Author: Lucas Vincent Johanningmeier */

import AppError from "./AppError";

export default class AuthRequiredError extends AppError {
  constructor(message = "Login required") {
    super(message, "AuthRequiredError");
  }
}
