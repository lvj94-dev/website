/* Author: Lucas Vincent Johanningmeier */

import { authenticateUser } from "../services/authService.js";

import { UnauthorizedError } from "../errors/index.js";

export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const token = await authenticateUser(username, password);
    res.status(200).json({ token });
  } catch (err) {
    return next(new UnauthorizedError("Invalid username or password")); // 401
  }
};
