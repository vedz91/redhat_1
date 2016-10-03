/**
 * Created by vsharma on 10/3/16.
 */
/**
 * Created by vsharma on 10/3/16.
 */

var assert = require('assert'),
    request = require('supertest'),
    app = require('../app').app,
    server = require("../app").server,
    _ = require('underscore');


var BASEURL = '/search';

describe('/search end point', function() {

    after(function (done) {
        server.close();
        done();
    });

    it('GET /search?gender=female, should return only females', function (done) {
        this.timeout(5000);
        var url = BASEURL + "?gender=female";
        request(app)
            .get(url)
            .expect(200)
            .end(function (error, res) {
                if (error) return done(error);

                assert.equal(typeof res.body, "object", "GET " + url + " OK");
                var allFemale = true;
                assert(_.where(res.body, {gender: "male"}).length == 0, "all females" )
                done();
            });
    });

    it('GET /search?gender=female&registered=1237176893, should return only one user', function (done) {
        this.timeout(5000);
        var url = BASEURL + "?gender=female&registered=1237176893";
        request(app)
            .get(url)
            .expect(200)
            .end(function (error, res) {
                if (error) return done(error);

                assert.equal(typeof res.body, "object", "GET " + url + " OK");
                var allFemale = true;
                assert.equal(res.body.length, 1, "only one results")
                assert(_.where(res.body, {gender: "male"}).length == 0, "she's females" )
                assert.equal(res.body[0].registered, 1237176893, "Correct registeration no")
                done();
            });
    });

    it('GET /search?gender=female&pps=3302243T, should return only one user', function (done) {
        this.timeout(5000);
        var url = BASEURL + "?gender=female&pps=3302243T";
        request(app)
            .get(url)
            .expect(200)
            .end(function (error, res) {
                if (error) return done(error);

                assert.equal(typeof res.body, "object", "GET " + url + " OK");
                var allFemale = true;
                assert.equal(res.body.length, 1, "only one results")
                assert(_.where(res.body, {gender: "male"}).length == 0, "she's females" )
                assert.equal(res.body[0].PPS, "3302243T", "Correct PPS no")
                done();
            });
    });
});