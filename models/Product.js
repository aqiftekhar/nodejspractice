const products = [];

class Product {
    constructor(productName){
        this.productName = productName;
    }

    save = () => {
        products.push(this);
    }
    static getAll = () => {
        return products;
    }
}
module.exports = Product;
