/* Author: Lucas Vincent Johanningmeier */

import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

if (resourceLimits.error) {
  console.error("Failed to load.env file:", result.error);
  process.exit(1);
}
