const express = require("express");

const Redis = require("ioredis");
const router = express.Router();
const pool = require("../db");

const redis = new Redis(6379);

function cache(req, res, next) {
  redis.get("competitors", (err, result) => {
    if (err) throw err;
    if (result !== null) {
      console.log("I'm using cache");
      res.status(200).send(JSON.parse(result));
    } else {
      next();
    }
  });
}

router.get("/", cache, async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM competitors");
    redis.set("competitionrs", JSON.stringify(response.rows));

    res.status(200).json(response.rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const info = {
      compName: req.body.compName,
      players: req.body.players,
      school: req.body.school,
      coach: req.body.coach,
    };

    const response = await pool.query(
      "INSERT INTO competitors (compName, players, school, coach) VALUES ($1, $2, $3, $4) RETURNING *",
      [info.compName, info.players, info.school, info.coach]
    );
    redis.del("competitors");
    res.status(200).json(response.rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
