const dbFunctions = require('../../shared.module/generic.handlers/dbFunctions');
const sqlQueries = require('../constants/sqlQueries');
const sqlErrHandler = require('../../shared.module/errorhandlers/sqlerrorhandlers');
stockGroups = [];

exports.addStockGroup = function addStockGroup (req, res){
    let param = JSON.parse(JSON.stringify(req.body));
    dbFunctions.executeQuery(sqlQueries.queries.insert_stockGroup, param.name, (obj)=>{
        if(obj.sqlErr) {
            res.json('SQL ERROR')
            console.log('SQL Error');
        }
        if(obj.conErr) {
            res.json('Connection Error');
            console.log('Connection Error');
        }
        if(obj.rows) {
            res.json('Success');
            console.log('Success');
        }
    });
}

exports.updateStockGroup = function updateStockGroup(req, res) {
    console.log('put method called');
    res.json('hello');
}

exports.deleteStockGroup = function deleteStockGroup(req, res) {
    console.log('delete method called');
    res.json('hello');
}