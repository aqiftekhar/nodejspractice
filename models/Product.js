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

module.exports = class Product {
    constructor(id, productName, imageUrl, productDescription, productPrice){
        this.id = id,
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.productDescription = productDescription,
        this.productPrice = productPrice
    }

    save = () => {
        getProductsFromFile(products => {
        if (this.id) {
            const existingProductIndex = products.findIndex(prod => prod.id === this.id);
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex] = this;
            fs.writeFile(localpath, JSON.stringify(updatedProducts), (error)=> {
                console.log(error);
            });
        } else{
            this.id=Math.random().toString();
            //console.log(this);
            products.push(this); //This object is null
            fs.writeFile(localpath, JSON.stringify(products), (error)=> {
                console.log(error);
            });
        }
        });
    }
    static deleteById(productId) {
        getProductsFromFile((products) => {
            const updatedProducts = products.filter(x=>x.id !== productId);
            fs.writeFile(localpath, JSON.stringify(updatedProducts), error => {
                
                if (!error) {
                    //delete 
                }
                console.log(error);
            });
        })    
    }
    static getAll = (callback) => {
        getProductsFromFile(callback);
    }

    static findProductById = ((productId, callback) => {
        getProductsFromFile((prod) => {
            const product = prod.find(x=>x.id === productId);
            callback(product);
        })
    })
}
