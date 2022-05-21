const Product = require('../models/Product');

exports.getAddProducts = (req, res, next)=>{

    res.render('admin/add-product', {
        pageTitle: 'Add New Product', 
        urlPath: '/admin/add-product'
    });
};

exports.postAddNewProducts = (req, res, next)=>{
    let productName = req.body.productName;
    let imageUrl = req.body.imageUrl;
    let productDescription = req.body.productDescription;
    let productPrice = req.body.productPrice;

    const product = new Product(productName, imageUrl, productDescription, productPrice);
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