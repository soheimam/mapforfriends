const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 8000;
const cors = require('cors')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

MongoClient.connect(db.url, (err, conn) => {
    const database = conn.db("dev-friend")
    if (err) return console.log(err);
        require('./app/routes/index')(app, database);
        app.listen(port, () => {    console.log('We are live on ' + port);
    });
})

