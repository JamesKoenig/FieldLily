const loadSeedFile = require("./seedfile_parse");
const dropModelCollection = require("./drop_model");

function seedMany(seedFileName, Model, seedItem) {
  console.log(`loading ${seedFileName}`);
  let data = loadSeedFile(seedFileName);
  return dropModelCollection(Model)
    .then( () =>
      Promise.all(
        data.map( datum =>
          seedItem(datum)
        )
      )
    )
}

module.exports = seedMany;
