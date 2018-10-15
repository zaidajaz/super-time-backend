const express = require('express');
const app = express();

var router = require('./src/app.routing');
app.use('/',router);

app.listen(3000);