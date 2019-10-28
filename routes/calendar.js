const path = require("path")
const router = require('express').Router();
const db = require('../models');
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.route('/events').get((req, res) => {
    db.Event.findAll({})
    .then(response => {
        res.json(response);
    })
    .catch(err => res.json(err));
});

router.delete("/events:id", isAuthenticated, (req, res) => {
    if(req.user.name === 'rootroot') {
        db.Event.destroy({
            where: {
                id: req.params.id
            }
        }).then(res.send(200))
        .catch(err => res.json(err))
    }
});

router.post('/events', isAuthenticated, (req, res) => {
    const event = req.body;
    console.log(event);
    if(req.user.name === 'rootroot') {
        db.Event.create({
            event: event.eventName,
            year: event.year,
            day: event.day,
            month: event.month,
            start: event.time,
            description: event.description,
            end: 0
        }).then(response => res.json(response))
        .catch(err => res.json(err))
    }
})

module.exports = router;