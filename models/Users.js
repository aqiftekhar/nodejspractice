const { Sequelize } = require('sequelize');

const sequelize = require('../utils/Sequelizedb');

const User = sequelize.define('Users', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true
    },
    UserName: Sequelize.STRING,
    email: Sequelize.STRING

});

module.exports = User;