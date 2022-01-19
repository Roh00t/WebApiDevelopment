var express = require('express');
var db = require('./services/dataservice.js');

db.connect();

var router = require('express').Router();

router.use(express.urlencoded({
    extended: true
}));

router.post('/timetables', function (req, res) {
    var data = req.body;
    var moduleId = res.locals.module._id;
    var tutorId = res.locals.tutor._id;
    db.addTimetable(data.day, data.start, data.end, moduleId,tutorId, function (err, timetable) {
        if (err) {
            console.log(timetable);
            res.status(500).send("Unable to add a new timetable");
        } else {
            res.status(200).send("Timetable has been successfully added!");
        }

    })
});

router.get('/api/timetables', function (req, res) {
    db.getAllTimetables(function (err, timetables) {
        if (err) {
            res.status(500).send("Unable to get all timetables.");
        } else {
            res.status(200).send(timetables);
        }
    })
})

router.get('/modules/tutor', function (req, res) {
    var id = req.params.id;
    db.getTimetableByTutorId(id, function (err, timetable) {
        if (err) {
            res.status(500).send("Unable to find an timetable with this tutor id");
        } else {
            res.status(200).send(timetable);
        }
    })
})

router.get('/timetable/:id', function (req, res) {
    var id = req.params.id;
    db.getTimetableById(id, function (err, timetable) {
        if (err) {
            res.status(500).send("Unable to find an timetable with this id");
        } else {
            res.status(200).send(timetable);
        }
    })
})

module.exports = router;