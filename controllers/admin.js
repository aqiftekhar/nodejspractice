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

    // SequelizeProduct.create({
    //     productName: productName,
    //     productPrice: productPrice,
    //     imageUrl: imageUrl,
    //     productDescription: productDescription
    // }).then( result => {

    // }).catch(error => {

    // });

    const product = new Product(null, productName, imageUrl, productDescription, productPrice);
    product.save();
    res.redirect('/');
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
    //console.log('Started getEditProducts');
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

exports.postDeleteProduct = (req, res, next) => {
    //console.log('Req.Params : ', req.body);
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');
}