const express = require('express');
var router = express.Router();

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});

var stockRouter = require('./stock.module/stock.routing');
var customersRouter = require('./customers.module/customers.routing');
var salesRouter = require('./sales.module/sales.routing');

router.use('/api/stock/', stockRouter);
router.use('/api/customers/', customersRouter);
router.use('/api/sales/', salesRouter);

module.exports = router;