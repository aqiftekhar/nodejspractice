const express = require('express');

const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use('/',(req, res, next)=>{
    next();
})

app.use('/users',(req,res,next)=>{
    res.send('<form action="/addUser" method="POST"><input type="text" name="username"/><button type="submit">Add User</button></form>');
});
//Instead of app.use, we should use http verbs i.e. app.post/app.get
app.post('/addUser',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1> Hello Express JS </h1>'); 
});

app.listen(3000);