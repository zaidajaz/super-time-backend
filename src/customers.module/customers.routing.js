const express = require('express');
const stockRouter = express.Router();
const controllers = require('./controllers/index');

//Controllers for Stock Item Management
stockRouter.post('/create', controllers.addCustomer);
stockRouter.get('/search', controllers.getCustomers);
stockRouter.get('/search/:id', controllers.getCustomer);
stockRouter.put('/edit/:id', controllers.updateStockItem);
stockRouter.delete('/delete/', controllers.deleteStockItem);

module.exports = stockRouter;