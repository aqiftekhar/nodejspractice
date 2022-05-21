const products = [];

exports.getAddProducts = (req, res, next)=>{

    res.render('products', {
        pageTitle: 'New Product', 
        urlPath: '/admin/products'
    });
};

exports.postAddNewProducts = (req, res, next)=>{

    products.push({
        productName: req.body.productName
    });

    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{

    res.render('shop', {
        prod : products, 
        pageTitle: 'Shop', 
        urlPath: '/'
    });
}

