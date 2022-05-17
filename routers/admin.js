const express = require('express');

const router = express.Router();

// /amdin/users => GET
router.get('/users',(req, res, next)=>{
    res.send('<form action="/admin/users" method="POST"><input type="text" name="username"/><button type="submit">Add User</button></form>');
});
// /admin/users => POST
router.post('/users',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;