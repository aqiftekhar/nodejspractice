const { Sequelize } = require('sequelize');

const sequelize = require('../utils/Mongodb');

const OrderItem = sequelize.define('OrderItem', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    quantity:Sequelize.INTEGER
})

module.exports = OrderItem