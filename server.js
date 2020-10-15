'use strict'

//3rd party dependencies
require('dotenv').config();

const express = require('express');
const app = express();
const pg = require('pg');

//application constants
const PORT = process.env.PORT || 3000;
const client = new pg.Client(process.env.DATABASE_URL);
//const connectionString = 'post'

// app.get('/add', (req, res) => {
//     let firstName = req.query.first;
//     let lastName = req.query.last;

//     let SQL = 'INSERT INTO people (first_name, last_name) VALUES ($1, $2) RETURNING *;';
//     let name = [firstName, lastName];

//     client.query(SQL, name)
//     .then( results => {
//         res.status(200).json(results);
//     })
//     catch.(err => {
//         console.error('db error: err');
//     })
// });

// app.get('/people', (req, res) => {
//     let SQL = 'SELECT * FROM people';

//     client.query(SQL)
//     .then( results => {
//         res.status(200).json(results);
//     })
// })
// .catch(err => {
//     console.error('db error', err);
// });

client.connect()
.then( () => {
    app.listen(PORT, () => {
        console.log(`server up on: ${PORT}`);
    })
    
    })
    .catch(err => {
        console.error('connection error:', err);
})
// app.listen(PORT, () => {
//     console.log(`server up on: ${PORT}`);
// });
