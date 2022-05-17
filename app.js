const express = require('express');

const adminRouts = require('./routers/admin');
const shopRouters = require('./routers/shop');

const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use('/',(req, res, next)=>{
    next();
})

app.use('/admin',adminRouts);
app.use(shopRouters);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page nor found</h1>');
});

app.listen(3000);