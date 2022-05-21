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
    constructor(productName){
        this.productName = productName;
    }

    save = () => {
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
