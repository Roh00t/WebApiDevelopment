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
                        ref: 'module'
                    },
                    tutor: {
                        type: schema.Types.ObjectId,
                        ref: 'tutor'
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
    getAllModules: function(callback){
        moduleModel.find({},callback);
    },
    getModuleByID: function(id,callback){
        moduleModel.findById(id,callback);
    },
    getAllTutors: function(callback){
        tutorModel.find({},callback);
    },
    getTutorByID: function(id,callback){
        tutorModel.findById(id,callback);
    },
    getAllTimetables: function (callback) {
        timetableModel.find({}).populate('module').populate('tutor').exec(callback);
    },
    getTimetableByTutorId: function (tid, callback) {
        timetableModel.find({tutor:{_id:tid}}).populate('module').exec(callback);
    },
    getTimetableById: function (id, callback) {
        timetableModel.findById(id).populate('module').populate('tutor').exec(callback);
    },
};

module.exports = database;