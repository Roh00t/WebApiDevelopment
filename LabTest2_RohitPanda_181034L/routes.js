var express = require('express');
var db = require('./services/dataservice.js');

db.connect();

var router = require('express').Router();

router.use(express.urlencoded({
    extended: true
}));

router.use(express.json());

router.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

router.get('/assignDriver', function (req, res) {
    res.sendFile(__dirname + "/views/assignDriver.html");
});

router.get('/addDriver', function (req, res) {
    res.sendFile(__dirname + "/views/addDriver.html");
});

router.get('/js/*', function(req, res)  {
    res.sendFile(__dirname+"/views/"+req.originalUrl);
});

router.get('/cars',function(req,res){
    db.getAllCars(function(err,cars){
        res.send(cars);
    });
});
router.get('/drivers/:id', function (req, res) {
    var id = req.params.id;
    db.getAvailableDrivers(id, function (err, driver) {
        res.send(driver);
    });
});
router.post('/drivers', function (req, res) {
    var data = req.body;
    db.addDriver(data.name, data.licenseID, data.contactNumber, data.available,
        function (err, driver) {
            res.redirect('/addDriverSuccess');
        });
        router.get('/addDriverSuccess', function (req, res) {
            res.sendFile(__dirname + "/views/addDriverSuccess.html");
        });
});
router.put('/assignDriver', function (req, res) {
    var data = req.body;
    db.assignDriver(data.carId,data.driverName, function(err,car){
        db.updateDriver(data.id,data.name, data.licenseID, data.contactNumber, data.available,
        function (err, driver) {
            res.end();
        });
        res.end();
    });
});

module.exports = router;
