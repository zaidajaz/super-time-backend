const dbFunctions = require('../../shared.module/generic.handlers/dbFunctions');
const sqlQueries = require('../constants/sqlQueries');
const sqlErrHandler = require('../../shared.module/errorhandlers/sqlerrorhandlers');
const responseHandler = require('../../shared.module/generic.handlers/response.handler');
stockGroups = [];

exports.addStockGroup = function addStockGroup (req, res){
    let params = JSON.parse(JSON.stringify(req.body)).names;
    let query = '';
    params.forEach(element=> {
        query += sqlQueries.queries.insert_stockGroup;
    });
    dbFunctions.executeQuery(query, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}

exports.updateStockGroup = function updateStockGroup(req, res) {
    let name = JSON.parse(JSON.stringify(req.body)).name;
    let id = req.params.id;
    let params = [name, id];
    dbFunctions.executeQuery(sqlQueries.queries.update_stockGroup, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}

exports.deleteStockGroup = function deleteStockGroup(req, res) {
    let ids = JSON.parse(JSON.stringify(req.body)).ids;
    let query = '';
    ids.forEach(element=>{
        query += sqlQueries.queries.delete_stockGroup;
    });
    dbFunctions.executeQuery(query, ids, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}

exports.getStockGroups = function getStockGroups(req, res) {
    dbFunctions.executeQuery(sqlQueries.queries.searchall_stockGroup, null, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}

exports.getStockGroup = function getStockGrou(req, res) {
    params = req.params.id;
    dbFunctions.executeQuery(sqlQueries.queries.search_stockGroup, params, (sqlResObj)=>{
        sqlResponse = sqlErrHandler.handleSqlError(sqlResObj);
        responseHandler.sendResponse(res, sqlResponse.messages, sqlResponse.response, sqlResponse.valid);
    });
}