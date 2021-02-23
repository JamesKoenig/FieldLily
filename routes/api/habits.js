const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Habit = require('../../models/Habit');

router.get('/', (req, res) => {
    Habit.find()
        .sort({ date: -1 })
        .then(habits => res.json(habits))
        .catch(err => res.status(404).json({ nohabitsfound: 'No habits found' }));
});

router.get('/user/:user_id', (req, res) => {
    Habit.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(habits => res.json(habits))
        .catch(err =>
            res.status(404).json({ nohabitsfound: 'No habits found from that user' }
        )
    );
});

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
        text: req.body.text,
        user: req.user.id
      });
  
      newHabit.save().then(habit => res.json(habit));
    }
  );

  module.exports = router;