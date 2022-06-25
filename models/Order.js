const { Sequelize } = require('sequelize');

const sequelize = require('../utils/Sequelizedb');

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
})

module.exports = Order