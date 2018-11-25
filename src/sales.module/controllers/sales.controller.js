const dbFunctions = require('../../shared.module/generic.handlers/dbFunctions');
const sqlQueries = require('../constants/sqlQueries');
const sqlErrHandler = require('../../shared.module/errorhandlers/sqlerrorhandlers');
const responseHandler = require('../../shared.module/generic.handlers/response.handler');
stockGroups = [];

exports.newSaleHeader = function newSaleHeader (req, res){
    let params = JSON.parse(JSON.stringify(req.body));
    params = [params.cust_id, params.salesperson];
    dbFunctions.executeQuery(sqlQueries.queries.insert_sale_header, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}
exports.addItemsToBill = function addItemsToBill (req, res){
    let list = JSON.parse(JSON.stringify(req.body.list));
    let query = '';
    params = [];
    list.forEach(element=> {
        query += sqlQueries.queries.addBillItems;
        params.push(element.bill_id);
        params.push(element.item_id);
        params.push(element.qty);
        params.push(element.amount);
    });
    console.log(query);
    dbFunctions.executeQuery(query, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}