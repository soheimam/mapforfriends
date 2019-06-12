// Get DB credentials from our .env file within the seeder folder
require('dotenv').config({
    path: __dirname + '/.env.seeder'
})

const db = require('../db')

const pool = db.connect();


async function unSeedVenue() {
    db.query(pool, 'DELETE FROM venue');
    return await pool.end();

}

    

unSeedVenue()
console.log('your venue table has now been deleted')