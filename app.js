'use strict';

require('dotenv').load();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var passport = require('./server/auth/passport-init');

// jwt setup
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'user'
});

// body parser init
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// path to angular dist
app.use(express.static(path.join(__dirname, 'dist')));

// include auth routes
var authRouter = require("./server/auth/auth");
app.use(authRouter);

// return angular build
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
  
// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

module.exports = app;                         