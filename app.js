const express = require('express');
const path = require('path');

const adminRouts = require('./routers/admin');
const shopRouters = require('./routers/shop');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use('/',(req, res, next)=>{
    next();
})

app.use('/admin',adminRouts);
app.use(shopRouters);

app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views','404.html'));
});

app.listen(3000);