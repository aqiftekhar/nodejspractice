const Product = require('../models/Product');
const Cart = require('../models/Cart');
//const SequelizeProducts = require('../models/SequelizeProducts');
exports.getProducts = (req,res,next)=>{

    // SequelizeProducts.findAll()
    // .then((products) => {
    //     res.render('shop/product-list', {
    //         prod : products, 
    //         pageTitle: 'All Products', 
    //         urlPath: '/products'
    //     });
    // })
    // .catch(error => {
    //     console.log(error);
    // });

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
    Cart.getAllCartProducts(cart => {
        Product.getAll(products => {
            const cartProducts = [];
            for (const product of products) {
                const cartProductData = cart.products.find(prod=>prod.id === product.id);
                if (cartProductData) {
                    cartProducts.push({productData: product, quantity: cartProductData.quantity });
                }
            }
            res.render('shop/cart', {
                urlPath: '/cart',
                pageTitle: 'Your Car',
                products: cartProducts
            });
        })
    })

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
