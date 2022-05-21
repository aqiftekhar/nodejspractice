const Product = require('../models/Product');
const Products = require('../models/Product');

exports.getAddProducts = (req, res, next)=>{

    res.render('products', {
        pageTitle: 'New Product', 
        urlPath: '/admin/products'
    });
};

exports.postAddNewProducts = (req, res, next)=>{
    const product = new Product(req.body.productName);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    const products = Product.getAll();
    res.render('shop', {
        prod : products, 
        pageTitle: 'Shop', 
        urlPath: '/'
    });
}

