const bcrypt = require("bcryptjs");
const loadSeedFile = require("./seedfile_parse");

const User = require("../models/User");

async function seedUsers() {
  let userData = loadSeedFile("user.json");
  console.log("deleting existing users");
  User.deleteMany({ email: "" });

  console.log("adding users");
  prom = Promise.all(
    userData.map( userDatum => {
      //TODO: bcrypt passwords!!!!
      //user = new User(userDatum);
      //return user.save();
    })
  );
  await prom.resolve();
  console.log(prom);
}

module.exports = seedUsers;
