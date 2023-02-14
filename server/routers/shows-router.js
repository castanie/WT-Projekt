const express = require("express");
const router = express.Router();

const pool = require("../database");

//--------//
// SHOWS: //
//--------//

router.get("/api/shows", (req, res) => {
    pool.query(
        "SELECT * FROM shows WHERE film = $1 AND date = $2 and time > NOW()::time",
        [req.query.film, req.query.date]
    )
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

router.get("/api/shows/:id", (req, res) => {
    pool.query("SELECT * FROM shows WHERE id = $1 LIMIT 1", [req.params.id])
        .then((result) => {
            res.json(result.rows[0]);
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

//--------//

module.exports = router;
