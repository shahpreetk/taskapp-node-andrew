//  CRUD create, read, update, delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId

const { MongoClient, ObjectID } = require("mongodb");

// const id = new ObjectID();
// console.log(id.getTimestamp());

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("users").findOne(
      { _id: new ObjectID("603e1f2ac7e42d14073f0466") },
      (error, user) => {
        if (error) {
          return console.log("error");
        }
        console.log(user);
      }
    );
  }
);
