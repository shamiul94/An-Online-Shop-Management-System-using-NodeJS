const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.postAddToCart = (req, res, next) => {
  console.log(req); 
  const productToAdd = new Product(req.body.product_name);
  productToAdd.addToCart(); 
  res.redirect("/"); 
};

exports.getCartProducts = (req, res, next) => {
  Product.fetchCart((cartJSON) => {
    res.render("shop/cart", {
      prods: cartJSON,
      pageTitle: "Cart",
      path: "/cart",
      hasProducts: cartJSON.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
