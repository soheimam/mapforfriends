const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/db')

const ejs = require('ejs')
const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
const pool = db.connect()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

// app.get('/signup', (req, res) => {
//     res.render('signup')
// })

function validUser(user){
    return user[0] ? user[0].email : false
}

app.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
        // we execute a sql query to find if the user exist in th db
        const user = await db.query(pool, `SELECT * FROM users WHERE email='${req.body.email}'`)
        
        // we test if the user exist if it does not we insert into
        if (req.body.email !== validUser(user)) {
            const query = await db.query(pool, 'INSERT INTO users(fullname, email, password, passwordTwo) VALUES($1, $2, $3, $4) RETURNING *', [req.body.fullname, req.body.email, req.body.password, req.body.passwordTwo,])
            return res.render('dashboard', {
                username: query.email
            })
        }
        return res.redirect('/')     
    } catch (error) {
        console.log('Something weird happened', error)
    }

})

app.post('/login', async (req, res) => {
    const user = await db.query(pool, `SELECT * FROM users WHERE email='${req.body.email}'`)
    if (req.body.password === user.rows[0].password) {
        return res.render('dashboard', {
            username: req.body.email
        })
    }
    return res.redirect('/login')
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