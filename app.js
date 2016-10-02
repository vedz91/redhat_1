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


/**
 * GET /
 */
app.get('/', function (req, res) {
    res.send("HEY Yeah!")
});

app.use('/users', users);





