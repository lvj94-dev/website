/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { loginUser } from "../../src/controllers/authController.js";

import { asyncHandler } from "../../src/utils/asyncHandler.js";

const router = express.Router();

router.post("/", asyncHandler(loginUser));

export default router;
