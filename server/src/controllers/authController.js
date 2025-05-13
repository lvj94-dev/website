/* Author: Lucas Vincent Johanningmeier */

import { authenticateUser } from "../services/authService.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authenticateUser(username, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
