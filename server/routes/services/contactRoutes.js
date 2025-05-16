/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { mailServiceGmail } from "../../src/controllers/contactController.js";

import { asyncHandler } from "../../src/utils/asyncHandler.js";

const router = express.Router();

router.post("/gmail", asyncHandler(mailServiceGmail));

export default router;
