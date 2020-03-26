// const http = require('http');
const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// order matters for next two lines.
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found.</h1>');
});

app.listen(3000);

// comments on previous version.
//
/** Dummy middle-wares.

 app.use((req, res, next) => {
    console.log("In the middleware.");
    next();
});


 app.use((req, res, next) => {
    console.log("In another middleware.");
    // instead of setheader() and write() functions we use send()
    res.send('<h1>Another Middleware.</h1>')
});

 */
/*
const server = http.createServer(app);
server.listen(3000);
--> this chunk of code can be replaced by app.listen()
--> this function actually does those things under the hood.
 */
