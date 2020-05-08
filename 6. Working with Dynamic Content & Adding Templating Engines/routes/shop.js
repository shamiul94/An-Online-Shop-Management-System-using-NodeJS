const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.render() will look for shop.pug in the views folder because it was defined as
    // default html source folder in app.js.
    res.render("shop", {
        prods: adminData.products,
        name: "Book Shop",
        path: "/",
    });
});

module.exports = router;