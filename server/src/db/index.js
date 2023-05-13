const { Pool } = require("pg");
const pool  = new Pool({
    user: 'pern_auth_i62w_user',
    host: 'dpg-cherbn64dad1jqfqq3p0-a.oregon-postgres.render.com',
    database: 'pern_auth_i62w',
    password: 'HfCtJPyMt1Tml7buWW8WAygmLoyuokWG',
    port: 5432
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}