// all heleprs functions for the databse
const { Pool } = require('pg')
require('dotenv').config()

console.log(process.env)

function connect(){
    return new Pool({
        user: process.env.DB_USER,
        host: 'localhost',
        database: process.env.DB,
        password: process.env.DB_PASS
    })
}

async function query(pool, query){
    const res = await pool.query(query)
    console.log(res)
    await pool.end()
    return res
}

module.exports = {
    connect,
    query
}