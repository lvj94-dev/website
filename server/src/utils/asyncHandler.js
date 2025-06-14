/* Author: Lucas Vincent Johanningmeier */

/**
 * @function asyncHandler
 *
 * @description
 * Wraps an async Express route handler to catch errors and pass them to 'next()'.
 * Prevents the need for repetitive 'try-catch' -blocks in controllers.
 *
 * @param {Function(import("express").Request,
 *                  import("express").Response,
 *                  import("express").NexFunction): Promise<any>} fn
 * An async route handler function.
 *
 * @returns {Function(import("express").Request,
 *                    import("express").Response),
 *                    import("express").NextFunction): void}
 * A wrapped function that forwards any thrown error to Express error middleware.
 */
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
