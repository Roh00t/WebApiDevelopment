var express = require('express');
var db = require('./services/dataservice.js');
var crypto = require('crypto');
db.connect();

var router = require('express').Router();

router.use(express.urlencoded({
    extended: true
}));

router.use(function (req, res, next) { //Middleware code, executed on every HTTP request
    //if it is api request, then check for valid token
    if (req.url.includes("/api")) {
        //first time use req.query
        var token = req.params.token;
        console.log(token) //get token from query. if not defined, means no token
        if (token == undefined) {
            res.status(401).send("No tokens are provided");
        } else {
            db.checkToken(token, function (err, user) {
                if (err || user == null) {
                    res.status(401).send("Invalid token provided");
                } else {
                    next();
                }
            });
        }
    } else { //means any other url, no need to check for auth 
        //means proceed on with the request.
        next();
    }
});


router.post('/api/login', function (req, res) {
    var data = req.body; // get form data from the HTTP body

    db.loginUser(data.username, data.password, function (err, user) {
        if (err) {
            // if error in server side, we send error 500.
            res.status(500).send("Login unsuccessful due to server error.");
        } else {
            if (user == null) {
                // if the returned user object is null (i.e. cannot login)
                res.status(401).send("Login unsucessful. Please try again later.");
            } else {
                var strToHash = user.username + Date.now();
                var token = crypto.createHash('md5').update(strToHash).digest('hex');
                db.updateToken(user._id, token, function (err, user) {
                    res.status(200).json({ 'message': 'Login successful.', 'token': token });
                });
            }
        }
    })

});

router.post('/api/bookings/search', function (req, res) {
    var data = req.body.checkinDate
    db.searchBooking(data.checkinDate, function (err, bookings) {
        if (err) {
            res.status(500).send("There are no bookings on this date");
        } else {
            res.status(200).send("Organizer has been registered!");
        }
    })
})


router.get('/api/bookings', function (req, res) {
    db.getAllBookings(function (err, bookings) {
        var token = req.query.token; //get token from query. if not defined, means no token
        if (token == undefined) {
            res.status(401).send("No tokens are provided.You are not authenticated to perform this action");
        } else {
            if (err) {
                res.status(500).send("Invalid tokens are provided.You are not authenticated to perform this action");
            } else {
                res.status(200).send(bookings);
            }
        }

    })
})

router.delete('/api/bookings/name/:name', function (req, res) {
    var name = req.params.name;
    db.deleteBookings(name, function (err, booking) {
        var token = req.query.token; //get token from query. if not defined, means no token
        if (token == undefined) {
            res.status(401).send("No tokens are provided.You are not authenticated to perform this action");
        } else {
            var role = req.booking.role;
            if (role !== 'admin') {
                res.status(403).send("You are forbidden to delete the records.");
            } else {
                if (err) {
                    res.status(500).send("Invalid tokens are provided.You are not authenticated to perform this action");
                } else {

                    if (booking == null) {
                        res.status(200).send("No records is deleted");
                    } else {
                        var results;
                        results = (
                            "This the bookings from " + booking.name + " have been removed "
                        )
                        res.status(200).send(results);
                    }
                }
            }

        }

    });
})

module.exports = router;
