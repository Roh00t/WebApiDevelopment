var mongoose = require('mongoose');
var schema = mongoose.Schema;
var carSchema = {};
var carModel;
var driverSchema = {};
var driverModel;
console.log('Dataservice loaded successfully');
mongoose.set('debug', true);

var database = {
    connect: function () {
        mongoose.connect('mongodb://localhost:27017/carAssignmentDB', function (err) {
            if (err == null) {
                console.log("Connected to Mongo DB");
                //Schemas
                carSchema = schema({
                    model: String,
                    driverName: String,
                });
                driverSchema = schema({
                    name: String,
                    licenseID: String,
                    contactNumber: Number,
                    available: Boolean
                });

                //Models
                var connection = mongoose.connection;
                carModel = connection.model('car', carSchema);
                driverModel = connection.model('driver', driverSchema);
            } else {
                console.log("Error connecting to MongoDB")
            }
        });
    },
    getAllCars: function (callback) {
        carModel.find({}, callback);
    },
    // getAvailableDrivers: function (id,callback) {
    //     driverModel.findById(id,callback);
    // },

    // kb
    getAvailableDrivers: function (callback) {
        driverModel.find({ available: true }, callback);
    },

    addDriver: function (n, l, cn, a, callback) {
        var newDriver = new driverModel({
            name: n,
            licenseID: l,
            contactNumber: cn,
            available: a

        });
        newDriver.save(callback);
        console.log("New driver successfully added!");
    },
    assignDriver: function (carId, dn, callback) {
        var assignedDriver = {
            driverName: dn
        };
        carModel.findByIdAndUpdate(carId, assignedDriver, callback);
    },
    updateDriver: function (dn, a, callback) {
        // var  updatedDriver ={
        //     available: a

        // };
        driverModel.findOneAndUpdate({ "name": dn }, { $set: { available: false } }, callback);
    }
};

module.exports = database;