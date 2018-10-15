const express = require('express');
const stockRouter = express.Router();
const controllers = require('./controllers/index');


stockRouter.post('/addstockgroup', controllers.addStockGroup);

module.exports = stockRouter;