const express = require("express");
const router = express.Router();
const passport = require('passport');

const Like = require("../../models/Like");
const Habit = require("../../models/Habit");
const Resource = require("../../models/Resource");

const {
  resFromArr,
  resFromObj,
} = require("./utils");

/* these next two functions are pretty hard on my eyes but I have no idea  *
 * how I'd refactor them currently...                                      */
router.get("/currentUser",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Like.find({ userId: req.user.id })
      .then(likes => {
        likesObj = { byResourceId: {}, byHabitId: {}, byLikeId: {} };
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

function _updateResourceLikesCount(resourceId) {
  return Resource.findById(resourceId).then( resource =>
    Like.count({resourceId}).then( count => {
      resource.totalLikes = count;
      return resource.save();
    })
  )
}

const _genErr = (status, description) =>
  ({ status, description })

const _metaInfo = {
  "habits": [ Habit, "habit" ],
  "resources": [ Resource, "resource" ],
}

function _postEntityLike(req, res) {
  const [ Model, entityName ] = _metaInfo[req.params.resourceType];
  const entityKey = `${entityName}Id`;
  const { id: entityId } = req.params;
  const { id: userId }   = req.user;

  if(!Model)
    return res.status(404).send(`invalid path: ${req.originalUrl}`);

  return Like.findOne({[entityKey]: entityId, userId})
    .then( like => {
      if(like)
        throw _genErr(409, `you have already liked this ${entityName}`);
    })
    .then( () =>
      Model.findById(entityId))
    .then( entity => {
      if(!entity)
        throw _genErr(404, `No ${entityName} found with that ID`);
      return entity;
    })
    .then( entity => {
      const newLike = new Like({
        userId,
        [entityKey]: entityId,
      })
      return newLike.save()
        .then( like =>
          Like.count({ [entityKey]: entityId })
            .then( count => {
              entity.totalLikes = count;
              return entity.save();
            })
            .then( () => res.json(resFromObj(like)))
        )
    })
    .catch( error => {
      const { status, description } = error || { undefined, undefined };
        if(status)
          return res.status(status).json(description);
        console.log("SENDING THE USER A 500 ERROR, INFO FOLLOWS:");
        console.log(error);
        return res.status(500).send("SOMETHING WENT WRONG");
      })
}

router.post("/:resourceType/:id/",
  passport.authenticate('jwt', {session: false }),
  _postEntityLike
);

function _deleteEntityLike(req, res) {
  const [ Model, entityName ] = _metaInfo[req.params.resourceType];
  const entityKey = `${entityName}Id`;
  const { id: entityId } = req.params;
  const { id: userId }   = req.user;

  if(!Model)
    return res.status(404).send(`invalid path: ${req.originalUrl}`);

  Like.findOneAndDelete({
    userId,
    [entityKey]: entityId,
  })
    .then( like => {
      if(!like) throw _genErr(404, `you have not liked that ${entityName}`);
      return Like.count({ [entityKey]: entityId })
        .then( count =>
          Model.findById(entityId).then( entity => {
            entity.totalLikes = count;
            return entity.save();
          })
        )
        .then( () => res.json(resFromObj(like)))
    })
    .catch( error => {
      const { status, description } = error || { undefined, undefined };
        if(status)
          return res.status(status).json(description);
        console.log("SENDING THE USER A 500 ERROR, INFO FOLLOWS:");
        console.log(error);
        return res.status(500).send("SOMETHING WENT WRONG");
      })
}

router.delete("/:resourceType/:id/",
  passport.authenticate('jwt', {session: false }),
  _deleteEntityLike
);

module.exports = router;
