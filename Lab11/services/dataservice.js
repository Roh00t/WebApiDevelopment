var mongoose = require('mongoose');
var schema = mongoose.Schema;
var roomSchema = {};
var roomModel;

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
                var connection = mongoose.connection;
                roomModel = connection.model("rooms", roomSchema);
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
    searchRoom: function(/* add your own parameters*/) {
    },
    getRoomById:function(id,callback){
        roomModel.findById(id, callback);
    },
    updateRoomPrice: function(/* add your own parameters*/){
    },
    deleteRoomByType: function(/* add your own parameters*/){
    }
};

module.exports = database;