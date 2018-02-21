var connection = require('./connection.js');

var orm = {
    selectAll: function(table_name, cb){
        var queryString = "SELECT * FROM ??;"

        connection.query(queryString, [table_name], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },

    insertOne: function(table_name, burg_nm, devrd, cb){
        devrd = devrd ? 0 : 1;
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?);"
        connection.query(queryString, [table_name, burg_nm, devrd], function(err, result){
            console.log(queryString);
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function(table_name, devoured, id, cb){
        devoured = devoured ? 1 : 0;
        console.log("***Inside updateOne***\n",table_name, devoured, id);
        var queryString = "UPDATE ?? SET devoured=? WHERE id=?;"
        console.log('id is ', id);
        // queryString = "UPDATE burgers SET devoured=1 WHERE id="+id+"?;"
        connection.query(queryString, [table_name, devoured, id], function(err, result){
            if (err) throw err;
            console.log('changed Rows', result.changedRows);
            cb(result);
        })

    }
}

module.exports = orm;
