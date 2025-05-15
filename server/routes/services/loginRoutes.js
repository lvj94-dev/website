/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { loginUser } from "../../src/controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);

export default router;
