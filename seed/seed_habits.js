const loadSeedFile = require("./seedfile_parse");
const User = require("../models/User");
const Habit = require("../models/Habit");
const dropModelCollection = require("./drop_model");

function seedHabits() {
  let habitData = loadSeedFile("habit.json");
  return dropModelCollection(Habit)
    .then( () =>
      Promise.all(
        habitData.map( habit =>
          seedHabit(habit)
        )
      )
    )
}

function seedHabit(habit) {
  console.log(`seeding ${habit.title}`);
  return User.findOne({email: habit.userEmail})
    .then( user =>
      ({
        ...habit,
        user: user._id,
      })
    )
    .then( habit => {
      delete habit.userEmail;
      const habitRec = new Habit(habit);
      return habitRec.save();
    })
}

module.exports = seedHabits;
