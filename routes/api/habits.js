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

router.get("/:id", (req, res) => {
  Habit.findById(req.params.id)
    .then( habit =>
      new Promise( (resolve,reject) => {
        passport.authenticate('jwt', { session: false }, (err, user) => {
          if(err) reject(err);
          if(user) {
            Like.findOne({ habitId: req.params.id, userId: user.id })
              .then( like => {
                let retVal = habit.toJSON();
                if(like) {
                  Object.assign(retVal, {liked: true});
                  resolve(retVal);
                } else {
                  resolve(retVal);
                }
              })
          } else {
            resolve(habit.toJSON());
          }
        })(req)     /* passport.authenticate must be called explicitly if */
      })            /* used like this                                     */
    )
    .then( habit => { console.log(habit); return habit } )
    .then( habit => res.json(resFromObj(habit)))
    .catch( err => {
      //maybe more than 'habit not found' can go wrong here, so I'm logging
      //here for posterity... in case that happens
      console.log(`catch in GET /api/habits/${req.params.id}`);
      console.log(err);
      return res.status(404)
          .json({ nohabitfound: 'No habit found with that ID' })
    })
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

module.exports = router;
