const dbUri = require("../config/keys").mongoURI;
const mongoose = require("mongoose");

const seedUsers = require("./seed_users");
const seedHabits = require ("./seed_habits");
const seedResources = require("./seed_resources");

const User = require("../models/User");
const Habit = require("../models/Habit");
const Resource = require("../models/Resource");

function seed() {
  console.log("connected to MongoDB");
  seedUsers()
    .then( () =>
      seedHabits())
    .then( () =>
      seedResources())
    .catch( err => { throw err })
    .finally(() =>  process.exit())
}

mongoose.connect(dbUri, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error",console.error.bind(console, 'connection error:'));
db.once("open", seed);
