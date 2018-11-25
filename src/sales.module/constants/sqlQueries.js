exports.queries = {
    //stock item queries
    insert_sale_header: 'INSERT INTO st_sales VALUES (NULL, ?, sysdate(),?);',
    addBillItems: 'INSERT INTO st_sale_line_items VALUES (NULL, ?, ?, ?, ?);',
}