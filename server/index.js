const express = require("express");

//-------//

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const pool = require("./database");

//-------//

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));
app.use(express.static("static"));

const port = 3000;

//-----------------//
// Private Routes: //
//-----------------//

app.use(require("./routers/auth-router"));

//-----------------//
// Public Routes:  //
//-----------------//

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

app.use(require("./routers/films-router"));
app.use(require("./routers/seats-router"));
app.use(require("./routers/shows-router"));

//-------//

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
