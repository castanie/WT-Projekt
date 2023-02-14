const express = require("express");
const router = express.Router();

const pool = require("../database");

//--------//
// FILMS: //
//--------//

router.get("/api/films", (req, res) => {
    pool.query("SELECT * FROM films")
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

router.get("/api/films/:id", (req, res) => {
    pool.query("SELECT * FROM films WHERE id = $1 LIMIT 1", [req.params.id])
        .then((result) => {
            res.json(result.rows[0]);
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

//--------//

module.exports = router;
