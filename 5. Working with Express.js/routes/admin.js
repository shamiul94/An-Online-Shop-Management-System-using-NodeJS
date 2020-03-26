const path = require('path');
const express = require('express');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/product" method="post"><input type="text" name="title"><button type="submit">send</button></form>');

    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// app.use('/product', (req, res, next) => {
// app.get(..) -> works for get requests.
router.post('/product', (req, res, next) => { // works only for post requests.
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;