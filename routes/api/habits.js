const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateHabitInput = require('../../validation/habits');
const {
  resFromArr,
  resFromObj,
} = require("./utils");

const Habit = require('../../models/Habit');
const Resource = require('../../models/Resource');
const Like = require('../../models/Like');

router.get('/', (req, res) => {
    Habit.find()
        .sort({ date: -1 })
        .then(habits => res.json(resFromArr(habits)))
        .catch( () =>
          res.status(404).json({ nohabitsfound: 'No habits found' }));
});

router.get(
  "/currentUser",
  passport.authenticate('jwt', {session: false }),
  (req, res) => {
    Habit.find( { user: req.user.id })
      .sort({ date: -1 })
      .then(  habits => res.json(resFromArr(habits)))
      .catch( () => res.status(402)
                           .json({ nocurrentuser: "no current user" })
            )
  }
);

router.get('/:id', (req, res) => {
    Habit.findById(req.params.id)
        .then(habit => res.json(resFromObj(habit)))
        .catch( () =>
            res.status(404)
              .json(
                {
                  nohabitfound: 'No habit found with that ID'
                }
              )
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateHabitInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newHabit = new Habit({
        title: req.body.title,
        user: req.user.id,
        description: req.body.description
      });
  
      newHabit.save().then(habit => res.json(resFromObj(habit)));
    }
  );

  router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Habit.findById(req.params.id).then((habit) => {
            if (habit) {
                if (habit.user != req.user.id){
                    res.status(401).json({ wronguser: 'Habits can only be updated by owner' });
                }else{
                    if (req.body.title) {
                        habit.title = req.body.title;
                    }

                    if (req.body.description) {
                        habit.description = req.body.description;
                    }
                    habit.save().then((habit) => res.json(resFromObj(habit)));
                }
                
            } else {
                res.status(404).json({ nohabitfound: 'No habit with that ID' });
            }
        });
    }
);


router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Habit.findByIdAndUpdate(req.params.id).then((habit) => {
            if (habit) {
                if (req.body.title) {
                    habit.title = req.body.title;
                }

                if (req.body.description) {
                    habit.description = req.body.description;
                }
                habit.save().then((habit) => res.json(habit));
            } else {
                res.status(404).json({ nohabitfound: 'No habit with that ID' });
            }
        });
    }
);



router.delete("/:id",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Habit.findById(req.params.id).then((habit) => {
            if (habit) {
                if (habit.user != req.user.id){
                    res.status(401).json({ wronguser: 'can only be deleted by owner' });
                } else {
                    Resource.deleteMany({habit: req.params.id}, function(err) {
                        if (err) {
                            res.send(err);
                        } else {
                          Like.deleteMany({habitId: req.params.id})
                            .then( () =>
                              habit.delete())
                            .then((habit) =>
                                res.json(resFromObj(habit)))
                            .catch( err => res.send(err) );
                        }
                    })
                }
            } else {
                res.status(404).json({ nohabitfound: 'No habit with that ID' });
            }
        })
    }
);


function _updateHabitLikesCount(habitId) {
  return Habit.findById(habitId).then( habit =>
    Like.count({habitId}).then( count => {
      habit.totalLikes = count;
      return habit.save();
    })
  )
}

const _genErr = (status, description) =>
  ({ status, description })

router.post("/:id/like",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { id: habitId } = req.params;
    const { id: userId }  = req.user;
    let _like = undefined;
    Like.findOne({habitId, userId})
      .then( like => {
        if(like)
          throw _genErr(409, "you have already liked this post");
      })
      .then(() => Habit.findById(habitId))
      .then( (habit) => {
        if(!habit) {
          throw {
            status: 404,
            description:
              { nohabitfound: "No habit found with that ID" }
          }
        } else {
          return habit;
        }})
      .then( habit => {
          const newLike = new Like({
            userId: req.user.id,
            habitId,
          });
          return newLike.save()
      })
      .then( like => {
        _like = like;
        return like
      })
      .then( () => _updateHabitLikesCount(habitId))
      .then( () => res.json(resFromObj(_like)) )
      .catch( (error) => {
        const { status, description } = error;
        console.log(error);
        if(status) { return res.status(status).json(description) }
        else { return res.send(error) }
      })
  }
);

router.delete("/:id/like",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { id: habitId } = req.params;
    Like.findOneAndDelete({
      userId: req.user.id,
      habitId,
    })
      .then( (like) => {
        if(!like) {
          throw _genErr(404, { noLikeFound: "user has not liked that habit" });
        } else {
          return res.json(resFromObj(like))
        }})
      .then(() => _updateHabitLikesCount(habitId))
      .catch( (error) => {
        const { status, description } = error || { undefined, undefined };
        if(status) { return res.status(status).json(description) }
        else { return res.send(error) }
      })
  }
);

module.exports = router;
