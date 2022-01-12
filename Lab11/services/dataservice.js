var mongoose = require('mongoose');
var schema = mongoose.Schema;
var roomSchema = {};
var roomModel;
var flightSchema = {};
var flightModel;

// deprecation not needed for newer version of mongoose
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

var database = {
    connect: function () {
        mongoose.connect('mongodb://localhost:27017/RestApiDB', function (err) {
            if (err == null) {
                console.log("Connected to Mongo DB");
                //initialize values
                roomSchema = schema({
                    roomNumber: Number,
                    price: String,
                    type: String,
                    size: Number
                });
                flightSchema = schema({
                    flightNumber: String,
                    source:String,
                    destination:String,
                    distance:Number
                });
                var connection = mongoose.connection;
                roomModel = connection.model("rooms", roomSchema);
                flightModel = connection.model("flights", flightSchema);
            } else {
                console.log("Error connecting to Mongo DB");
            }
        })
    },
    addRoom: function(rn, p, t, s, callback){
        var newRoom = new roomModel({
            roomNumber: rn,
            price: p,
            type: t,
            size: s
        });
        newRoom.save(callback);
    },
    getRooms: function(callback){
        roomModel.find({}, callback);
    },
    searchRoom: function(t,callback) {
        roomModel.find({type: new RegExp(t,'i')},callback);
    },

    getRoomById:function(id,callback){
        roomModel.findById(id, callback);
    },
    updateRoomPrice: function(t,p,callback){
        roomModel.updateMany({type:t},{price:p},callback);
    },

    deleteRoomByType: function(t,callback){
        roomModel.deleteMany({type:t},callback);
    },
    addFlight: function(f, s, des, dis, callback){
        var newFlight = new flightModel({
            flightNumber: f,
            source:s,
            destination:des,
            distance:dis
        });
        newFlight.save(callback);
    },
    getFlights: function(callback){
        flightModel.find({}, callback);
    },
    getFlightByDestination:function(des,callback){
        flightModel.find({destination:des}, callback);
    },
    updateFlight: function(id,f,s,des,dis,callback){
        var updatedFlight = {
            flightNumber: f,
            source:s,
            destination:des,
            distance:dis
        };
        flightModel.updateOne({_id:id}, updatedFlight, callback);
    },
    deleteFlight: function(src,callback) {
        flightModel.deleteMany({source,src},callback);
    },
};

module.exports = database;