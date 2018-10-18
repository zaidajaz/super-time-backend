exports.handleSqlError = function(err) {
    switch(err.code) {
        case 'ER_EMPTY_QUERY':
            return err.sqlMessage;
        case 'ER_DUP_ENTRY':
            return 'Item already Exits';
        default:
            return 'Something Went Wrong - (CODE SEH001)'
    }
}