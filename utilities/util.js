
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '2283450',
    database : 'bleague'
  }
});
module.exports = knex;