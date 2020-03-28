const path = require("path");
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("\'/\' middleware.");

    // way - 1 (won't work for windows) ***
    // res.sendFile(path.resolve('views/shop.html'));

    // way - 2 (works on all OS)***

    console.log(path.join(__dirname , 'views', 'shop.html'));

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    // res.send('<h1>\'/\' Middleware.</h1>');
});

module.exports = router;