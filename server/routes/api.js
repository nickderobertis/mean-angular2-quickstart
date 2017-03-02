/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://frontend:thisisalongpassword@ds041566.mlab.com:41566/rmg-db');
const User = require('../models/user');

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