var express = require('express');
var db = require('./services/dataservice.js');

db.connect();

var router = require('express').Router();

router.use(express.urlencoded({
    extended: true
}));

router.post('/api/timetables', function (req, res) {
    var data = req.body;
    db.addTimetable(data.day, data.start, data.end, data.tutor, data.module, function (err, timetable) {
        if (err) {
            console.log(timetable);
            res.status(500).send("Unable to add a new timetable");
        } else {
            res.status(200).send(timetable);
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

router.get('/api/modules/:tutor', function (req, res) {
    //MUST FOLLOW tutor same as data service
    var tid = req.params.tutor;
    db.getTimetableByTutorId(tid, function (err, timetable) {
        if (err) {
            res.status(500).send("Unable to find an timetable with this tutor id");
        } else {
            var result = [];
            timetable.forEach(function(item){
                result.push({
                    'day': item.day,
                    'duration': item.start + " to " + item.end,
                    'module code' : item.module.code
                })
            })
            res.status(200).send(result);
        }
    })
})

router.get('/api/timetables/:id', function (req, res) {
    var id = req.params.id;
    db.getTimetableById(id, function (err, timetable) {
        if (err) {
            res.status(500).send("Unable to find an timetable with this id");
        } else {
            console.log(timetable);
            var results;
                results = (
                    "This module - " + timetable.module.name + " is taught on " + timetable.day + " from " + timetable.start + " to " + timetable.end +  "The module tutor is " + timetable.tutor.name +" and his/her office is at " + timetable.tutor.office
                )

            res.status(200).send(results);
        }
    })
})

module.exports = router;