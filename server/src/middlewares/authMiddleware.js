/* Author: Lucas Vincent Johanningmeier */

// Third-party
import jwt from "jsonwebtoken";

// Error handling
import { UnauthorizedError, ForbiddenError } from "../errors/index.js";

/**
 * @function authMiddleware
 *
 * @description
 * Express middleware that verifies a JWT from the 'Authorization' header.
 * Attaches decoded user data ro 'req.user' if the token is valid.
 *
 * @returns {void}
 */
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(new UnauthorizedError("No token provided")); // 401
  }

  try {
    const jwtData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = jwtData;
    next();
  } catch (err) {
    return next(new ForbiddenError("Invalid or expired token")); // 403
  }
};

export default authMiddleware;
