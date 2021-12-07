var express = require('express');
var db = require('./services/carservice.js');
db.connect();

var organizersController = require('./controllers/dealershipController.js');    //will not touch on this for this lab. remain as it is

    var router = require('express').Router();

    router.use(express.urlencoded({
        extended: true
    }));
    router.get('/', function(req,res){
        res.sendFile(__dirname + "/views/index.html");
    });
    router.get('/dealership', function(req,res){
        res.sendFile(__dirname + "/views/dealership.html");
    });
    router.get('/css/*', function(req,res){
        res.sendFile(__dirname + "/views/"+req.originalUrl);
    });
    router.get('/js/*', function(req,res){
        res.sendFile(__dirname + "/views/"+req.originalUrl);
    });
    router.get('/cars',function(req,res){
        db.getAllCars(function(err,cars){
            res.send(cars);
        });
    });
    router.get('/car/:id', function (req, res) {
        var id = req.params.id;
        db.getCar(id, function (err, car) {
            res.send(car);
        });
    });

    router.post('/cars', function (req, res) {
        var data = req.body;
        db.addCar(data.name, data.brand, data.carDescription, data.carType,
            function (err, car) {
                res.redirect('back');
            });
    });
    router.put('/cars', function (req, res) {
        var data = req.body;
        db.updateCar(data.id, data.name, data.brand, data.carDescription, data.carType,
            function (err, car) {
                res.end();
            });
    });
    router.delete('/cars/:id', function(req,res){
        var id = req.params.id;
        db.deleteCar(id, function(err, car){
            res.end();
        });
    });

    router.get('/edit', function (req, res) {
        res.sendFile(__dirname + "/views/editCar.html");
    });


    router.get('/dealerships', function (req, res) {
        db.getAllDealerships(function (err, dealerships) {
            res.send(dealerships);
        });
    });


    router.get('/dealerships/:id', function (req, res) {
        var id = req.params.id;
        db.getDealership(id, function (err, dealership) {
            res.send(dealership);
        });
    });
    router.post('/dealerships', function (req, res) {
        var data = req.body;
        db.addDealership(data.name, data.address, data.username,data.password,
            function (err, dealership) {
                res.redirect('back');
            });
    });
    router.put('/dealerships', function (req, res) {
        var data = req.body;
        db.updateDealership(data.id,data.name, data.address, data.username,data.password,
            function (err, dealership) {
                res.end();
            });
    });
    router.delete('/dealerships/:id', function (req, res) {
        var id = req.params.id;
        db.deleteDealership(id, function (err, dealership) {
            res.end();
        });
    });
    router.get('/dealership/edit', function (req, res) {
        res.sendFile(__dirname + "/views/editDealership.html");
    });
    module.exports = router;