var express = require('express');
var db = require('./services/dataservice.js');
db.connect();

var organizersController = require('./controllers/organizersController.js');    //will not touch on this for this lab. remain as it is

    var router = require('express').Router();

    router.use(express.urlencoded({
        extended: true
    }));

    router.get('/', function (req, res) {
        res.sendFile(__dirname + "/views/index.html");
    });

    router.get('/organizer', function (req, res) {
        res.sendFile(__dirname + "/views/organizer.html");
    });

    router.get('/css/*', function(req, res)  {
        res.sendFile(__dirname+"/views/"+req.originalUrl);
    });
    
    router.get('/js/*', function(req, res)  {
        res.sendFile(__dirname+"/views/"+req.originalUrl);
    });

    router.get('/events', function (req, res) {
        db.getAllEvents(function (err, events) {
            res.send(events);
        })


    })
    router.get('/events/:id', function (req, res) {
        var id = req.params.id;
        db.getEvent(id, function (err, event) {
            res.send(event);
        });
    });
    router.post('/events', function (req, res) {
        var data = req.body;
        db.addEvent(data.name, data.description, data.startDate, data.startTime, data.endDate, data.endTime,
            function (err, event) {
                res.redirect('back');
            });
    });

    router.put('/events', function (req, res) {
        var data = req.body;
        db.updateEvent(data.id, data.name, data.description, data.startDate, data.startTime, data.endDate, data.endTime,
            function (err, event) {
                res.end();
            });

    })

    router.delete('/events/:id', function (req, res) {
        var id = req.params.id;
        db.deleteEvent(id, function (err, event) {
            res.end();
        });

    })

    router.get('/edit', function (req, res) {
        res.sendFile(__dirname + "/views/editEvent.html");
    });

    router.post('/organizers', function (req, res) {
        var data = req.body;
        db.addOrganizer(data.name, data.company, data.username,data.password,
            function (err, organizer) {
                res.redirect('back');
            });
    });

    router.get('/organizers', function (req, res) {
        db.getAllOrganizers(function (err, organisers) {
            res.send(organisers);
        });
    });


    router.get('/organizers/:id', function (req, res) {
        var id = req.params.id;
        db.getOrganizer(id, function (err, organizer) {
            res.send(organizer);
        });
    });

    router.put('/organizers', function (req, res) {
        console.log("Update");
        var data = req.body;
        db.updateOrganizer(data.id,data.name, data.company, data.username,data.password,
            function (err, organizer) {
                res.end();
            });
    });

    router.delete('/organizers/:id', function (req, res) {
        var id = req.params.id;
        db.deleteOrganizer(id, function (err, organizer) {
            res.end();
        });
    });
    router.get('/organizer/edit', function (req, res) {
        res.sendFile(__dirname + "/views/editOrganizer.html");
    });


module.exports = router;
