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
                moduleSchema = schema({
                    code: String,
                    name: String,
                });
                timetableSchema = schema({
                    day: String,
                    start: String,
                    end: String,
                    module: {
                        type: schema.Types.ObjectId,
                        ref: 'modules'
                    },
                    tutor: {
                        type: schema.Types.ObjectId,
                        ref: 'tutors'
                    }
                });
                tutorSchema = schema({
                    name: String,
                    office: String
                });
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
    addTimetable: function (d, s, e, mid, tid, callback) {
        var newTimetable = new timetableModel({
            day: d,
            start: s,
            end: e,
            module: mid,
            tutor: tid
        });
        newTimetable.save(callback);
    },
    getAllTimetables: function (callback) {
        //    eventModel.find({}).populate('organizer').exec(callback);
        //    eventModel.find({}).populate('module', 'company').exec(callback);
        timetableModel.find({}).populate('module', 'tutor', ['day', 'start', 'end']).exec(callback);
    },
    getTimetableByTutorId: function (id, callback) {
        tutorModel.findById(id).populate('timetable'['day', 'start', 'end', 'code']);
    },
    getTimetableById: function (id, callback) {
        timetableModel.findById(id).populate('module', 'tutor').exec(callback);
    },
};

module.exports = database;