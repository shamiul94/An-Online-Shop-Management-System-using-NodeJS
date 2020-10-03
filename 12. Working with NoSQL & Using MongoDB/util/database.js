const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const uri =
  "";

let _db;

const mongoConnect = (callback) => {
  mongoClient
    .connect(uri)
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }

  throw "No DB Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
