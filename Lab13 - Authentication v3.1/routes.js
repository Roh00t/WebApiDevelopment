var express = require('express');
var db = require('./services/dataservice.js');
var crypto = require('crypto');
db.connect();

var router = require('express').Router();

router.use(express.urlencoded({
    extended: true
}));

router.use(function(req,res,next){ //Middleware code, executed on every HTTP request
    //if it is api request, then check for valid token
    if(req.url.includes("/api")) {
        //first time use req.query
var token = req.query.token; //get token from query. if not defined, means no token
        if (token == undefined) {
            res.status(401).send("No tokens are provided");
        } else {
            db.checkToken(token, function (err, user) {
                if (err || user == null) {
                    res.status(401).send("Invalid token provided");
                } else {
                    //using next() means to proceed on with the HTTP request processing
                next();
                }
            });
        }
    } else { //means any other url, no need to check for auth 
        //means proceed on with the request.
        next();
    }
})


router.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

router.get('/login', function (req, res) {
    res.sendFile(__dirname + "/views/login.html");
});

router.get('/js/*', function (req, res) {
    res.sendFile(__dirname + "/views/" + req.originalUrl);
});

router.post('/login', function (req, res) {
    var data = req.body; // get form data from the HTTP body
db.login(data.username, data.password, function (err, user) {
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
                // res.send('/');
            });
        }
    }
})

})

router.get("/logout", function (req, res) {
    var token = req.query.token;
if (token == undefined) {
    res.status(401).send("No tokens are provided");
} else {
    db.checkToken(token, function (err, user) {
        if (err || user == null) {
            res.status(401).send("Invalid token provided");
        } else {
                    db.removeToken(user._id, function (err, user) {
                        res.status(200).send("Logout successfully")
                    });
        }
    })
}

})

router.post("/api/items", function (req, res) {
    //simulate add item to db
    res.status(200).send("Item added successfully.");
})

router.get("/api/items",function(req,res) {
    //simulate retrieve items from db
    res.status(200).send([
        //Hardcoded data
        {
            "name":"item1",
            "price":"$1"
        },
        {
            "name":"item2",
            "price":"$2"
        }
    ])
})



module.exports = router;
