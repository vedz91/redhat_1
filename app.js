/**
 * Created by vsharma on 10/1/16.
 */
var express = require('express');
var bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

var app = express();

var users = require('./routes/users'),
    search = require('./routes/search');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


//server initialize
var server = app.listen(3001, function () {
    console.log('listening on port 3001!');
});


// GET /
app.get('/', function (req, res) {
    res.send("HEY Yeah!")
});

// Middleware for handling the case of request query
app.use(function(req, res, next) {
    var query = {}
    for (var key in req.query)
    {
        if(key.toLowerCase() == "pps"){
            query[key.toUpperCase()] = req.query[key];
        }
        else
        query[key.toLowerCase()] = req.query[key];
    }
    req.query = query;

    next();
});

// Middleware for sanitizing and validating request query
app.use(function(req, res, next) {

    //validation (as per requirement)
    //req.checkQuery('', 'Invalid param registered').isInt();

    //Sanitization of request query
    req.sanitizeQuery('registered').toInt();
    req.sanitizeQuery('dob').toInt();

    next();
});

// GET /users
app.use('/users', users);

// GET /search
app.use('/search', search);


// error handlers

// 404 exception handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development (No next)
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = {
    server : server,
    app : app
};





