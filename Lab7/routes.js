var express = require('express');
var router = require('express').Router();
var eventsController = require('./controllers/eventsController.js');

    
router.use(express.urlencoded({
    extended: true
}));

router.get('/', function(req, res) {
    res.sendFile(__dirname+"/views/index.html");
});
router.get('/css/*', function(req, res)  {
    // req.originalUrl is “/css/style.css” in our http request   
    res.sendFile(__dirname+"/views/"+req.originalUrl);
});

router.get('/js/*', function(req, res)  {
    // req.originalUrl is “/js/jquery.min.js” in our http request   
    res.sendFile(__dirname+"/views/"+req.originalUrl);
});
router.get('/events',function(req,res){
    res.send(eventsController.getEvents());
})
//Form
router.post('/events', function(req, res) {
    var data = req.body;
    
    var event = {
        name: data.name,
        description: data.description,
        start: {
            date: data.startDate,
            time: data.startTime
        },
        end: {
            date: data.endDate,
            time: data.endTime
        }
    };
    
    eventsController.addEvent(event);
    //To prevent the browser from freezing
    res.redirect('back');   
});

module.exports = router;
