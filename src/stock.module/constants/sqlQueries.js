exports.queries = {
    insert_stockGroup: 'INSERT INTO stock_group VALUES (NULL, ?);',
    update_stockGroup: 'UPDATE stock_group SET name = ? WHERE id = ?;',
    delete_stockGroup: 'DELETE FROM stock_group WHERE id = ?;',
    searchall_stockGroup: 'SELECT * FROM stock_group;',
    search_stockGroup: 'SELECT * FROM stock_group where id = ?;',

    //stock item queries
    insert_stockItem: "INSERT INTO st_inventory VALUES (NULL, ?, 0, ?, sysdate(), ?, sysdate(), ?, 'c', 'Initial Creation');",
    update_stockItem: 'UPDATE st_inventory SET name = ? WHERE id = ?;',
    delete_stockItem: 'DELETE FROM st_inventory WHERE id = ?;',
    search_stockItems: 'SELECT * FROM st_inventory order by product_name;',
    search_stockItems_filtered: 'SELECT * FROM st_inventory where product_name like ?;',
    search_stockItem: 'SELECT * FROM st_inventory where id = ?;',

    //modify stock quantity
    increase_stock: 'UPDATE st_inventory SET product_qty = product_qty + ?,last_action = ?,reason = ?,modified_date = sysdate(),modified_by = ? where inv_id = ?',
    decrease_stock: 'UPDATE st_inventory SET product_qty = product_qty - ?,last_action = ?,reason = ?,modified_date = sysdate(),modified_by = ? where inv_id = ?',
}