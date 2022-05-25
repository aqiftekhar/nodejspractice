const { redirect } = require('express/lib/response');
const Product = require('../models/Product');

exports.getAddProducts = (req, res, next)=>{

    res.render('admin/edit-product', {
        pageTitle: 'Add New Product', 
        urlPath: '/admin/add-product',
        editing: false
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

exports.getEditProducts = (req, res, next)=>{
    console.log('Started getEditProducts');
    const editMode  = req.query.edit;
    if (!editMode) {
        //console.log('EditMode = ',editMode);
        return redirect('/');
    }
    const prodId = req.params.productId;
    Product.findProductById(prodId, product => {
        //console.log(product);
        //console.log(prodId);
        if (!product) {
            return redirect('/');
        }

        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', 
            urlPath: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    })

};

exports.getProducts = (req, res, next) => {
    Product.getAll( products => {
        res.render('admin/products', {
            prod : products, 
            pageTitle: 'All Products', 
            urlPath: '/admin/products'
        });
    });
}