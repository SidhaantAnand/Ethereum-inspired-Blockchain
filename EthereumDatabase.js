var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ethereum";


// This connects to the Ethereum database on MongoDB. The name of the database is ethereum
function connectToDatabase() {
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
}

// This create a new user
function createNewUser(username) {

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ethereum");
  dbo.createCollection(username, function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
}

// This adds content to the user as a json
function addToUser(objToAdd,username) {
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ethereum");
  dbo.collection(username).insertOne(objToAdd, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
}

var databaseObject = {
	connectToDatabaseExport : connectToDatabase,
	createNewUserExport : createNewUser,
	addToUserExport : addToUser
};

module.exports = databaseObject;