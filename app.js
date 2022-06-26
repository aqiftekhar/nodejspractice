const express = require('express');
const path = require('path');


// const adminRoutes = require('./routers/admin');
// const shopRouters = require('./routers/shop');
// const PageNotFoundController = require('./controllers/PageNotFound');
const mongoConnect = require('./utils/Mongodb');

const app = express();
app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname, 'public')));

//mysql.execute('SELECT * FROM MY_TABLE');

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use((req, res, next) => {
    // User.findByPk(1)
    // .then(user => {
    //     req.user = user;
    //     next();
    // })
    // .catch(error => console.log(error));
    
});

app.use('/',(req, res, next)=>{
    next();
})

// app.use('/admin', adminRoutes);
// app.use(shopRouters);

// app.use(PageNotFoundController.PageNotFound);

mongoConnect((client) => {
    console.log(client);
    app.listen(3000)
})