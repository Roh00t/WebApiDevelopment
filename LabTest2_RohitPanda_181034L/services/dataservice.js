var mongoose = require('mongoose');
const { updateCar } = require('../../Lab10Revision/services/carservice');
var schema = mongoose.Schema;
var carSchema = {};
var carModel;
var driverSchema = {};
var driverModel;
console.log('Dataservice loaded successfully');
mongoose.set('debug',true);

var database = {
    connect: function () {
        mongoose.connect('mongodb://localhost:27017/carAssignmentDB',function(err){
            if(err==null){
                console.log("Connected to Mongo DB");
                //Schemas
                carSchema = schema({
                    model:String,
                    driverName:String,
                });
                driverSchema = schema({
                    name:String,
                    licenseID:String,
                    contactNumber:Number,
                    available:Boolean
                });

                //Models
                var connection = mongoose.connection;
                carModel = connection.model('car',carSchema);
                driverModel = connection.model('driver',driverSchema);
            }else{
                console.log("Error connecting to MongoDB")
            }
        });
    },
    getAllCars: function (callback) {
        carModel.find({},callback);
    },
    getAvailableDrivers: function (id,callback) {
        driverModel.findById(id,callback);
    },

    assignDriver: function (carId, dn,callback) {
        var  updatedCar ={
            driverName:dn
        };
        driverModel.findByIdAndUpdate(carId, updatedCar, callback);
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
    updateDriver: function(id,n, l, cn, a, callback) {
        var  updatedDriver ={
            name: n,
            licenseID: l,
            contactNumber: cn,
            available: a
            
        };
        driverModel.findByIdAndUpdate(id, updatedDriver, callback);
    }
};

module.exports = database;