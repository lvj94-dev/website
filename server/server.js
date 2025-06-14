/* Author: Lucas Vincent Johanningmeier */

// Configuration
import "./config/env.js";

// Express
import express from "express";

// Third-party
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// routes/api
const usersRoutes = (await import("./routes/api/users.js")).default;
const filesRoutes = (await import("./routes/api/files.js")).default;
const todoRoutes = (await import("./routes/api/todos.js")).default;

// routes/services
const contactRoutes = (await import("./routes/services/contactRoutes.js"))
  .default;
const loginRoutes = (await import("./routes/services/loginRoutes.js")).default;

// middlewares
import errorHandler from "./src/middlewares/errorHandler.js";

app.use(cors());
app.use(express.json());

// api
app.use("/api/users", usersRoutes);
app.use("/api/files", filesRoutes);
app.use("/api/todos", todoRoutes);

// services
app.use("/api/contact", contactRoutes);
app.use("/api/login", loginRoutes);

// middlewares
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
