const fs = require("fs");
const path = require("path");

function loadSeedFile(fileName) {
  data = fs.readFileSync(path.join(__dirname) + "/seedfiles/" + fileName, "utf8");
  return JSON.parse(data);
}

module.exports = loadSeedFile;
