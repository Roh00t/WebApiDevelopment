//Set up a connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MySongsDB');

// Create schemas to represent the “artist” and “song” objects.
let Songs = new mongoose.Schema({
    title: String,
    album: String,
    duration: String,
    artist: String,
    releaseDate: String
 

});

let artists = new mongoose.Schema({
    name: String,
    debut: Number,
    profilePic: String 
});


//Create models to represent the artist and song schemas
let Song = mongoose.model('Song', Songs);
let artist = mongoose.model('artist', artists);


// //Find all songs from the song model.
// mongoose.Songs.find({});

// //Find song by ID, 61947f05fdbfd6f5bf236680
// Song.find({_ID:'61947f05fdbfd6f5bf236680'},(error,data) =>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }

// });
// //Add a new artist into the collection.


// //Update the debut year of a specific artist. For eg, update the debut year of Stephanie Sun to 2001.
// Song.findOneAndUpdate({name:'Stephanie Sun'}, {debut:2001},(error,data) =>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }

// });


// //Delete any artist record by id.
// artists.delete({_ID:'61948160fdbfd6f5bf236685'},(error) =>{
//     if(error){
//         console.log(error);
//     }
// });


