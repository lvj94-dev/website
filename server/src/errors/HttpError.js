/* Author: Lucas Vincent Johanningmeier */

export default class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
