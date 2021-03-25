const Resource = require("../models/Resource");
const Habit = require("../models/Habit");
const seedMany = require("./seed_many");

function seedResources() {
  console.log("in seedResources");
  return seedMany("resource.json", Resource, seedResource);
}

function seedResource(resource) {
  console.log(`seeding resource: ${resource.title}`);
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
}

module.exports = seedResources;
