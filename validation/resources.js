const Validator = require('validator');
const validText = require('./valid-text');

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

  if (Validator.isEmpty(data.habit)) {
    errors.description = 'habit field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};