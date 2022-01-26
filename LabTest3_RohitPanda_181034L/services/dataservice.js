var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = {};
var bookingSchema = {};
var roomSchema = {};
var userModel, bookingModel, roomModel;

var database = {
    connect: function () {
        mongoose.connect('mongodb://localhost:27017/hotelDB', function (err) {
            if (err == null) {
                console.log("Connected to Mongo DB");
                //initialize values
                userSchema = schema({
                    username: String,
                    password: String,
                    role: String,
                    token: String       
                });

                bookingSchema = schema({
                    name: String,
                    contactNumber: Number,
                    checkinDate: String,
                    checkoutDate: String,
                    room: {
                        type: schema.Types.ObjectId,
                        ref: 'rooms'
                    }        
                });
                roomSchema = schema({
                    roomNumber: Number,
                    price: String,
                    type: String,
                    size: Number
                });

                var connection = mongoose.connection;
                userModel = connection.model('users', userSchema);
                bookingModel = connection.model('booking', bookingSchema);
                roomModel = connection.model('room', roomSchema);
            } else {
                console.log("Error connecting to Mongo DB");
            }
        })
    },
    loginUser: function (u, p, callback) {
        userModel.findOne({ username: u, password: p }, callback);
    },
    updateToken: function (id, token, callback) {
        userModel.findByIdAndUpdate(id, { token: token }, callback);
    },
    checkToken: function(token,callback) {
        userModel.findOne({token:token},callback);
    },
    searchBooking: function (cid, callback) {
        bookingModel.findById({checkinDate:cid}).populate('rooms').exec(callback);
    },
    deleteBookings: function (name, callback) {
        bookingModel.findByIdAndDelete({name:name}, callback);
    },
    getAllBookings:function(callback){
        bookingModel.find({}).populate('rooms',['_id','roomNumber']).exec(callback);
    }
};

module.exports = database;