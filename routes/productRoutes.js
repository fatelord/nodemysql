var express = require('express');
var router = express.Route();

var Product = require('../models/Product');


//find a product by id or find all products
router.get('/:id', function (req, res, next) {
    if (req.params.id) {
        Product.getProductById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }else{
        Product.getAllProducts(function (err, rows) {
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        })
    }
});

//handle the product addition

//handle the product deletion