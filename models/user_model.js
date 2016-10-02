/**
 * Created by vsharma on 10/1/16.
 */
var user_json = require('../resource/users.json'),
    _ = require('underscore'),
    jsonfile = require('jsonfile');

module.exports = {
    users: user_json.users,
    save: function () {
        console.log('here')
        jsonfile.writeFile('./resource/users.json', {users:this.users}, {spaces: 2}, function(err) {
            console.error(err)
        })
    },
    create: function (obj, cb) {
        this.users.push(obj)
        this.save();
        cb(null, obj);
    },
    read: function (regNo, cb) {
        var user = _.find(this.users, function (user) {
            return user.registered == regNo;
        });
        if (_.isEmpty(user)) return cb("not found")
        cb(null, user);
    },
    update: function(regNo, obj, cb){
        var oldObj = _.findWhere(this.users, { registered: parseInt(regNo) })
        var index = this.users.indexOf(oldObj)
        if (index != -1){
            var updatedObject = _.extend(oldObj, obj);//keeping any old key/value
            this.users[index] = updatedObject;
            this.save();
        }


        cb(null, obj);
    },
    delete: function (regNo, cb) {
        var i = _.findIndex(this.users, {registered: parseInt(regNo)});
        if(i != -1) {
            var obj = this.users[i];
            this.users = _.reject(this.users, {registered: parseInt(regNo)})
            //this.users.splice(i, 1);
            this.save();
            return cb(null, obj);
        }
        cb("not found")
    },
    list: function (cb) {
        cb(null, this.users) ;
    },
    search: function (query, cb) {
        return cb(null, _.where(this.users, query))
    }

}