const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    database: 'mydatabase'
});

module.exports = pool.promise();