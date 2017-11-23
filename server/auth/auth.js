var express = require('express');
var passport = require('passport');
var path = require('path');

var router = express.Router();
module.exports = router;

router.route('/login')
  .all(function(req, res, next){
    next();
  })
  .post(function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info){
      var token;
  
      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }
  
      // If a user is found
      if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res, next);
  });

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/login');
});
