const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()

const index = require('./routes/index');
const sign = require('./routes/sign')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extend: true / false}))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log('listening on port:' + PORT);
});

mongoose.connect(config.mongodbUri)
//mongoose.connect('mongodb://localhost/app')
const db = mongoose.connection;
db.on('error', err => {
    console.error(err);
    console.log('✗ DB connection error. Please make sure DB is running.');
    process.exit();
});

db.once('open', () => {
    console.log('✓ DB connection success.');
});

app.use("/", index);
app.use('/', sign);