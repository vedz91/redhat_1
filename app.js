/**
 * Created by vsharma on 10/1/16.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//server initialize
app.listen(3001, function () {
    console.log('listening on port 3001!');
});

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/part1', function(err) {
//     if(err) {
//         console.log('connection error', err);
//     } else {
//         console.log('connection successful');
//     }
// });

/**
 * GET /
 */
app.get('/', function (req, res) {
    res.send("HEY Yeah!")
});

app.use('/users', users);





