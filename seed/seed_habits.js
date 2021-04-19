const User = require("../models/User");
const Habit = require("../models/Habit");
const seedMany = require("./seed_many");

function seedHabits() {
  console.log("in seedHabits");
  return seedMany("habit.json",Habit,seedHabit);
}

function seedHabit(habit) {
  console.log(`seeding habit: ${habit.title}`);
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
