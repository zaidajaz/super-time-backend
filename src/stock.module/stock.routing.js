const express = require('express');
const stockRouter = express.Router();
const controllers = require('./controllers/index');


// stockRouter.post('/stockgroup', controllers.addStockGroup);
// stockRouter.get('/stockgroup', controllers.getStockGroups);
// stockRouter.get('/stockgroup/:id', controllers.getStockGroup);
// stockRouter.put('/stockgroup/:id', controllers.updateStockGroup);
// stockRouter.delete('/stockgroup/', controllers.deleteStockGroup);


//Controllers for Stock Item Management
stockRouter.post('/create', controllers.addStockItem);
stockRouter.get('/search', controllers.getStockItems);
stockRouter.get('/search/:id', controllers.getStockItem);
stockRouter.put('/edit/:id', controllers.updateStockItem);
stockRouter.delete('/delete/', controllers.deleteStockItem);

//Controllers to modify stock item quantity
stockRouter.post('/modifystockquantity', controllers.modifyStockQuantity);

module.exports = stockRouter;