const express = require('express');
const path = require('path');

const root = require('../utils/path');

const productsController = require('../controllers/Products');

const router = express.Router();

// const products = [];

// /amdin/users => GET
router.get('/products', productsController.getAddProducts);

router.post('/products', productsController.postAddNewProducts);

module.exports = router;