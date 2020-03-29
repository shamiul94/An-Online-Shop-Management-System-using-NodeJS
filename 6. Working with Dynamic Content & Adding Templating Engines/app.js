// const http = require('http');
const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');

const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug'); // from doc.
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(rootDir, 'public')));

// order matters for next two lines.
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
