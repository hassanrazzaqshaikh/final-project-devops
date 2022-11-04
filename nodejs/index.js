const express = require("express");
const app = express();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host     : process.env.DB_HOST,
  user     : 'root',
  password : 'P@ssw0rd',
  database : 'students'
});

app.get("/",(req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('SELECT * from student_list', (err, rows) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log('The data from users table are: \n', rows);
        });
    });
});

app.listen(8080, () => {
    console.log('Server is running at port 8080');
});