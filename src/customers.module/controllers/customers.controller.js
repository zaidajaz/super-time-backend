const dbFunctions = require('../../shared.module/generic.handlers/dbFunctions');
const sqlQueries = require('../constants/sqlQueries');
const sqlErrHandler = require('../../shared.module/errorhandlers/sqlerrorhandlers');
const responseHandler = require('../../shared.module/generic.handlers/response.handler');
stockGroups = [];

exports.addCustomer = function addCustomer (req, res){
    let params = JSON.parse(JSON.stringify(req.body.list));
    console.log(params);
    let query = sqlQueries.queries.insert_customer;
    // params.forEach(element=> {
    //     query += sqlQueries.queries.insert_stockItem;
    // });
    console.log(query);
    dbFunctions.executeQuery(query, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}

exports.updateStockItem = function updateStockItem(req, res) {
    let name = JSON.parse(JSON.stringify(req.body)).name;
    let id = req.params.id;
    let params = [name, id];
    // dbFunctions.executeQuery(sqlQueries.queries.update_stockGroup, params, (sqlResObj)=>{
    //     sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
    //     responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    // });
}

exports.deleteStockItem = function deleteStockItem(req, res) {
    let ids = JSON.parse(JSON.stringify(req.body)).ids;
    let query = '';
    ids.forEach(element=>{
        query += sqlQueries.queries.delete_stockGroup;
    });
    // dbFunctions.executeQuery(query, ids, (sqlResObj)=>{
    //     sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
    //     responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    // });
}

exports.getCustomers = function getCustomers(req, res) {
    let filter = req.query.filter;
    if(filter) {
        likeFilter = '%'+filter+'%';
        dbFunctions.executeQuery(sqlQueries.queries.search_customers_filtered, [likeFilter, likeFilter], (sqlResObj)=>{
            sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
            responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
        });
    }
    else{
        dbFunctions.executeQuery(sqlQueries.queries.search_customers, null, (sqlResObj)=>{
            sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
            responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
        });
    }
}

exports.getCustomer = function getCustomer(req, res) {
    params = req.params.id;
    dbFunctions.executeQuery(sqlQueries.queries.search_customer, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}