exports.queries = {
    //stock item queries
    insert_customer: 'INSERT INTO st_customers VALUES (?, ?, ?, ?, ?, sysdate(), ?, sysdate(),?);',
    update_customer: 'UPDATE st_customers SET name = ? WHERE id = ?;',
    delete_customer: 'DELETE FROM st_customers WHERE id = ?;',
    search_customers: 'SELECT * FROM st_customers;',
    search_customers_filtered: 'SELECT * FROM st_customers where cust_phone like ? or cust_name like ?;',
    search_customer: 'SELECT * FROM st_customers where cust_phone = ?;'
}