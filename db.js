const Pool = require("pg").Pool;

const devPool = {
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "competition",
};

const prodPool = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: 5432,
  database: process.env.database,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodPool : devPool
);

module.exports = pool;
