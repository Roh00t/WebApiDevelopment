var calculator = require('./calculator.js');
var router = require('express').Router();
	
router.get('/', function(req,res) {
    res.send("Hello World"); 
 });



//Test on browser
router.get('/users', function(req,res) {
    res.send(
     {
         name:'Thomas',
         age:20,
         hobby:'Badminton'
     }
    ); 
 });



 // Hello.html
 router.get('/hello', function(req,res) {
    res.sendFile(__dirname+"/views/hello.html");
 });
 
// calculator
 router.get('/calculator/add/2/3', function(req,res) {
   res.send({
       result:calculator.add(2,3)
   });
});

//Calculator (More detailed)
router.get('/calculator/:operation/:num1/:num2', function(req,res) {
   var operation = req.params.operation;
   var num1 = parseInt(req.params.num1);
   var num2 = parseInt(req.params.num2);

});
 

module.exports = router;
 
