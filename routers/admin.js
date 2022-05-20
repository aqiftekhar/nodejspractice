const express = require('express');
const path = require('path');

const root = require('../utils/path');

const router = express.Router();

const products = [];

// /amdin/users => GET
router.get('/products',(req, res, next)=>{
    //res.sendFile(path.join(root, 'views','products.html'));
    res.render('products', {pageTitle: 'New Product'});
});
// /admin/users => POST
router.post('/products',(req, res, next)=>{
    console.log(req.body);
    products.push({productName: req.body.productName})
    res.redirect('/');
});
exports.router = router;
exports.products = products;