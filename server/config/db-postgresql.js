/* Author: Lucas Vincent Johanningmeier */

// Third-party
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_PORT,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  name: process.env.POSTGRESQL_NAME,
});

pool
  .connect()
  .then((client) => {
    console.error("PostgreSQL connected");
    client.release();
  })
  .catch((err) => {
    console.error("PostgreSQL connection error:", err);
    process.exit(1);
  });

export default pool;
