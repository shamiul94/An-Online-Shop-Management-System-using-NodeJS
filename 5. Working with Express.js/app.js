// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">send</button></form>');
});

// app.use('/product', (req, res, next) => {
// app.get(..) -> works for get requests.
app.post('/product', (req, res, next) => { // works only for post requests.
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log("\'/\' middleware.");
    // instead of setheader() and write() functions we use
    // send()
    res.send('<h1>\'/\' Middleware.</h1>');
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
