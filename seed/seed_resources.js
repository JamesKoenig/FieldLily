const Resource = require("../models/Resource");
const Habit = require("../models/Habit");
const loadSeedFile = require("./seedfile_parse");
const dropModelCollection = require("./drop_model");

function seedResources() {
  let resourceData = loadSeedFile("resource.json");
  return dropModelCollection(Resource)
    .then( () =>
      Promise.all(
        resourceData.map( resource =>
          seedResource(resource)
        )
      )
    )
    .catch(err => { throw err });
}

function seedResource(resource) {
  console.log(`seeding ${resource.title}`);
  return Habit.findOne({title: resource.habitTitle})
    .then( habit =>
      ({
        ...resource,
        habit: habit._id,
      })
    )
    .then( resource => {
      delete resource.habitTitle;
      const resourceRecord = new Resource(resource);
      return resourceRecord.save();
    })
    .catch(err => { throw err });
}

module.exports = seedResources;
