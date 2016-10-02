/**
 * Created by vsharma on 10/1/16.
 */
var express = require('express');
var router = express.Router();

var user = require("../models/user_model");

/* saves a user */
router.post('/', function(req, res, next) {
    user.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* load all user */
router.get('/', function(req, res, next) {
    user.list(function (err, users) {
        if (err) return next(err);
        res.json(users);
    })
});

/* load user by reg no */
router.get('/:regId', function(req, res, next) {
    console.log(req.params.regId);
    user.read(req.params.regId, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* update user by reg no */
router.put('/:regId', function(req, res, next) {
    user.update(req.params.regId, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* delete a user by reg no */
router.delete('/:regId', function(req, res, next) {
    user.delete(req.params.regId, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
