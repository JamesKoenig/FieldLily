const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateHabitInput = require('../../validation/habits');


const Habit = require('../../models/Habit');

router.get('/', (req, res) => {
    Habit.find()
        .sort({ date: -1 })
        .then(habits => res.json(habits))
        .catch(err => res.status(404).json({ nohabitsfound: 'No habits found' }));
});

router.get(
  "/currentUser",
  passport.authenticate('jwt', {session: false }),
  (req, res) => {
    Habit.find( { user: req.user.id })
      .then(  habits => res.json(habits))
      .catch( err    => res.status(402)
                           .json({ nocurrentuser: "no current user" })
            )
  }
);

router.get('/:id', (req, res) => {
    Habit.findById(req.params.id)
        .then(habit => res.json(habit))
        .catch(err =>
            res.status(404).json({ nohabitfound: 'No habit found with that ID' })
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
  
      newHabit.save().then(habit => res.json(habit));
    }
  );

  router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Habit.findById(req.params.id).then((habit) => {
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
        Habit.findOneAndRemove({
            _id: req.params.id
        })
        .then(habit => {
            res.json(habit);
        })
        .catch(err => res.status(404).json({nohabitFound: "No habit with that ID"}));
    }
);

module.exports = router;
