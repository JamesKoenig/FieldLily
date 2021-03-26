const bcrypt = require("bcryptjs");
const User = require("../models/User");
const seedMany = require("./seed_many");

function seedUsers() {
  return seedMany("user.json",User,seedUser);
}

function seedUser(user) {
  console.log(`seeding ${user.email}`);
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
