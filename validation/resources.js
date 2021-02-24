const Validator = require('validator');
const validText = require('./valid-text');
const Habit = require('../models/Habit');

module.exports = function validateResourceInput(data) {
  let errors = {};
  

  data.description = validText(data.description) ? data.description : '';
  data.title = validText(data.title) ? data.title : '';
  data.habit = validText(data.habit) ? data.habit : '';


  if (Validator.isEmpty(data.description)) {
    errors.description = 'description field is required';
  }

  if (Validator.isEmpty(data.title)) {
    errors.description = 'title field is required';
  }

  if (!Habit.findById(habit_id)) {
    errors.description = 'invalid habit ID'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
