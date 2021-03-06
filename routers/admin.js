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

// /amdin/add-products => POST
router.post('/add-product', adminController.postAddNewProducts);

// /amdin/edit-products => GET
router.get('/edit-product/:productId', adminController.getEditProducts);

router.post('/edit-product', adminController.postEditProducts);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;