var express = require('express');
var db = require('./services/dataservice.js');

db.connect();

    var router = require('express').Router();

    router.use(express.urlencoded({
        extended: true
    }));

    /* GET /api/rooms is normally used for RETRIEVING ALL the rooms documents in the rooms collection */
    router.get('/api/rooms', function (req, res) {

    })

    /* POST /api/rooms is normally used for ADDING a NEW ROOM document to the rooms collection */
    router.post('/api/rooms', function (req, res) {

    });

    /* PUT /api/rooms is normally used for UPDATING an EXISTING ROOM document in the rooms collection */
    router.put('/api/rooms', function (req, res) {

    });

    /* GET /api/rooms/:id is normally used for RETRIEVING a room documents based on the object id in the rooms collection */
    router.get('/api/rooms/:id', function (req, res) {

    });

    /* POST /api/search is normally used for SEARCHING for room(s) based on some criteria in the rooms collection */
    router.post('/api/search', function (req, res) {

    });

    /* DELETE /api/rooms/:roomType is normally used for delete room document(s) based on the roomType field from the rooms collection */
    router.delete('/api/rooms/:roomType', function (req, res) {

    });


module.exports = router;
