//const http = require('http');

const express = require('express');

const app = express();

//add Request middlewhere
app.use((req,res,next)=>{
console.log("in the middlewhare");
next(); // allow the request to continue to the next middleware in the line
});

app.use((req,res,next)=>{
    console.log("in the another middlewhare");
    res.send('<h1> Hello Express JS </h1>'); //Send response using middlewhare
});

//const server = http.createServer(app); //We don't need to create sever because express listen function does this for us.

app.listen(3000);