exports.handleSqlError = function(sqlResObj) {
    if(sqlResObj.sqlErr) {
        console.log(sqlResObj.sqlErr);
       return {valid: false, messages: [sqlResObj.sqlErr.code], response: null};
    } else if(sqlResObj.conErr) {
        return {valid: false, messages: ['Connection Error'], response: null};
    } else if(sqlResObj.rows) {
        return {valid: true, messages: ['Success'], response: sqlResObj.rows};
    } else {
        return {valid: false, messages: ['Something Went Wrong'], response: null};
    }
}