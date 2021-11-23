var express = require('express');
var wardController = require('./controllers/wardController');
var router = require('express').Router();

router.use(express.urlencoded({
    extended: true
}));

//Display Index.html
router.get('/', function(req, res) {
    res.sendFile(__dirname+"/views/index.html");
});
//Display addPatient.html on button click
router.get('/addPatient', function(req, res) {
    res.sendFile(__dirname+"/views/addPatient.html");
});
//Enable js Files
router.get('/js/*', function(req, res)  {
    res.sendFile(__dirname+"/views/"+req.originalUrl);
});

//Get Patients
router.get('/patients',function(req,res){
    res.send(wardController.getPatients());
})

//Post Patients
router.post('/patients', function(req, res) {
    var data = req.body;
    

    var patient = {
        name: data.name,
        nric: data.nric,
        contactNum: data.contactNum,
        bedNum: data.bedNum
    };
    
    wardController.addPatient(patient);     
    res.redirect('back');        
});

module.exports = router;
