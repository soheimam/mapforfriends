const express = require('express');
const session = require('express-session');

const bodyParser = require('body-parser')
const db = require('../database/db')

const ejs = require('ejs')
const app = express()
const pool = db.connect()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 60000
    }
}))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    console.log(req.session)
    if (req.session.email) {
        return res.render('dashboard', {
            username: req.session.email
        })
    } else {
        return res.redirect('/')
    }
})

function validUser(user, property) {
    return user[0] ? user[0][property] : false
}
app.post('/signup', async (req, res) => {
    try {
        // we execute a sql query to find if the user exist in th db
        const user = await db.query(pool, `SELECT * FROM users WHERE email='${req.body.email}'`)

        // we test if the user exist if it does not we insert into
        if (req.body.email !== validUser(user.rows, 'email')) {
            req.session.email = req.body.email
            await db.query(pool, 'INSERT INTO users(fullname, email, password) VALUES($1, $2, $3) RETURNING *', [req.body.fullname, req.body.email, req.body.password])
            return res.render('dashboard', {
                username: req.session.email
            })
        }
        return res.redirect('/')
    } catch (error) {
        console.log('Something weird happened', error)
    }

})

app.post('/login', async (req, res) => {
    try {
        const user = await db.query(pool, `SELECT * FROM users WHERE email='${req.body.email}'`)
        if (req.body.password === validUser(user.rows, 'password')) {
            req.session.email = req.body.email
            return res.render('dashboard', {
                username: req.body.email
            })
        }
        return res.redirect('/')
    } catch (error) {
       console.log('something with login went weird') 
    }
})

app.get('/bars', async(req, res) => {
    const { name } = req.query
    const bar = await db.query(pool, `SELECT * FROM venue WHERE name='${name}'`)
    res.json(bar.rows[0])
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