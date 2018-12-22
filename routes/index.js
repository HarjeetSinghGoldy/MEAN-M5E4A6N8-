/**
 * Loads all router files that will be used in the application. This way,
 * we only need to require this one file in our app.js
 */
console.log("routes/indedx")
var router = require('express').Router();
var express = require('express');
var path = require('path');
var expressJwt = require('express-jwt')
const config = require('../config/config.json');
// const jwt = require('./jwt');
const bodyParser = require('body-parser');
const cors = require('cors');

// router.use(function (req, res, next) {
//   console.log("middle wear testing",req.headers);
//   next();
// });


router.use(cors());
router.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// router.use(jwt());
// router.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
// router.use('/books', express.static(path.join(__dirname, 'dist/mean-angular6')));
// router.use('/book-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
// router.use('/book-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
// router.use('/book-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
router.use('/api',require('./book'));

module.exports = router;
