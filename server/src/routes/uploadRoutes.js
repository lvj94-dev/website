/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { uploadService } from "../src/services/uploadService.js";

const router = express.Router();
router.post("/gmail", mailServiceGmail);

export default router;
