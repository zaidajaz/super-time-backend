var mysql = require('mysql')
// const connection = mysql.createPool({
//   connectionLimit: 10,
//   host     : 'localhost',
//   user     : 'root',
//   password : 'diaz06041994',
//   database : 'super_time_app',
//   multipleStatements: true
// });

var connection;
function connectDB() {
    connection = mysql.createPool({
      connectionLimit: 10,
      host     : '148.66.136.68',
      port: '3306',
      user     : 'zaid_forST',
      password : 'diaz06041994',
      database : 'super_time_app',
      multipleStatements: true
    });
  
  connection.on("error", (err)=>{
    console.log(err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectDB();
    }
  });
}
connectDB();
module.exports = connection;