/**
 * Created by vsharma on 10/2/16.
 */
var express = require('express');
var router = express.Router();

var user = require("../models/user_model");

/* perform search request */
router.get('/', function(req, res, next) {


    console.log(req.query);
    user.search(req.query, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;