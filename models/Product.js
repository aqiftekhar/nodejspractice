const fs = require('fs');
const path = require('path');
const root = require('../utils/path');

const localpath = path.join(
    root,
    'data',
    'products.json'
);

const getProductsFromFile = callback => {

    fs.readFile(localpath, (error, contnet) => {
        if (error) {
            return callback([]);
        }
         callback(JSON.parse(contnet));
    })
};

class Product {
    constructor(productName, imageUrl, productDescription, productPrice){
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.productDescription = productDescription,
        this.productPrice = productPrice
    }

    save = () => {
        
        this.id=Math.random().toString();

        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(localpath, JSON.stringify(products), (error)=> {
                console.log(error);
            });
        });
    }

    static getAll = (callback) => {
        getProductsFromFile(callback);
    }
}

module.exports = Product;
