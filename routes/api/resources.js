const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateResourceInput = require('../../validation/resources');
const Resource = require('../../models/Resource');

router.get('/', (req, res) => {
    Resource.find()
        .sort({ date: -1 })
        .then(resources => res.json(resources))
        .catch(err => res.status(404).json({ noresourcesfound: 'No resources found' }));
});


router.get('/:id', (req, res) => {
    Resource.findById(req.params.id)
        .then(resource => res.json(resource))
        .catch(err =>
            res.status(404).json({ noresourcefound: 'No resource found with that ID' })
        );
});

router.get('/habits/:habit_id', (req, res) => {
    Resource.find({habit: req.params.habit_id})
        .sort({ date: -1 })
        .then( resources => { res.json(resources) })
        .catch( err =>
            res.status(404).json({
                nohabitfound: 'No habit found with that ID'
            })
        );
});

router.post('/habits/:habit_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const resource = {
        title: req.body.title,
        description: req.body.description,
        habit: req.params.habit_id
      };
      const { errors, isValid } = validateResourceInput(resource);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newResource = new Resource(resource);

      newResource.save().then(resource => res.json(resource));
    }
);

router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Resource.findById(req.params.id).then((resource) => {
            if (resource) {
                Habit.findById(resource.habit).then((habit) => {
                    if (habit.user != req.user.id){
                        res.status(404).json({ wronguser: 'can only be updated by owner' });
                    }else{
                        if (req.body.title) {
                            resource.title = req.body.title;
                        }

                        if (req.body.description) {
                            resource.description = req.body.description;
                        }
                        resource.save().then((resource) => res.json(resource));
                    }
                })
            } else {
                res.status(404).json({ noresourcefound: 'No resource with that ID' });
            }
        });
    }
);

router.delete("/:id",  
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Resource.findById(req.params.id).then((resource) => {
            if (resource) {
                Habit.findById(resource.habit).then((habit) => {
                    if (habit.user != req.user.id){
                        res.status(404).json({ wronguser: 'can only be deleted by owner' });
                    }else{
                        resource.delete().then((resource) => res.json(resource));   
                    }
                })
            } else {
                res.status(404).json({ noresourcefound: 'No resource with that ID' });
            }
        });
    }   
);



module.exports = router;
