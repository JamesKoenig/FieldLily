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

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateResourceInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newResource = new Resource({
        title: req.body.title,
        description: req.body.description,
        habit: req.body.habit
      });
  
      newResource.save().then(resource => res.json(resource));
    }
  );

  module.exports = router;