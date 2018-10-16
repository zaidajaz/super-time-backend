var stockGroups = [
    {
    id: 1,
    name: 'mobiles'
    },
    {
        id: 2,
        name: 'kitchen_appliances'
    }
]
exports.addStockGroup = function addStockGroup (req, res){
    let newID = stockGroups[stockGroups.length-1].id;
    stockGroups.push(req.body);
    res.json(stockGroups);
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