const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const uri =
  "mongodb+srv://shamiul94:rumon159357@cluster0.8zkho.mongodb.net/test?retryWrites=true&w=majority&ssl=true";

const mongoConnect = (callback) => {
  mongoClient.connect(uri)
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect; 

///////////////////////////////////
// const MongoClient = require("mongodb").MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the cA promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.ollection object
//   client.close();
// });
