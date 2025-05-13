/* Author: Lucas Vincent Johanningmeier */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const dummyUser = {
  id: 0,
  username: "user",
  passwordHash: process.env.PASSWORD_DEV_HASH,
};

console.log(dummyUser.passwordHash);

export const authenticateUser = async (username, password) => {
  console.log(dummyUser.passwordHash);
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
