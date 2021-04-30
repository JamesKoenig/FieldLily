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
    },
    totalLikes: {
      type: Number,
      required: true,
      default: 0,
    }
  }, {
    timestamps: true,
  }
);

const Habit = mongoose.model('Habit', HabitSchema);
module.exports = Habit;
