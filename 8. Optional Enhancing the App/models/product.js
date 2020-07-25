const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const cartPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      // console.log(JSON.parse(fileContent));
      cb(JSON.parse(fileContent));
    }
  });
};

const getCartFromFile = (cb) => {
  fs.readFile(cartPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  addToCart() {
    getCartFromFile((products) => {
      console.log("adding to cart: "); 
      console.log(this.title); 
      products.push(this);
      fs.writeFile(cartPath, JSON.stringify(products), (err) => {
        console.log(error);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchCart(cb) {
    getCartFromFile(cb); 
  }
};
