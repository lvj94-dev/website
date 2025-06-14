/* Author: Lucas Vincent Johanningmeier */

// Express
import express from "express";

// Controllers
import { mailServiceGmail } from "../../src/controllers/contactController.js";

// Utils
import { asyncHandler } from "../../src/utils/asyncHandler.js";

const router = express.Router();

router.post("/gmail", asyncHandler(mailServiceGmail));

export default router;
