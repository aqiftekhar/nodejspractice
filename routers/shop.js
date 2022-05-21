const express = require('express');
const path = require('path');

const root = require("../utils/path");
const admin = require('./admin');

const router = express.Router();

router.get('/',(req,res,next)=>{

    const products = admin.products;

    res.render('shop', {
        prod : products, 
        pageTitle: 'Shop', 
        urlPath: '/'
    });
});

module.exports = router;