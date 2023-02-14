const pg = require("pg");

//--------//

const pool = new pg.Pool({
    host: "localhost",
    user: "cinema",
    database: "cinema",
});

//--------//

module.exports = pool;
