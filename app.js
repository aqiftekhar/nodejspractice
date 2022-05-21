const express = require('express');
const path = require('path');

const admin = require('./routers/admin');
const shopRouters = require('./routers/shop');

const app = express();
app.set('view engine', 'pug');
app.set('views','views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use('/',(req, res, next)=>{
    next();
})

app.use('/admin',admin.router);
app.use(shopRouters);

app.use((req, res, next)=>{
    //res.sendFile(path.join(__dirname, 'views','404.html'));
    res.status(404).render('404', {pageTitle: '404 | Page Not Found'});
});

app.listen(3000);