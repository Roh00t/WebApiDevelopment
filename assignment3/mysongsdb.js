var mongoose = require('mongoose');
var schema = mongoose.Schema;
var artistSchema = {};
var artistModel;
var SongSchema = {};
var SongModel;

        mongoose.connect('mongodb://localhost:27017/MySongsDB', function(err){
            if(err==null) {
                console.log("Connected to Mongo DB");
                //initialize values for artists Collection
                artistSchema = schema({
                    name: String,
                    debut:Number,
                    profilePic:String
                });
                var connection = mongoose.connection;
                artistModel = connection.model('artist', artistSchema);
                //initialize values for Songs Collection
                SongSchema = schema({
                    title:String,
                    album:String,
                    duration:String,
                    artist:String,
                    releaseDate:String
                });
                SongModel = connection.model('Song', SongSchema);
            } else {
                console.log("Error connecting to Mongo DB")
            }

            //Find all songs from Song Collection
            SongModel.find({},()=> console.log("Songs Found"));
            //Find song by ID
            SongModel.findById({_id:"61947cb4fdbfd6f5bf23667f"},()=> console.log("Song Found!"));
            //Add Artist
            var newArtist = new artistModel({
                name: "Arthur Curry",
                debut:2021,
                profilePic:"arthur.curry.png"
            });
            newArtist.save(console.log("Artist Saved!"));
            artistModel.findOneAndUpdate({name: "Stepanie Sun"}, {debut:2001}, () =>console.log("Debut year is updated"))
            artistModel.findByIdAndDelete({_id:"619f5733e08bbdc8c943a675"},()=> console.log("Artist Deleted Successfully"));

        });