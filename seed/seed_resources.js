const loadSeedFile = require("./seedfile_parse");

const Resource = require("../models/Resource");

function seedHabits() {
  let resourceData = loadSeedFile("resource.json");
  console.log(resourceData);
}

module.exports = seedHabits;
