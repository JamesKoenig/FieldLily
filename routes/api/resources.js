const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateResourceInput = require('../../validation/resources');
const Resource = require('../../models/Resource');
const Habit = require("../../models/Habit");
const {
  resFromArr,
  resFromObj,
} = require("./utils");

router.get('/', (req, res) => {
    Resource.find()
        .sort({ date: -1 })
        .then(resources => res.json(resFromArr(resources)))
        .catch( () =>
          res.status(404).json({ noresourcesfound: 'No resources found' }));
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const resource = {
            title: req.body.title,
            description: req.body.description,
            habit: req.body.habitId,
            featured: req.body.featured
        };

        const { errors, isValid } = validateResourceInput(resource);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newResource = new Resource(resource);

        Habit.findById(resource.habit).then((habit) => {
            if (habit.user != req.user.id){
                res.status(401).json({ wronguser: 'Resource can only be added by owner' });
            }else{
                newResource.save().then(resource => res.json(resFromObj(resource)));
            }
        })
    }
);

router.get('/featured', (req, res) => {
    Resource.find({featured: true})
        .sort({ date: -1 })
        .then(resources => res.json(resFromArr(resources)))
        .catch( () => 
          res.status(404)
            .json({
              noresourcesfound: 'No featured resources found' 
            })
        );
});


router.get('/:id', (req, res) => {
    Resource.findById(req.params.id)
        .then(resource => res.json(resFromObj(resource)))
        .catch( () =>
            res.status(404).json({ noresourcefound: 'No resource found with that ID' })
        );
});

router.get('/habits/:habit_id', (req, res) => {
    Resource.find({habit: req.params.habit_id})
        .sort({ date: -1 })
        .then( resources => { res.json(resFromArr(resources)) })
        .catch( () =>
            res.status(404).json({
                nohabitfound: 'No habit found with that ID'
            })
        );
});

router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Resource.findById(req.params.id).then((resource) => {
            if (resource) {
                Habit.findById(resource.habit).then((habit) => {
                    if (habit.user != req.user.id){
                        res.status(401).json({ wronguser: 'Resource can only be updated by owner' });
                    }else{
                        if (req.body.title) {
                            resource.title = req.body.title;
                        }

                        if (req.body.description) {
                            resource.description = req.body.description;
                        }

                        if (req.body.featured !== null) {
                            resource.featured = req.body.featured;
                        }

                        resource.save().then((resource) => res.json(resFromObj(resource)));
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
                        res.status(401).json({ wronguser: 'Resource can only be deleted by owner' });
                    }else{
                        resource.delete().then((resource) => res.json(resFromObj(resource)));   
                    }
                })
            } else {
                res.status(404).json({ noresourcefound: 'No resource with that ID' });
            }
        });
    }   
);



module.exports = router;
