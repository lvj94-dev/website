/* Author: Lucas Vincent Johanningmeier */

import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  name: process.env.POSTGRESQL_NAME,
});

export default pool;
