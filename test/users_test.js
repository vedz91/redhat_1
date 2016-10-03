/**
 * Created by vsharma on 10/3/16.
 */

var assert = require('assert'),
    request = require('supertest'),
    app = require('../app').app,
    server = require("../app").server;


var BASEURL = '/users';

describe('/users end point', function() {

    after(function (done) {
        server.close();
        done();
    });

    it('should return 200 on GET /users', function (done) {
        this.timeout(5000);
        var url = BASEURL;
        request(app)
            .get(url)
            .expect(200)
            .end(function (error, res) {
                if (error) return done(error);

                assert.equal(typeof res.body, "object", "GET " + url + " OK");
                assert.ok(res.body.length > 0, res.body.length + ' users returned in response')
                console.log(res.body.length + ' user returned in response')
                done();
            });
    });


    it('should return 200 on GET /users/1237176893', function (done) {
        this.timeout(5000);
        var url = BASEURL + "/1237176893";
        request(app)
            .get(url)
            .expect(200)
            .end(function (error, res) {
                if (error) return done(error);

                assert.equal(typeof res.body, "object", "GET " + url + " OK");
                assert.equal(res.body.registered, 1237176893)
                done();
            });
    });

    it('should return 200 on POST /users', function (done) {
        this.timeout(5000);
        var user = {
            "gender": "female",
            "name": {
                "title": "miss",
                "first": "test",
                "last": "test"
            },
            "location": {
                "street": "1097 the avenue",
                "city": "Newbridge",
                "state": "ohio",
                "zip": 28782
            },
            "email": "test.reid@example.com",
            "username": "test709",
            "password": "test",
            "salt": "lypI10wj",
            "md5": "bbdd6140e188e3bf68ae7ae67345df65",
            "sha1": "4572d25c99aa65bbf0368168f65d9770b7cacfe6",
            "sha256": "ec0705aec7393e2269d4593f248e649400d4879b2209f11bb2e012628115a4eb",
            "registered": 9999999999,
            "dob": 932871968,
            "phone": "031-541-9181",
            "cell": "081-647-4650",
            "PPS": "3302243T",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/60.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
            }
        };
        var url = BASEURL;
        request(app)
            .post(url)
            .send(user)
            .expect(200)
            .end(function (error, res) {
                if (error) return done(error);

                assert.equal(typeof res.body, "object", "GET " + url + " OK");
                assert.equal(res.body.registered, 9999999999)
                done();
            });
    });


    it('should return 200 on DELETE /users/9999999999', function (done) {
        this.timeout(5000);

        var url = BASEURL + "/9999999999";
        request(app)
            .del(url)
            .expect(200)
            .end(function (error, res) {
                if (error) return done(error);

                assert.equal(typeof res.body, "object", "GET " + url + " OK");
                assert.equal(res.body.registered, 9999999999)
                done();
            });
    });
});
