const express = require('express');
const app = express();

var router = require('./src/app.routing');
app.use('/',router);

console.log('listening on 3000...')
app.listen(3000);