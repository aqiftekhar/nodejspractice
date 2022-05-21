const Product = require('../models/Product');

exports.getAddProducts = (req, res, next)=>{

    res.render('admin/add-product', {
        pageTitle: 'Add New Product', 
        urlPath: '/admin/add-product'
    });
};

exports.postAddNewProducts = (req, res, next)=>{
    const product = new Product(req.body.productName);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.getAll( products => {
        res.render('admin/products', {
            prod : products, 
            pageTitle: 'All Products', 
            urlPath: '/admin/products'
        });
    });
}