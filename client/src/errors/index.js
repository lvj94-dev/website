/* Author: Lucas Vincent Johanningmeier */

import AppError from "./AppError";
import FormValidationError from "./FormValidationError";
import AuthRequiredError from "./AuthRequiredError";
import PermissionDeniedError from "./PermissionDenied";
import ResourceNotFoundError from "./ResourceNotFoundError";
import ApiServiceError from "./ApiServiceError";

export {
  AppError, // base class
  FormValidationError, // 400 Bad Request (invalid form input)
  AuthRequiredError, // 401 Unauthorized (login/token missing)
  PermissionDeniedError, // 403 Forbidden (insufficient privileges)
  ResourceNotFoundError, // 404 Not Found (invalid route or missing item)
  ApiServiceError, // 502 Bad Gateway (API/service/network failure)
};
