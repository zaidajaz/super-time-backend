exports.queries = {
    insert_stockGroup: 'INSERT INTO stock_group VALUES (NULL, ?);',
    update_stockGroup: 'UPDATE stock_group SET name = ? WHERE id = ?;',
    delete_stockGroup: 'DELETE FROM stock_group WHERE id = ?;',
    searchall_stockGroup: 'SELECT * FROM stock_group;',
    search_stockGroup: 'SELECT * FROM stock_group where id = ?;'
}