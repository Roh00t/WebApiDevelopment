var routes = require('./routes.js');
app.use('/',routes);



// const express= require('express');
// const app = express();
// const port = 3000;

// app.listen(port,function() {
//    console.log('Server started on port '+port); 
// });




// app.get('/', function(req,res) {
//     res.send("Hello World"); 
//  });



// //Test on browser
// app.get('/users', function(req,res) {
//     res.send(
//      {
//          name:'Thomas',
//          age:20,
//          hobby:'Badminton'
//      }
//     ); 
//  });



//  // Hello.html
//  app.get('/hello', function(req,res) {
//     res.sendFile(__dirname+"/views/hello.html");
//  });
 
// // calculator
//  app.get('/calculator/add/2/3', function(req,res) {
//    res.send({
//        result:calculator.add(2,3)
//    });
// });

// //Calculator (More detailed)
// app.get('/calculator/:operation/:num1/:num2', function(req,res) {
//    var operation = req.params.operation;
//    var num1 = parseInt(req.params.num1);
//    var num2 = parseInt(req.params.num2);

// });
