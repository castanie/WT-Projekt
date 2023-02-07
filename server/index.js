const express = require("express");

// ...:
const body = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const pg = require("pg");

// ...:
const app = express();
app.use(cors());
app.use(body.json());
const pool = new pg.Pool({
    host: "localhost",
    user: "cinema",
    database: "cinema",
});

const port = 3000;

/////////////
// Routes: //
/////////////

app.get("/api/test", (req, res) => {
    pool.query("SELECT * FROM _")
        .then((result) => {
            res.json({
                message: result.rows[0].value,
            });
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

app.get("/api/films", (req, res) => {
    pool.query("SELECT * FROM films")
        .then((result) => {
            console.log(result.rows);
            res.json({
                queried: result.rows,
            });
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

app.post("/api/sign-up", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    pool.query(
        "SELECT COUNT(*) FROM users WHERE username = '$1' AND password = '$2'",
        [username, password]
    )
        .then((result) => {
            res.json({
                message: `Completed SIGN-UP: <<${username}>> : <<${password}>>.`,
                token: jwt.sign("payload", "secret"),
            });
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

app.post("/api/sign-in", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    pool.query(
        "SELECT COUNT(*) FROM users WHERE username = $1 AND password = $2",
        [username, password]
    )
        .then((result) => {
            res.json({
                message: `Completed SIGN-IN: <<${username}>> : <<${password}>>.`,
                token: jwt.sign("payload", "secret"),
            });
        })
        .catch((error) => {
            console.error("Failed whatever.");
        });
});

// ...:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
