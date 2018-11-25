const dbFunctions = require('../../shared.module/generic.handlers/dbFunctions');
const sqlQueries = require('../constants/sqlQueries');
const sqlErrHandler = require('../../shared.module/errorhandlers/sqlerrorhandlers');
const responseHandler = require('../../shared.module/generic.handlers/response.handler');
stockGroups = [];

exports.addStockItem = function addStockItem (req, res){
    let params = JSON.parse(JSON.stringify(req.body.list));
    console.log(params);
    let query = sqlQueries.queries.insert_stockItem;
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

exports.getStockItems = function getStockItems(req, res) {
    let filter = req.query.filter;
    let query;
    if(filter) {
        query = sqlQueries.queries.search_stockItems_filtered;
        dbFunctions.executeQuery(query, '%'+filter+'%', (sqlResObj)=>{
            sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
            responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
        });
    }
    else {
        query = sqlQueries.queries.search_stockItems;
        dbFunctions.executeQuery(query, null, (sqlResObj)=>{
            sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
            responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
        });
    }
}

exports.getStockItem = function getStockItem(req, res) {
    // params = req.params.id;
    // dbFunctions.executeQuery(sqlQueries.queries.search_stockGroup, params, (sqlResObj)=>{
    //     sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
    //     responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    // });
}

exports.modifyStockQuantity = function modifyStockQuantity(req, res) {
    let params = JSON.parse(JSON.stringify(req.body));
    let query = ''
    if (params.action == "i") {
        query = sqlQueries.queries.increase_stock;
    }
    else if (params.action == "d"){
        query = sqlQueries.queries.decrease_stock;
    }
    else {
        query = '';
    }
    params = [params.qty, params.action, params.reason, params.modified_by, params.inv_id];
    dbFunctions.executeQuery(query, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}