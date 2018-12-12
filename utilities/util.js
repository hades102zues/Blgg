const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'bleague',
  password: '2283450'
});

module.exports = pool.promise();