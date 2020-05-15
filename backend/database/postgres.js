const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Compossui727.",
    host: "localhost",
    port: 5432,
    database: "ang_contacts"
})

module.exports = pool;