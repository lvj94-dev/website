/* Author: Lucas Vincent Johanningmeier */

// Express
import express from "express";

// Controllers
import { loginUser } from "../../src/controllers/authController.js";

// Utilities
import { asyncHandler } from "../../src/utils/asyncHandler.js";

const router = express.Router();

router.post("/", asyncHandler(loginUser));

export default router;
