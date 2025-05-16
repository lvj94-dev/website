/* Author: Lucas Vincent Johanningmeier */

import jwt from "jsonwebtoken";

import { UnauthorizedError, ForbiddenError } from "../errors/index.js";

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
