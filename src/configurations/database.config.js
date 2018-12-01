var mysql = require('mysql')
// const connection = mysql.createPool({
//   connectionLimit: 10,
//   host     : 'localhost',
//   user     : 'root',
//   password : 'diaz06041994',
//   database : 'super_time_app',
//   multipleStatements: true
// });

const connection = mysql.createPool({
  connectionLimit: 10,
  host     : '148.66.136.68',
  port: '3306',
  user     : 'zaid_forST',
  password : 'diaz06041994',
  database : 'super_time_app',
  multipleStatements: true
});

connection.on("error", (err)=>console.log(err));

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

module.exports = connection;