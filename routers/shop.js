const express = require('express');
const path = require('path');

// const root = require("../utils/path");
// const admin = require('./admin');

const productsController = require('../controllers/Products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;