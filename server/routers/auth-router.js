const express = require("express");
const router = express.Router();

const pool = require("../database");

//-------//
// AUTH: //
//-------//

const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const jwt_secret = crypto.randomBytes(32).toString("hex");
const jwt_options = { algorithm: "HS256" };

router.use("/api/auth", (req, res, next) => {
    console.log("Cookies:", req.cookies);
    next();
});

router.get("/api/auth", (req, res) => {
    if (jwt.verify(req.cookies.token, jwt_secret)) {
        res.status(200).send();
    } else {
        res.status(401).send();
    }
});

router.post("/api/sign-up", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    pool.query("SELECT passhash FROM users WHERE username = $1", [username])
        .then((result) => {
            if (result.rowCount < 1) {
                return bcrypt.hash(password, 10);
            } else {
                throw "Already exists.";
            }
        })
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

router.post("/api/sign-in", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    pool.query("SELECT passhash FROM users WHERE username = $1", [username])
        .then((result) => {
            if (result.rowCount > 0) {
                return bcrypt.compare(password, result.rows[0].passhash);
            } else {
                throw "Invalid username or password.";
            }
        })
        .then((matches) => {
            if (matches) {
                res.header({
                    "Set-Cookie": `token=${jwt.sign(
                        username,
                        jwt_secret,
                        jwt_options
                    )}`,
                }).json({
                    message: `Completed SIGN-IN: <<${username}>> : <<${password}>>.`,
                });
            } else {
                throw "Invalid username or password.";
            }
        })
        .catch((error) => {
            console.error(`Failed SIGN-IN: <<${error}>>.`);
        });
});

//--------//

module.exports = router;
