const express = require('express');
const stockRouter = express.Router();
const controllers = require('./controllers/index');

//Controllers for logging sales
stockRouter.post('/createsalesheader', controllers.newSaleHeader);
stockRouter.post('/addproducttobill', controllers.addItemsToBill);

module.exports = stockRouter;