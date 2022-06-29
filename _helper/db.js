const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10,
  host     : '127.0.0.1',
  user     : 'root',
  password : '10mc2415',
  port     : '3306',
  database : 'organization'
});

module.exports=pool;