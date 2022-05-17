const express = require('express');

const adminRouts = require('./routers/admin');
const shopRouters = require('./routers/shop');

const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use('/',(req, res, next)=>{
    next();
})

app.use(adminRouts);
app.use(shopRouters);

app.listen(3000);