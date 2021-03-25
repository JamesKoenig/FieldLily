const bcrypt = require("bcryptjs");
const loadSeedFile = require("./seedfile_parse");
const mongoose = require("mongoose");
const User = require("../models/User");

function seedUsers() {
  let userData = loadSeedFile("user.json");
  let user;
  return User.find().then( users=> {
    if(users.length > 0) {
      console.log("dropping existing users collection");
      return User.collection.drop();
    } else {
      console.log("empty users db, no need to drop");
      return Promise.resolve();
    } })
    .then( () => {
      console.log("seeding user");
      user = userData[0]; })
    .then(() =>
      bcrypt.genSalt(10))
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
