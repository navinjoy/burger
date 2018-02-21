var orm = require('../config/orm');

var burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    insert: function(burger_name, devoured, cb) {
        console.log('burger.insert', burger_name, devoured);
        orm.insertOne("burgers", burger_name, devoured, function(res){
            cb(res);
        })
    },

    update: function(devoured, id, cb) {
        console.log("**inside update**", devoured, id)
        orm.updateOne("burgers", devoured, id, function(res){
            cb(res);
        })
    }
}

module.exports = burger;