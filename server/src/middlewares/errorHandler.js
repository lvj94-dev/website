/* Author: Lucas Vincent Johanningmeier */

/**
 * @function errorHandler
 *
 * @description
 * Global Express error-handling middleware.
 *
 * @param {Error} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
  // internal log
  console.error("Error:", err.stack || err);

  const statusCode = err.status || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({ error: message });
};

export default errorHandler;

/**
 * NOTES
 * - [TODO] divide by "production" and "development"
 * -- .env
 */
