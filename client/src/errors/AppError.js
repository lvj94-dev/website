/* Author: Lucas Vincent Johanningmeier */

export default class AppError extends Error {
  constructor(message, name = "AppError") {
    super(message);
    this.name = name;
  }
}
