const { Pool } = require("pg");
const pool  = new Pool({
    user: 'pern_auth_user',
    host: 'dpg-cheqd88rddl9buigi8eg-a',
    database: 'pern_auth',
    password: 'UIvBx2aF5JJFdciSOPP59PaVejIYwydd',
    port: 5432
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}