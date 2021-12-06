var mongoose = require('mongoose');
var schema = mongoose.Schema;
var carSchema = {};
var carModel;
var dealershipSchema = {};
var dealershipModel;
mongoose.set('debug',true);
var database ={
    connect: function(){
        mongoose.connect('mongodb://localhost:27017/carsDB',function(err){
            if(err==null){
                console.log("Connected to Mongo DB");


                //Schemas
                carSchema = schema({
                    name:String,
                    brand:String,
                    carDescription:String,
                    carType:String
                });
                dealershipSchema = schema({
                    name: String,
                    address: String,
                    username: String,
                    password: String

                });



                //Models
                var connection = mongoose.connection;
                carModel = connection.model('car',carSchema);
                dealershipModel = connection.model('dealership',dealershipSchema);




            }else{
                console.log("Error connecting to MongoDB")
            }
        });
    },

    addCar: function(n,b,cd,ct,callback){
        var newCar = new carModel({
            name:n,
            brand:b,
            carDescription:cd,
            carType:ct
        });
        newCar.save(callback);
    },
    getAllCars: function(callback){
        carModel.find({},callback);
    },
    getCar: function(id, callback) {
    carModel.findById(id,callback);
    },
    updateCar: function(id,n,b,cd,ct,callback){
    var updatedCar = {
        name:n,
        brand:b,
        carDescription:cd,
        carType:ct
    };
    carModel.findByIdAndUpdate(id, updatedCar, callback);
    },
    deleteCar: function(id,callback) {
    carModel.findByIdAndDelete(id,callback);
    },
    addDealership: function(n, a, un, p, callback) {
        var newDealership = new dealershipModel({
            name: n,
            address: a,
            username: un,
            password: p
            
        });
        newDealership.save(callback);
    },

    getAllDealerships: function(callback) {
        dealershipModel.find({},callback);
    },
    getDealership: function(id, callback) {
        dealershipModel.findById(id,callback);
    },

    updateDealership: function(id,n, a, un, p, callback) {
        var  updatedDealership ={
            name: n,
            address: a,
            username: un,
            password: p
            
        };
        dealershipModel.findByIdAndUpdate(id, updatedDealership, callback);
    },
    deleteDealership: function(id,callback) {
        dealershipModel.findByIdAndDelete(id,callback);
    }

};

module.exports = database;