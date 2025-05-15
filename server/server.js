/* Author: Lucas Vincent Johanningmeier */

import "./config/env.js";

import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// api
const usersRoutes = (await import("./routes/api/users.js")).default;

// services
const contactRoutes = (await import("./routes/services/contactRoutes.js"))
  .default;
const loginRoutes = (await import("./routes/services/loginRoutes.js")).default;

app.use(cors());
app.use(express.json());

// api
app.use("/api/users", usersRoutes);

// services
app.use("/api/contact", contactRoutes);
app.use("/api/login", loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
