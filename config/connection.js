var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"

    });
}

connection.connect(function (err) {
    if (err) console.log("Error connecting: " + err.stack);
    console.log("DB connection successful, ID " + connection.threadId);
})

module.exports = connection;