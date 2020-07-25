const path = require('path'); 
const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/cart', productsController.getCartProducts);

router.post('/cart', productsController.postAddToCart);

module.exports = router;
