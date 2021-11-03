var calculator = require('./calculator.js');
var router = require('express').Router();

    /*Cut and paste all the app.get codes from server.js 
      Rename all the app.get to router.get
*/

router.get('/', function(req,res) {
    res.send("Hello World"); 
 });
 
 router.get('/users', function(req,res) {
    res.send(
     {
         name:'Thomas',
         age:20,
         hobby:'Badminton'
     }
    ); 
 });

 router.get('/hello', function(req,res) {
     console.log(dirname);
    res.sendFile(dirname+"/views/hello.html");
 });
 
 router.get('/calculator/add/2/3', function(req,res) {
    res.send({
        result:calculator.add(2,3)
    });
 });
 
 router.get('/calculator/:operation/:num1/:num2', function(req,res) {
   var operation = req.params.operation;
   var num1 = parseInt(req.params.num1);
   var num2 = parseInt(req.params.num2);

   let results = 0;
   if(operation=="add"){
      result = calculator.add(num1,num2);
   }else if(operation=="divide"){
      result = calculator.divide(num1,num2);
   }else if(operation=="multiply"){
      result = calculator.multiply(num1,num2);
   }else if(operation=="subtract"){
      result = calculator.subtract(num1,num2);
   }

   res.send({
      operation: operation,
      number1: num1,
      number2: num2,
      result:result
   })
});
module.exports= router;
