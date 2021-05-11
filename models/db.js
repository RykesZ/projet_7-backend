const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    timezone: 'Z',
    dateStrings: true
});

connection.connect(error => {
    if (error) {
        console.log("error: ", error);
        return;
    }
    console.log("Successfully connected to the database");
});

module.exports = connection;