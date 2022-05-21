const fs = require('fs');
const path = require('path');
const root = require('../utils/path');

class Product {
    constructor(productName){
        this.productName = productName;
    }

    save = () => {
        const localpath = path.join(
            root,
            'data',
            'products.json'
        );

        fs.readFile(localpath, (error, content) => {
            let products = [];
            if (!error) {
                products = JSON.parse(content);
            }
            products.push(this);
            fs.writeFile(localpath, JSON.stringify(products), (error)=> {
                console.log(error);
            });
        });
    }
    static getAll = (callback) => {
        const localpath = path.join(
            root,
            'data',
            'products.json'
        );
        fs.readFile(localpath, (error, contnet) => {
            if (error) {
                callback([]);
            }
             callback(JSON.parse(contnet));
        })
        // return products;
    }
}
module.exports = Product;
