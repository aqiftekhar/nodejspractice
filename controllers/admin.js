const { redirect } = require('express/lib/response');
const Product = require('../models/Product');

// const SequelizeProduct = require('../models/SequelizeProducts');

exports.getAddProducts = (req, res, next)=>{

    res.render('admin/edit-product', {
        pageTitle: 'Add New Product', 
        urlPath: '/admin/add-product',
        editing: false
    });
};

exports.postAddNewProducts = (req, res, next)=>{
    
    let productName = req.body.title;
    let imageUrl = req.body.imageUrl;
    let productDescription = req.body.description;
    let productPrice = req.body.price;
    console.log(productName);
    console.log(imageUrl);
    console.log(productDescription);
    console.log(productPrice);

    Product.create({
        title: productName,
        price: productPrice,
        imageUrl : imageUrl,
        description: productDescription
    }).then(result => {
        console.log(result);
        res.redirect('/');
    }).catch(error => {
        console.log(error);
    });
    
}
exports.postEditProducts = (req, res, next) =>{
    console.log('postEditProducts');
    console.log(req.body);
    const productId = req.body.productId;
    const updatedProductName = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price;

    const updatedProduct = new Product(productId, updatedProductName, updatedImageUrl, updatedDescription, updatedPrice)
    updatedProduct.save();
    res.redirect('/admin/products');
    console.log(productId, ' ', updatedProductName);
}
exports.getEditProducts = (req, res, next)=>{
    const editMode  = req.query.edit;
    if (!editMode) {
        return redirect('/');
    }
    const prodId = req.params.productId;

    Product.findByPk(prodId).then(product => {
        if (!product) {
            return redirect('/');
        }

        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', 
            urlPath: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    }).catch(error => {
        console.log(error);
    });
};

exports.getProducts = (req, res, next) => {

    Product.findAll().then(products => {
        res.render('admin/products', {
            prod : products, 
            pageTitle: 'All Products', 
            urlPath: '/admin/products'
        });
    }).catch(error => {
        console.log(error);
    });
}

exports.postDeleteProduct = (req, res, next) => {
    //console.log('Req.Params : ', req.body);
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');
}