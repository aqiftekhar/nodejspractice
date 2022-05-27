const Sequelize = require('sequelize');

const sequelize = new Sequelize('MY_DBNAME', 'ROOT_USER', 'ROOT_PASSWORD',{
    Dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;

