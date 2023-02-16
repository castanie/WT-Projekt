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
            console.error(error);
        });
});

router.get("/api/films/:id", (req, res) => {
    pool.query("SELECT * FROM films WHERE id = $1 LIMIT 1", [req.params.id])
        .then((result) => {
            res.json(result.rows[0]);
        })
        .catch((error) => {
            console.error(error);
        });
});

//--------//

router.get("/api/films/:id/reviews", (req, res) => {
    pool.query("SELECT * FROM reviews WHERE film = $1", [req.params.id])
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.post("/api/films/:id/reviews", (req, res) => {
    pool.query("INSERT INTO reviews VALUES ($1, $2, $3, $4)", [
        req.body.username,
        req.params.id,
        req.body.rating,
        req.body.review,
    ])
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.get("/api/films/:id/shows", (req, res) => {
    pool.query("SELECT * FROM shows WHERE film = $1", [req.params.id])
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.post("/api/films/:id/shows", (req, res) => {
    pool.query("INSERT INTO shows VALUES (DEFAULT, $1, $2, $3, $4, DEFAULT)", [
        req.body.screen,
        req.params.id,
        req.body.date,
        req.body.time,
    ])
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error(error);
        });
});

//--------//

module.exports = router;
