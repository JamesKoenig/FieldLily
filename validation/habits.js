const Validator = require('validator');
const validText = require('./valid-text');



module.exports = function validateHabitInput(data) {
  let errors = {};
  

  data.description = validText(data.description) ? data.description : '';
  data.title = validText(data.title) ? data.title : '';


  if (!Validator.isLength(data.description, { min: 5, max: 250 })) {
    errors.description = 'Habit must be between 5 and 250 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'description field is required';
  }

  if (Validator.isEmpty(data.title)) {
    errors.description = 'title field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};