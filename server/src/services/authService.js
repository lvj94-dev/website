/* Author: Lucas Vincent Johanningmeier */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../../db/database.js";

const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE username = ?`;

    db.get(sql, [username], (err, row) => {
      if (err) {
        return reject(err);
      }
      if (!row) {
        return reject(new Error("User not found!"));
      }

      resolve(row);
    });
  });
};

export const authenticateUser = async (username, password) => {
  const user = await getUserByUsername(username);

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Invalid credentials!");
  }

  return jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
