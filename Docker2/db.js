const { Pool } = require("pg");

const pool = new Pool({
  host: "db",          // IMPORTANT: service name from docker-compose
  user: "postgres",
  password: "pass",
  database: "postgres",
  port: 5432,
});

module.exports = pool;
