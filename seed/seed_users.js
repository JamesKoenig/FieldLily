const bcrypt = require("bcryptjs");
const loadSeedFile = require("./seedfile_parse");

const User = require("../models/User");

function seedUsers() {
  let usersData = loadSeedFile("user_seed.json");
  console.log(userData);
}

module.exports = seedUsers;
