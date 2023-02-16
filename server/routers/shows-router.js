const express = require("express");
const router = express.Router();

const pool = require("../database");

//--------//
// SHOWS: //
//--------//

router.get("/api/films/:film/shows", (req, res) => {
    pool.query(
        "SELECT * FROM shows WHERE film = $1 AND date = $2 and time > NOW()::time",
        [req.params.film, req.query.date]
    )
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.get("/api/films/:film/shows/:show", (req, res) => {
    pool.query("SELECT * FROM shows WHERE id = $1 LIMIT 1", [req.params.show])
        .then((result) => {
            res.json(result.rows[0]);
        })
        .catch((error) => {
            console.error(error);
        });
});

//--------//

router.get("/api/tickets", (req, res) => {
    pool.query(
        'SELECT * FROM tickets INNER JOIN shows ON tickets.show = shows.id WHERE "user" = $1',
        [req.query.user]
    )
        .then((result) => {
            console.log(result);
            res.json(result.rows);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.get("/api/tickets/:id", (req, res) => {
    pool.query("SELECT * FROM tickets WHERE id = $1 LIMIT 1", [req.params.id])
        .then((result) => {
            res.json(result.rows[0]);
        })
        .catch((error) => {
            console.error(error);
        });
});

//--------//

module.exports = router;
