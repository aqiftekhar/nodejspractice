const { Sequelize } = require('sequelize');

const sequelize = require('../utils/Sequelizedb');

const CartItem = sequelize.define('CartItem', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Quantity:Sequelize.INTEGER
})

module.exports = CartItem