const Product = require('../models/Product');

exports.getProducts = (req,res,next)=>{
    Product.getAll( products => {
        res.render('shop/product-list', {
            prod : products, 
            pageTitle: 'All Products', 
            urlPath: '/products'
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.getAll( products => {
        res.render('shop/index', {
            prod : products, 
            pageTitle: 'Shop', 
            urlPath: '/'
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        urlPath: '/cart',
        pageTitle: 'Your Car'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('/shop/checkout'), {
        urlPath: '/checkout',
        pageTitle: 'Checkout'
    }
}