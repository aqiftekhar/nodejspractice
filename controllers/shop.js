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

exports.getProductById = (req, res, next) => {
    const productId = req.params.productId;
    Product.findProductById(productId, (product) => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.productName + ' | Details',
            urlPath: '/products'

        })
    })
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

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        urlPath: '/orders',
        pageTitle: 'Your Ordes'
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        urlPath: '/cart',
        pageTitle: 'Your Car'
    });
}

exports.AddToCart = (req, res, next) => {
    const productId = req.body.productId;
    console.log(productId);
    res.redirect('/cart');
}

exports.getCheckout = (req, res, next) => {
    res.render('/shop/checkout'), {
        urlPath: '/checkout',
        pageTitle: 'Checkout'
    }
}
