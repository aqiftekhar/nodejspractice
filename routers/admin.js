const express = require('express');

const router = express.Router();

router.get('/users',(req, res, next)=>{
    res.send('<form action="/addUser" method="POST"><input type="text" name="username"/><button type="submit">Add User</button></form>');
});

router.post('/adduser',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;