const Pool = require('pg').Pool;

const pool = new Pool({
    user: "xdhmsyvt",
    password: "W47-l77XOkMk4ltXVLg95nhVaaqeK_OZ",
    host: "rogue.db.elephantsql.com",
    port: 5432,
    database: "xdhmsyvt"
})

module.exports = pool;