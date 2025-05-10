/* Author: Lucas Vincent Johanningmeier */

import express from "express";

import { mailServiceGmail } from "../controllers/contactController.js";

const router = express.Router();
router.post("/gmail", mailServiceGmail);

export default router;
