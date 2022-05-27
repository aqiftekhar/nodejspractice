const express = require('express');
const path = require('path');

//const mysql = require('./utils/mysqldb');

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

app.use('/',(req, res, next)=>{
    next();
})

app.use('/admin', adminRoutes);
app.use(shopRouters);

app.use(PageNotFoundController.PageNotFound);

app.listen(3000);