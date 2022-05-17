const http = require('http');

const express = require('express');

const app = express();

//add Request middlewhere
app.use((req,res,next)=>{
console.log("in the middlewhare");
next(); // invoke next method to allow request to travel on next middleware in the line
});

app.use((req,res,next)=>{
    console.log("in the another middlewhare");
    next();
});

const server = http.createServer(app);

app.listen(3000);