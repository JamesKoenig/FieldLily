const loadSeedFile = require("./seedfile_parse");

const User = require("../models/Habit");

function seedHabits() {
  let habitData = loadSeedFile("habit.json");
  console.log(habitData);
}

module.exports = seedHabits;
