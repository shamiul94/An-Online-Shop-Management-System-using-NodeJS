// const http = require('http');
const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');

const bodyParser = require('body-parser');

const expressHandlebars = require('express-handlebars');

const app = express();

app.engine('hbs', expressHandlebars());
// app.set('view engine', 'pug'); // from doc. --> for pug 
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, 'public')));

// order matters for next two lines.
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {
        name: "ERROR 404"
    });
});

app.listen(3000);