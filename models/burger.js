var orm = require('../config/orm');

var burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    insert: function(burger_name, devoured, cb) {
        orm.insertOne("burgers", burger_name, devoured, function(res){
            cb(res);
        })
    },

    update: function(burger_name, devoured, id, cb) {
        orm.updateOne("burgers", burger_name, devoured, id, function(res){
            cb(res);
        })
    }
}

module.exports = burger;