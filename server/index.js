const express = require("express");

// ...:
const bcrypt = require("bcrypt");
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

// ...:
const port = 3000;
const jwt_secret = require("crypto").randomBytes(32).toString("hex");
const jwt_options = { algorithm: "HS256" };

////////////////////
// Public Routes: //
////////////////////

app.get("/api/test", (req, res) => {
    pool.query("SELECT * FROM films")
        .then((result) => {
            res.header({
                "Strict-Transport-Security": "max-age=31536000",
            }).json({
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

    bcrypt
        .hash(password, 10)
        .then((passhash) => {
            return pool.query("INSERT INTO users VALUES ($1, $2)", [
                username,
                passhash,
            ]);
        })
        .then((result) => {
            console.log(result);
            res.header({
                "Set-Cookie": `token=${jwt.sign(
                    username,
                    jwt_secret,
                    jwt_options
                )}`,
            }).json({
                message: `Completed SIGN-UP: <<${username}>> : <<${password}>>.`,
            });
        })
        .catch((error) => {
            console.error(`Failed SIGN-UP: <<${error}>>.`);
        });
});

app.post("/api/sign-in", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    bcrypt
        .hash(password, 10)
        .then((passhash) => {
            return pool.query(
                "SELECT COUNT(*) FROM users WHERE username = $1 AND password = $2",
                [username, passhash]
            );
        })
        .then((result) => {
            console.log(result);
            res.header({
                "Set-Cookie": `token=${jwt.sign(
                    username,
                    jwt_secret,
                    jwt_options
                )}`,
            }).json({
                message: `Completed SIGN-IN: <<${username}>> : <<${password}>>.`,
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
    if (jwt.verify(req.cookies.token, jwt_secret)) {
        res.status(200).send();
    } else {
        res.status(401).send();
    }
});

//////////////////
// Other Logic: //
//////////////////

// ...:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Signing secret is <<${jwt_secret}>>.`);
    console.log(`Signing algorithm is <<${jwt_options.algorithm}>>.`);
});
