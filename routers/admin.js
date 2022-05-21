const express = require('express');
const path = require('path');

const root = require('../utils/path');

const router = express.Router();

const products = [];

// /amdin/users => GET
router.get('/products',(req, res, next)=>{

    res.render('products', {
        pageTitle: 'New Product', 
        urlPath: '/admin/products'
    });
});

router.post('/products',(req, res, next)=>{

    products.push({
        productName: req.body.productName
    });

    res.redirect('/');
});
exports.router = router;
exports.products = products;