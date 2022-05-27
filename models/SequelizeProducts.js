const Sequelize = require('sequelize');
const sequelize = require('../utils/SequelizeDb');
const sequelize = require('../utils/SequelizeDb');
const SequelizeProduct = require('./Product');

const sequelize = sequelize.define('product', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    productName: {
        type: Sequelize.STRING
    },
    productPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productDescription : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = SequelizeProduct