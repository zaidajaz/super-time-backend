const express = require('express');
var router = express.Router();

var stockRouter = require('./stock.module/stock.routing');

router.use('/api/stock/', stockRouter);

module.exports = router;