/* Author: Lucas Vincent Johanningmeier */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* for test-purposes only */
const dummyUser = {
  id: 1,
  username: "user",
  passwordHash: process.env.PASSWORD_USER_HASH,
};

export const authenticateUser = async (username, password) => {
  if (
    username !== dummyUser.username ||
    !bcrypt.compareSync(password, dummyUser.passwordHash)
  ) {
    throw new Error("Invalid credentials");
  }

  return jwt.sign(
    { userId: dummyUser.id, username: dummyUser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
