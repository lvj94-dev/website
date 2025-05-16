/* Author: Lucas Vincent Johanningmeier */

import HttpError from "./HttpError.js";

export default class ServiceError extends HttpError {
  constructor(message = "Service error", service = "generic", status = 502) {
    super(message, status);
    this.service = service;
  }
}
