const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json());

var router = require('./src/app.routing');
app.use('/',router);


console.log('listening on 3000...')
app.listen(3000);