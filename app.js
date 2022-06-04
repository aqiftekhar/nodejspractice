const express = require('express');
const path = require('path');

const sequelize = require('./utils/Sequelizedb');
const Product = require('./models/Product');
const User = require('./models/Users');

const adminRoutes = require('./routers/admin');
const shopRouters = require('./routers/shop');

const PageNotFoundController = require('./controllers/PageNotFound');

const app = express();
app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname, 'public')));

//mysql.execute('SELECT * FROM MY_TABLE');

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(error => console.log(error));
    
});

app.use('/',(req, res, next)=>{
    next();
})

app.use('/admin', adminRoutes);
app.use(shopRouters);

app.use(PageNotFoundController.PageNotFound);

Product.belongsTo(User, {constraints : true, OnDelete : 'CASCADE'});
User.hasMany(Product);

//Create Tables/ Sync Database using Sequelize
// sequelize.sync({force : true}).then(result => {
    //console.log(result);

sequelize.sync()
.then(result => {
    return User.findByPk(1);
}).then(user => {
    if (!user) {
        user = User.create({UserName: "Aqdas", email: "aqdas@test.com"});
        console.log(user);
        return user;
    }
    return user;
}).then(user => {
    console.log(user);
    app.listen(3000);
})
.catch(error => {
    console.log(error);
});

