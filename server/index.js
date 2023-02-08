const express = require("express");

// ...:
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const pg = require("pg");

// ...:
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
const pool = new pg.Pool({
    host: "localhost",
    user: "cinema",
    database: "cinema",
});

const port = 3000;

////////////////////
// Public Routes: //
////////////////////

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
                token: jwt.sign(username, "secret"),
            });
        })
        .catch((error) => {
            console.error(`Failed SIGN-UP: <<${error}>>.`);
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
            console.error(`Failed SIGN-IN: <<${error}>>.`);
        });
});

/////////////////////
// Private Routes: //
/////////////////////

app.use("/api/auth", (req, res, next) => {
    console.log("Cookies:", req.cookies);
    next();
});

app.get("/api/auth", (req, res) => {
    res.cookie("token", jwt.sign("This is the payload.", "key")).json();
});

//////////////////
// Other Logic: //
//////////////////

// ...:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
