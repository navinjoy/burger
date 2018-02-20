var connection = require('connection.js');

var orm = {
    selectAll: function(table_name, cb){
        var queryString = "SELECT * FROM ??;"

        connection.query(queryString, [table_name], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },

    insertOne: function(table_name, burger_name, devoured, cb){
        var queryString = "INSERT INTO ?? VALUES (??, ??);"
        connection.query(query, [table_name, burger_name, devoured], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function(table_name, burger_name, devoured, id, cb){
        var queryString = "UPDATE ?? SET burger_name=??, devoured=?? WHERE id=??;"
        connection.query(query, [table_name, burger_name, devoured, id], function(err, result){
            if (err) throw err;
            cb(result);
        })

    }
}

module.exports = orm;
