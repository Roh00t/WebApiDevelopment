var express = require('express');

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

    })
    router.get('/events/:id', function (req, res) {

    })
    router.post('/events', function (req, res) {

    });

    router.put('/events', function (req, res) {

    })

    router.delete('/events/:id', function (req, res) {

    })

    router.get('/organizers', function (req, res) {
        res.send(organizersController.getOrganizers());
    })

    router.post('/organizers', function (req, res) {
        var data = req.body;
        var organizer = {
            name: data.name,
            username: data.username,
            company: data.company,
            password: data.password
        }
        organizersController.addOrganizer(organizer);
        res.redirect('back');
    })



module.exports = router;
