const express= require('express');
const app = express();
const port = 3000;

app.listen(port,function() {
   console.log('Server started on port '+port); 
});

var routes = require('./routes.js');
app.use('/',routes);
