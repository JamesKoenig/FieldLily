const express = require("express");
const router = express.Router();
const passport = require('passport');

const Like = require("../../models/Like");

router.get("/currentUser",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Like.find({ userId: req.user.id })
      .then(likes => {
        likesObj = {byResourceId: {},  byHabitId: {}, byLikeId: {} };
        likes.forEach( like => {
          if(like.habitId) {
            likesObj.byHabitId[like.habitId] = like._id;
          } else if(like.resourceId) {
            likesObj.byResourceId[like.resourceId] = like._id;
          }
          likesObj.byLikeId[like._id] = like;
        })
        return likesObj;
      })
      .then( likesObj =>
        res.json(likesObj))
  }
);

const _entityResponse = idKey => (req, res) => {
  Like.find({ [idKey]: req.params.id })
    .then(likes => {
      likesObj = { byUserId: {}, byLikeId: {} };
      likes.forEach( like => {
        likesObj.byUserId[like.userId] = like._id;
        likesObj.byLikeId[like._id] = like;
      })
      return likesObj;
    })
    .then( likesObj =>
      res.json(likesObj))
}

router.get("/habits/:id", _entityResponse("habitId"));

router.get("/resources/:id",_entityResponse('resourceId'));

module.exports = router;
