const { Sequelize } = require('sequelize');

const sequelize = require('../utils/Mongodb');

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
})

module.exports = Order