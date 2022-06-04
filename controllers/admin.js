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
    
    let productName = req.body.title;
    let imageUrl = req.body.imageUrl;
    let productDescription = req.body.description;
    let productPrice = req.body.price;
    console.log(productName);
    console.log(imageUrl);
    console.log(productDescription);
    console.log(productPrice);

    req.user.createProduct({
        title: productName,
        price: productPrice,
        imageUrl : imageUrl,
        description: productDescription     
    }).then(result => {
        console.log(result);
        res.redirect('/admin/products');
    }).catch(error => {
        console.log(error);
    });

    // Product.create({
    //     title: productName,
    //     price: productPrice,
    //     imageUrl : imageUrl,
    //     description: productDescription
    //     //UserId: req.user.id --> One way to add user to Product
    // }).then(result => {
    //     console.log(result);
    //     res.redirect('/admin/products');
    // }).catch(error => {
    //     console.log(error);
    // });
    
}
exports.postEditProducts = (req, res, next) =>{
    console.log('postEditProducts');
    console.log(req.body);
    const productId = req.body.productId;
    const productTitle = req.body.title;
    const productImageUrl = req.body.imageUrl;
    const productDescription = req.body.description;
    const productPrice = req.body.price;

    Product.findByPk(productId).then(product => {
        product.title = productTitle;
        product.price = productPrice;
        product.description = productDescription;
        product.imageUrl = productImageUrl;
        return product.save();
    }).then(result => {
        console.log('UPDATED Sucessfully!');
        res.redirect('/admin/products');
    })
    .catch(error => {
        console.log(error);
    });
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
    const productId = req.body.productId;
    Product.findByPk(productId).then(product => {
        return product.destroy();
    }).then(result => {
        console.log('DELETED Successfully!');
        res.redirect('/admin/products');
    })
    .catch(error => {
        console.log(error);
    });
}