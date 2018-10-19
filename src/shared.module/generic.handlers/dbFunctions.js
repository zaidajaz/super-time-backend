const dbCon = require('../../configurations/database.config');
exports.executeQuery=function(query,params,callback){
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