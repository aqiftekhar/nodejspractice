const express = require('express');
const path = require('path');

const root = require('../helper/path');

const router = express.Router();

// /amdin/users => GET
router.get('/products',(req, res, next)=>{
    res.sendFile(path.join(root, 'views','products.html'));
});
// /admin/users => POST
router.post('/products',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;