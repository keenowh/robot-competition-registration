const pg = require("pg");

const devPool = () =>
  new pg.Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "competition",
  });

const prodPool = () =>
  new pg.Pool({
    user: "tbfkwytxxysxgd",
    password:
      "76b4ae0357c597b017eebce3ad01acd56a3e41b278cce0dc6f56ca0c46bee93f",
    host: "ec2-184-72-162-198.compute-1.amazonaws.com",
    port: 5432,
    database: "d9hph6uvbmpt6l",
    ssl: {
      rejectUnauthorized: false,
    },
  });

const pool = process.env.NODE_ENV === "production" ? prodPool() : devPool();

module.exports = pool;
