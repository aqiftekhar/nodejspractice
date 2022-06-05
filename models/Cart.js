const { Sequelize } = require('sequelize');

const sequelize = require('../utils/Sequelizedb');

const Cart = sequelize.define('Cart', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})
module.exports = Cart;