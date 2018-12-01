const dbCon = require('../../configurations/database.config');
exports.executeQuery=function(query,params,callback){
    dbCon.getConnection(function(err,connection){
        if (err) {
        //   connection.release();
          callback({conErr: err});
        }  
        if (connection) {
            connection.query(query,params,function(err,rows){
                connection.release();
                if(!err) {
                    callback({rows: rows});
                }    
                else {
                    callback({sqlErr: err});  
                }    
            });
        } 
        else {
            callback({connErr: 'Connection Issue, try again'});
        }
        // connection.on('error', function(err) {      
        //       if(err.code === 'PROTOCOL_CONNECTION_LOST')  {

        //       }
        // });
    });
}