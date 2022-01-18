var mongoose = require('mongoose');
var schema = mongoose.Schema;
var moduleSchema = {};
var timetableSchema = {};
var tutorSchema = {};
var moduleModel, timetableModel, tutorModel;

var database = {
    connect: function () {
        mongoose.connect('mongodb://localhost:27017/Assignment4', function (err) {
            if (err == null) {
                console.log("Connected to Mongo DB");
                //initialize schema values
                

                var connection = mongoose.connection;
                //initialize Models
                moduleModel = connection.model('module', moduleSchema);
                timetableModel = connection.model('timetable', timetableSchema);
                tutorModel = connection.model('tutor', tutorSchema);
              
            } else {
                console.log("Error connecting to Mongo DB");
            }
        })
    },
};

module.exports = database;