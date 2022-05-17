const express = require('express');

const app = express();

app.use('/',(req, res, next)=>{
    console.log("This always runs!!");
    next();
})

app.use('/products',(req,res,next)=>{
    console.log("in the Products");
    res.send('<h1>Hello From Producs</h1>');
});

app.use('/',(req,res,next)=>{
    console.log("in the Home");
    res.send('<h1> Hello Express JS </h1>'); 
});

app.listen(3000);