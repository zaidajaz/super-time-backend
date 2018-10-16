exports.addStockGroup = function addStockGroup (req, res){
    console.log('post method called')
    res.json('hello')
}

exports.getStockGroup = function getStockGroup(req, res) {
    console.log('get method called');
    res.json('hello');
}

exports.getStockGroups = function getStockGroups(req, res) {
    console.log('get all method called');
    res.json('hello');
}

exports.updateStockGroup = function updateStockGroup(req, res) {
    console.log('put method called');
    res.json('hello');
}

exports.deleteStockGroup = function deleteStockGroup(req, res) {
    console.log('delete method called');
    res.json('hello');
}