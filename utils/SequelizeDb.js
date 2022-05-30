const Sequelize = require('sequelize');

const sequelize = new Sequelize('mydb','root','rootuser',  {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize; 