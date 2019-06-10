// Get DB credentials from our .env file within the seeder folder
require('dotenv').config({
    path: __dirname + '/.env.seeder'
})

const db = require('../db')
const faker = require('faker');

const pool = db.connect();

function randomVenueData() {
    return [
        faker.company.companyName(),
        faker.phone.phoneNumber(),
        faker.address.streetAddress(),
        [faker.lorem.sentence(), faker.lorem.sentence()],
        faker.random.number({
            'min': 0,
            'max': 5
        })
    ]
}

async function seedVenue() {
    return db.query(pool, 'INSERT INTO venue(name, phone, address, comments, rating) VALUES($1, $2, $3, $4, $5) RETURNING *', randomVenueData())
}



async function seed() {
    for (i = 0; i < 100; i++) {
        await seedVenue();
    }
    await pool.end();
}



seed()
console.log('your venue table has now been seeded with 100 recordss')