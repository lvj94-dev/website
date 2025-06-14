/* Author: Lucas Vincent Johanningmeier */

// Express
import express from "express";

// Utilities
import { asyncHandler } from "../../src/utils/asyncHandler.js";

const router = express.Router();

router.post("/gmail", asyncHandler(mailServiceGmail));

export default router;
