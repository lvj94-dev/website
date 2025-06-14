/* Author: Lucas Vincent Johanningmeier */

// Node
import path from "path";
import { fileURLToPath } from "url";

// Third-party
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const result = dotenv.config({ path: path.join(__dirname, "../.env") });

if (result.error) {
  console.error("Failed to load.env file:", result.error);
  process.exit(1);
}
