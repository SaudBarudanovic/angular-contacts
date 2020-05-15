const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Redacted",
    host: "localhost",
    port: 5432,
    database: "ang_contacts"
})

module.exports = pool;