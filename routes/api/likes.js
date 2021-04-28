const express = require("express");
const router = express.Router();
const passport = require('passport');

const Like = require("../../models/Like");
const Habit = require("../../models/Habit");
const Resource = require("../../models/Resource");

const _idKeys = {
  "habits": "habitId",
  "resources": "resourceId",
}

router.get("/:entityType/:id/",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { entityType, id: entityId } = req.params;
    const idKey = _idKeys[entityType];
    Like.findOne({ [idKey]: entityId, userId: req.user.id })
      .then(like =>
        res.json({
          [entityType]: {[entityId]: {_id: entityId, liked: !!like}}
        })
      );
    }
)

const _genErr = (status, description) =>
  ({ status, description })

const _metaInfo = {
  "habits": [ Habit, "habit" ],
  "resources": [ Resource, "resource" ],
}

function _postEntityLike(req, res) {
  const { entityType, id: entityId } = req.params;
  const [ Model, entityName ] = _metaInfo[entityType];
  const entityKey = `${entityName}Id`;
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
          .then( () =>
            res.json({
              [entityType]: {[entityId]: {_id: entityId, liked: !!like}}}
            )
          )
        )
    })
    .catch( error => {
      const { status, description } = error || {};
        if(status)
          return res.status(status).json(description);
        console.log("SENDING THE USER A 500 ERROR, INFO FOLLOWS:");
        console.log(error);
        return res.status(500).send("SOMETHING WENT WRONG");
      })
}

router.post("/:entityType/:id/",
  passport.authenticate('jwt', {session: false }),
  _postEntityLike
);

function _deleteEntityLike(req, res) {
  const { entityType, id: entityId } = req.params;
  const [ Model, entityName ] = _metaInfo[entityType];
  const entityKey = `${entityName}Id`;
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
        .then( () => res.json({
          [entityType]: { [entityId]: {_id: entityId, liked: false} }
        }))
    })
    .catch( error => {
      const { status, description } = error || {};
        if(status)
          return res.status(status).json(description);
        console.log("SENDING THE USER A 500 ERROR, INFO FOLLOWS:");
        console.log(error);
        return res.status(500).send("SOMETHING WENT WRONG");
      })
}

router.delete("/:entityType/:id/",
  passport.authenticate('jwt', {session: false }),
  _deleteEntityLike
);

module.exports = router;
