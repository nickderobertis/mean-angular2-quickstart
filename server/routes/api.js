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

// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});

chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/user', (req, res) => {
  User.find({ username: 'sevilayha' }, function(err, user) {
        if (err) throw err;
        res.send(user);
//        return user;
  });
    
});


module.exports = router;