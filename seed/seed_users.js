const bcrypt = require("bcryptjs");
const loadSeedFile = require("./seedfile_parse");
const mongoose = require("mongoose");
const User = require("../models/User");

function seedUsers() {
  let userData = loadSeedFile("user.json");
  console.log("deleting existing users");
  mongoose.connection.collections["users"].drop();

  console.log("seeding users");
  const user = userData[0];
  console.log(userData[0]);
  return bcrypt.genSalt(10)
    .then( salt => {
      console.log(`received salt ${salt}`);
      return salt})
    .then( salt =>
      bcrypt.hash(user.password, salt))
    .then( hash => {
      console.log(`received hash ${hash}`);
      return hash; })
    .then( hash =>
      ({
        ...user,
        password: hash,
      }))
    .then( userObj => {
      console.log(userObj);
      return userObj;
    })
    .then( userObj => {
      const userRec = new User(userObj);
      return userRec.save();
    })
    .then( (arg) => {
      console.log(arg);
      return arg;
    })
}

module.exports = seedUsers;
