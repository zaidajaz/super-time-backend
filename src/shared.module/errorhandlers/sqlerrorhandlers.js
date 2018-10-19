exports.handleSqlError = function(sqlResObj) {
    if(sqlResObj.sqlErr) {
        console.log(sqlResObj.sqlErr);
       return {valid: false, messages: [sqlResObj.sqlErr.code], response: null};
    }
    if(sqlResObj.conErr) {
        return {valid: false, messages: ['Connection Error'], response: null};
    }
    if(sqlResObj.rows) {
        return {valid: true, messages: ['Success'], response: sqlResObj.rows};
    }
}