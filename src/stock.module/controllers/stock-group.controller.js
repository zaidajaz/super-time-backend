const dbCon = require('../../configurations/database.config');
stockGroups = [];

exports.addStockGroup = function addStockGroup (req, res){
    dbCon.connect();
    let query = 'INSERT INTO TEST_TABLE VALUES (NULL, ?)'
    let param = JSON.parse(JSON.stringify(req.body));
    param.forEach(element => {
        dbCon.query(query,element.name,function(err, rows, fields) {
            if(err) throw err;
            console.log('inserted');
        });
    });
    res.json('all products inserted');
    dbCon.end();
}

exports.getStockGroup = function getStockGroup(req, res) {
    id = req.params.id;
    let item = stockGroups.find((i) => i.id == id);
    if(item)
        res.json(item);
    else
        res.json('Item Not found');
}

exports.getStockGroups = function getStockGroups(req, res) {
    res.json(stockGroups);
}

exports.updateStockGroup = function updateStockGroup(req, res) {
    console.log('put method called');
    res.json('hello');
}

exports.deleteStockGroup = function deleteStockGroup(req, res) {
    console.log('delete method called');
    res.json('hello');
}