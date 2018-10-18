const dbCon = require('../../configurations/database.config');
// exports.executeQuery = (query, params)=>{
//     dbCon.query(query, params, (err, rows, cols)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(rows);
//         console.log(cols);
//     });
// }

exports.executeQuery=function(query,params,callback){
    let connectionError = false;
    let sqlError = false;
    dbCon.getConnection(function(err,connection){
        if (err) {
          connection.release();
          callback({conErr: err});
        }   
        connection.query(query,params,function(err,rows){
            connection.release();
            if(!err) {
                callback({rows: rows});
            }    
            else {
                callback({sqlErr: err});  
            }    
        });
        connection.on('error', function(err) {      
              throw err;  
        });
    });
}