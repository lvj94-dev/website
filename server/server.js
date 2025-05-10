/* Author: Lucas Vincent Johanningmeier */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
