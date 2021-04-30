const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  habitId: {
    type: Schema.Types.ObjectId,
    ref: "Habit",
  },
  resourceId: {
    type: Schema.Types.ObjectId,
    ref: "Resource",
  },
}, {
  timestamps: true,
});

LikeSchema.index({userId: 1, habitId: 1, resourceId: 1}, { unique: true });

const Like = mongoose.model('Like', LikeSchema);
module.exports = Like;
