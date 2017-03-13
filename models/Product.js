var db = require('../dbConn');

var Product = {
    getAllProducts: function (callback) {
        return db.query('select * from fryproducts', callback);
    },
    getProductById: function (id, callback) {
        return db.query('select * from fryproducts where productid=?', [id], callback);
    },
    addProduct: function (Product, callback) {
        return db.query('insert into fryproducts values(?,?,?)', [Product]);
    },
    deleteProduct: function (id, callback) {
        return db.query('delete from fryproducts where productid=?', [id], callback);
    },
    updateProduct: function (id, Product, callback) {
        return db.query('update fryproducts set sku=?,cost=? where productid=?', [Product.sku, Product.cost], id, callback);
    }
};

module.exports = Product;
