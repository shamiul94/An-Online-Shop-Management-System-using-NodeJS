const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware.");
    next();
});


app.use((req, res, next) => {
    console.log("In another middleware.");
    // instead of setheader() and write() functions we use send()
    res.send('<h1>Another Middleware.</h1>')
});
/*
const server = http.createServer(app);
server.listen(3000);
--> this chunk of code can be replaced by app.listen()
--> this function actually does those things under the hood.
 */

app.listen(3000);