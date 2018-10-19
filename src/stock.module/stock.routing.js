const express = require('express');
const stockRouter = express.Router();
const controllers = require('./controllers/index');


stockRouter.post('/stockgroup', controllers.addStockGroup);
stockRouter.get('/stockgroup', controllers.getStockGroups);
stockRouter.get('/stockgroup/:id', controllers.getStockGroup);
stockRouter.put('/stockgroup/:id', controllers.updateStockGroup);
stockRouter.delete('/stockgroup/', controllers.deleteStockGroup);

module.exports = stockRouter;