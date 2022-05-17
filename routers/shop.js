const express = require('express');
const path = require('path');

const root = require("../utils/path");
const admin = require('./admin');

const router = express.Router();

router.get('/',(req,res,next)=>{
    // console.log(admin.products);
    // res.sendFile(path.join(root, 'views', 'shop.html')); 
    res.render('shop')
});
module.exports = router;