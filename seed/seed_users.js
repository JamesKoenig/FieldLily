const bcrypt = require("bcryptjs");
const loadSeedFile = require("./seedfile_parse");

const User = require("../models/User");

function seedUsers() {
  let userData = loadSeedFile("user.json");
  console.log(userData);
}

module.exports = seedUsers;
