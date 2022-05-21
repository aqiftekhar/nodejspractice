const express = require('express');
const path = require('path');

const root = require('../utils/path');

const adminController = require('../controllers/admin');

const router = express.Router();

// const products = [];

// /amdin/add-products => GET
router.get('/add-product', adminController.getAddProducts);

// /amdin/products => GET
router.get('/products', adminController.getProducts);

// /amdin/edit-products => GET
router.post('/edit-product');

// /amdin/add-products => POST
router.post('/add-product', adminController.postAddNewProducts);

module.exports = router;