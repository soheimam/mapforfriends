const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/db')

const ejs = require('ejs')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
const pool = db.connect()

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async(req, res) => {
    console.log(req.body)
    const query = await db.query(pool, 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *', [req.body.email, req.body.password])
    // WIth the req body data we can add the user to db
    res.render('dashboard', {username: req.body.email})
})

app.post('/login', async(req, res) => {
    console.log(req.body)
    await db.query(pool, 'SELECT * FROM users')
    // WIth the req body data we can add the user to db
    res.render('dashboard', {username: req.body.firstname})
})

app.get('/bars', (req, res) => {
    const responseData = {
        'name': 'Freds Cafe',
        'rating': 5,
        'address': '123 Fred Street'
    }
    res.json(responseData)
})

app.get('/restaurants', (req, res) => {
    const responseData = {
        'name': 'Freds Cafe',
        'rating': 5,
        'address': '123 Fred Street'
    }
    res.json(responseData)
})

app.get('/users', (req, res) => {
    // Getting users from DB and ensuring password is correct
})

app.post('/users', (req, res) => {
    // adding users
})

app.post('/bars', (req, res) => {
    //
})

app.post('/restaurants', (req, res) => {
    // Here is our pst data
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})