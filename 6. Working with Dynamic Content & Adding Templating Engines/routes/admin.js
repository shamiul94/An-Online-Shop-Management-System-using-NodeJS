const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.use("/add-product", (req, res, next) => {
    // res.send('<form action="/admin/product" method="post"><input type="text" name="title"><button type="submit">send</button></form>');
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product", {
        pagetitle: "Awesome product",
        path: "/admin/add-product",
    });
});

// app.use('/product', (req, res, next) => {
// app.get(..) -> works for get requests.
router.post("/product", (req, res, next) => {
    // works only for post requests.
    products.push({ title: req.body.title });
    console.log(req.body);
    res.redirect("/");
});

exports.routes = router;
exports.products = products;