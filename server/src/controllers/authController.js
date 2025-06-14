/* Author: Lucas Vincent Johanningmeier */

// Types
/** @typedef {import("../../../types/server-types.js").ExpressHandler} ExpressHandler */

// Services
import { authenticateUser } from "../services/authService.js";

// Error handling
import { UnauthorizedError } from "../errors/index.js";

/**
 * @function loginUser
 * @type {ExpressHandler}
 *
 * @description
 * Authenticates a user using its credentials, returns a token if successful.
 */
export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const token = await authenticateUser(username, password);
    res.status(200).json({ token });
  } catch (err) {
    return next(new UnauthorizedError("Invalid username or password")); // 401
  }
};
