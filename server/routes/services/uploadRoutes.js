/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { uploadService } from "../src/services/uploadService.js";

import { asyncHandler } from "../../src/utils/asyncHandler.js";

const router = express.Router();

router.post("/gmail", asyncHandler(mailServiceGmail));

export default router;
