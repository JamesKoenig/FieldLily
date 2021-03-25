const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/User");
const loadSeedFile = require("./seedfile_parse");
const dropModelCollection = require("./drop_model");

function seedUsers() {
  let userData = loadSeedFile("user.json");
  return dropModelCollection(User)
    .then( () =>
      Promise.all(
        userData.map( user =>
          seedUser(user)
        )
      )
    )
}

function dropUsers() {
  return User.find().then( users=> {
    console.log("dropping existing users collection");
    if(users.length > 0) {
      return User.collection.drop();
    } else {
      console.log("empty users db, no need to drop");
      return Promise.resolve();
    } })
}

function seedUser(user) {
  console.log(`seeding user: ${user.email}`);
  return bcrypt.genSalt(10)
    .then( salt =>
      bcrypt.hash(user.password, salt))
    .then( hash =>
      ({
        ...user,
        password: hash,
      }))
    .then( userObj => {
      const userRec = new User(userObj);
      return userRec.save();
    })
}

module.exports = seedUsers;
