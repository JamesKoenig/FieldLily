const dbUri = require("../config/keys").mongoURI;
const mongoose = require("mongoose");

const seedUsers = require("./seed_users");

function seed() {
  console.log("connected to MongoDB");
  seedUsers();
  process.exit();
}

mongoose.connect(dbUri, { userNewUrlParser: true } )

const db = mongoose.connection;
db.on("error",console.error.bind(console, 'connection error:'));
db.once("open", seed);
