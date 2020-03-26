const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("\'/\' middleware.");
    // instead of setheader() and write() functions we use
    // send()
    res.send('<h1>\'/\' Middleware.</h1>');
});

module.exports = router;