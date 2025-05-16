/* Author: Lucas Vincent Johanningmeier */

import HttpError from "./HttpError.js";
import ValidationError from "./ValidationError.js";
import UnauthorizedError from "./UnauthorizedError.js";
import ForbiddenError from "./ForbiddenError.js";
import NotFoundError from "./NotFoundError.js";

import ServiceError from "./ServiceError.js";

export {
  HttpError, // Base Class
  ValidationError, // 400 Bad Request (bad input)
  UnauthorizedError, // 401 Unauthorized (login/token fail)
  ForbiddenError, // 403 Forbidden (no permission)
  NotFoundError, // 404 Not Found (missing resource)
  ServiceError, // 502
};
