var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* SAVE USER */
router.post('/', function(req, res, next) {
  console.log('user--post-routes',req);
// first check if this username already exists?
if(await User.findOne({username : req.body.username})){
  throw " Username" + req.username + "already exits";
}
else{
    
    if(req.body.password){
      User.hash = bcrypt.hashSync(req.body.password, 10);
      User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
  
    } // password is there
  }
  });

  router.post('/login', function(req, res, next) {
    console.log('reqq',req.body);
    // jwt.sign({req},'secretkey',(err,token) =>{
    //   res.json({
    //     token
    //   })
    // })
    User.find({username : req.body.username, password : req.body.password}, function (err, post) {
      // if (err) return next(err);
      // res.json(post);
      if(err) return next(err);
      else{
        jwt.sign({req},'secretkey',(err,token) =>{
      res.json({
        token
      })
    })
        res.json(post);
      }
    });
  });

  module.exports = router;


