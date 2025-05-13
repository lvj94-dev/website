/* Author: Lucas Vincent Johanningmeier */

import "./config/env.js";

import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

const contactRoutes = (await import("./src/routes/contactRoutes.js")).default;
const loginRoutes = (await import("./src/routes/loginRoutes.js")).default;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api", loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
