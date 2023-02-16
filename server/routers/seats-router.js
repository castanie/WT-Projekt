const express = require("express");
const router = express.Router();

const pool = require("../database");

//--------//
// SEATS: //
//--------//

router.get("/api/screens/:screen/seats", (req, res) => {
    pool.query("SELECT * FROM seats WHERE screen = $1 ORDER BY id", [
        req.params.screen,
    ])
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.get("/api/screens/:screen/seats/:seat", (req, res) => {
    pool.query("SELECT * FROM seats WHERE screen = $1 AND id = $2 LIMIT 1", [
        req.params.screen,
        req.params.seat,
    ])
        .then((result) => {
            res.json(result.rows[0]);
        })
        .catch((error) => {
            console.error(error);
        });
});

//--------//

module.exports = router;
