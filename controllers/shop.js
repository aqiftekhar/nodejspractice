const Product = require('../models/Product');
const Cart = require('../models/Cart');
//const SequelizeProducts = require('../models/SequelizeProducts');
exports.getProducts = (req,res,next)=>{

    Product.findAll().then(products => {
        res.render('shop/product-list', {
            prod : products, 
            pageTitle: 'All Products', 
            urlPath: '/products'
        });
    }).catch(error => {
        console.log(error);
    });
}

exports.getProductById = (req, res, next) => {
    const productId = req.params.productId;

    Product.findByPk(productId).then(product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title + ' | Details',
            urlPath: '/products'

        })
    }).catch(error => {
        console.log(error);
    });
}

exports.getIndex = (req, res, next) => {
    Product.findAll().then(products => {
        console.log(products);
        res.render('shop/index', {
            prod : products, 
            pageTitle: 'Shop', 
            urlPath: '/'
        });
    }).catch(error => {
        console.log(error);
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        urlPath: '/orders',
        pageTitle: 'Your Ordes'
    });
}

exports.getCart = (req, res, next) => {
    req.user.getCart()
    .then(cart => { 
        return cart
        .getProducts()
        .then(products => {
                res.render('shop/cart', {
                urlPath: '/cart',
                pageTitle: 'Your Car',
                products: products
            }); 
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));

}

exports.AddToCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.findProductById(productId, (product) => {
        Cart.addProductToCart(productId, product.productPrice);
    })
    res.redirect('/cart');
}

exports.getCheckout = (req, res, next) => {
    res.render('/shop/checkout'), {
        urlPath: '/checkout',
        pageTitle: 'Checkout'
    }
}

exports.postCartDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.findProductById(productId, (product) => {
        //console.log("\n\n",product);
        Cart.deleteProduct(productId, product.productPrice);
        res.redirect('/cart');
    })
}
