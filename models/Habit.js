const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
  }
);

const Habit = mongoose.model('Habit', HabitSchema);
module.exports = Habit;
