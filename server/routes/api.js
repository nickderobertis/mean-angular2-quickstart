/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Load external dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Load local dependencies
const tools = require('./tools');

//Load our models
const User = require('../models/user');

//Connect to db
const dbUri = tools.getMongoUri();
mongoose.connect(dbUri);


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/users', (req, res) => {
  User.find({}, function(err, user) {
        if (err) throw err;
        res.send(user);
//        return user;
  });
    
});

router.post('/users', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    
    var user = new User({
        name: name,
        username: username,
        password: password
    });
    
    user.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully!');
    });
    
});


module.exports = router;